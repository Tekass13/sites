const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('click', function() {

    let joueur = buttons[i];
    let robot = buttons[Math.floor(Math.random() * buttons.length)];
    let resultat = "";

    if (joueur===robot) {
      resultat = "Egalité !";
      let egal = new Audio('sound/egalite.mp3');
      egal.play();
    }

    else if ((joueur.classList.contains('pierre')) && (robot.classList.contains('ciseaux')) || 
    (joueur.classList.contains('ciseaux')) && (robot.classList.contains('feuille')) || 
    (joueur.classList.contains('feuille')) && (robot.classList.contains('pierre'))) {
      resultat = "Gagné !";
      let win = new Audio('sound/win.mp3');
      win.play();
    }

    else {
		resultat = "perdu !";
        let lose = new Audio('sound/lose.mp3');
        lose.play();
	}
    console.log(joueur, robot, resultat);
    let player = joueur.innerHTML;
    let bot = robot.innerHTML;

  	document.querySelector(".resultat").innerHTML =
		`<p class="player">Joueur : ${player} </p></br>
		<p class="player">Robot : ${bot} </p><br/>
		<p class="result">Résultat : ${resultat}</p>`;
	});
}
