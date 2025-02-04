const stripe = Stripe("pk_test_51QoLpwPQ4IByv4wPVceEdhLjjLYo8A79jFgRAnn8OXgMfAACteB9Tpf8wnlAVJKnmSjpE7IffmDIk24gLwQ1sSYk00G5EWKFZY");

const amountInput = document.querySelector("#montant-personnalise");
let amount = parseFloat(amountInput.value) || 0;

amountInput.addEventListener("input", handleAmountChange);

function handleAmountChange(e) {
  const newAmount = parseFloat(e.target.value);
  if (!isNaN(newAmount)) {
    amount = newAmount;
    if (amount >= 1) {
      initialize();
    }
  }
}

let elements;

checkStatus();

document.querySelector("#payment-form").addEventListener("submit", handleSubmit);

async function initialize() {
  const { clientSecret } = await fetch("../app/controllers/create.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  }).then((response) => response.json());

  elements = stripe.elements({ clientSecret });

  const paymentElementOptions = {
    layout: "tabs",
  };
  const paymentElement = elements.create("payment", paymentElementOptions);
  paymentElement.mount("#payment-element");

  const buttonSubmit = document.querySelector('form#payment-form button#submit');
  buttonSubmit.disabled = false;
  buttonSubmit.querySelector("#button-text").textContent = "Don de " + amount + "€";
}


async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  try {
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://sites/PHP/Donate-for-duck/public/index.php",
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        showMessage(error.message);
      } else {
        showMessage("Une erreur inattendue s'est produite.");
      }
    }
  } catch (error) {
    console.error("Erreur lors de la soumission : ", error);
    showMessage("Impossible de finaliser le paiement.");
  } finally {
    setLoading(false);
  }
}

async function checkStatus() {
  const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

  if (!clientSecret) {
    return;
  }

  try {
    const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

    switch (paymentIntent.status) {
      case "succeeded":
        showMessage("Paiement réussi !");
        break;
      case "processing":
        showMessage("Votre paiement est en cours de traitement.");
        break;
      case "requires_payment_method":
        showMessage("Le paiement a échoué. Veuillez réessayer.");
        break;
      default:
        showMessage("Un problème est survenu.");
        break;
    }
  } catch (error) {
    console.error("Erreur lors de la vérification du statut : ", error);
    showMessage("Impossible de vérifier le statut du paiement.");
  }
}

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageContainer.textContent = "";
  }, 4000);
}

function setLoading(isLoading) {
  const submitButton = document.querySelector("#submit");
  const spinner = document.querySelector("#spinner");
  const buttonText = document.querySelector("#button-text");

  if (isLoading) {
    submitButton.disabled = true;
    spinner.classList.remove("hidden");
    buttonText.classList.add("hidden");
  } else {
    submitButton.disabled = false;
    spinner.classList.add("hidden");
    buttonText.classList.remove("hidden");
  }
}
