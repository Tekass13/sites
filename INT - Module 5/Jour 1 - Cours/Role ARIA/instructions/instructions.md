## Attributs role et aria

Faire un copier-coller de la démo sur le menu d'accessibilité.

Y ajouter :

- un menu de 3 éléments qui pointent vers d'autres pages fictives du site (Notre histoire, Nos produits et Nous contacter).

- un module de recherche interne au site
- un module d'identification à un espace privé

- un bloc supplémentaire après les sections pour y intégrer des réseaux sociaux via Font Awesome.

- un pied de page du site pointant vers des pages internes du site : mentions légales, conditions générales de vente et plan du site.

Les mettre en forme.

L'objectif est de découvrir les role et aria qui peuvent être ajoutés afin d'augmenter l'accessibilité de la page.

1. Ajouter les "role" correspondant sur header, nav, form, main, aside, footer
2. aria sur :
	- le menu principal : aria-label="menu principal"
	- les FA :
  		- aria-hidden="true" sur le lien
  		- un title sur le lien
  		- la class fa-sr-only sur un span ou i à l'intérieur du lien


Ressources :

- https://www.accede-web.com/notices/html-et-css/
- https://www.accede-web.com/notices/interface-riche/
- https://medium.com/just-tech-it-now/web-une-accessibilit%C3%A9-accessible-686ed492e00d
- https://a11y-guidelines.orange.com/fr/articles/memo-accessibilite/#developper-des-pages-web-accessibles