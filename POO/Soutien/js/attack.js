document.addEventListener("DOMContentLoaded", () => {
    const characters = document.querySelectorAll(".character");

    characters.forEach((character) => {
        const button = character.querySelector(".attack-button");
        button.addEventListener("click", () => {
            const attackerName = character.getAttribute("data-name");
            const attackerAttack = parseInt(character.getAttribute("data-attack"));

            const targets = Array.from(characters).filter(
                (target) => target !== character && parseInt(target.getAttribute("data-health")) > 0
            );

            if (targets.length === 0) {
                alert("Tous les adversaires sont vaincus !");
                return;
            }

            const randomTarget = targets[Math.floor(Math.random() * targets.length)];
            const targetName = randomTarget.getAttribute("data-name");
            const targetHealthElement = randomTarget.querySelector(".health");
            let targetHealth = parseInt(randomTarget.getAttribute("data-health"));

            targetHealth -= attackerAttack;
            if (targetHealth < 0) targetHealth = 0;

            randomTarget.setAttribute("data-health", targetHealth);
            targetHealthElement.textContent = targetHealth;

            alert(`${attackerName} attaque ${targetName} et inflige ${attackerAttack} dégâts !`);

            if (targetHealth === 0) {
                alert(`${targetName} est vaincu !`);
            }
        });
    });
});
