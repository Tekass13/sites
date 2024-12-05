document.addEventListener('DOMContentLoaded', function () {
  // Afficher dans la console les valeurs des champs du formulaire #form1
  let formElement = document.getElementById("form1");

  for (let i = 0; i < formElement.length; i++) {
    if (formElement.elements[i].value !== 'Submit') {  
      console.log(formElement.elements[i].value);
    }  
  }
});
