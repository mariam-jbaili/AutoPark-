# AutoPark — Gestion du parc automobile et location

## Présentation du projet

AutoPark est une application web développée dans le cadre d'un projet individuel chez YouCode.

L'objectif est de proposer une interface permettant de gérer un parc automobile et de créer un parcours de location dynamique pour les clients de l'agence fictive Atlas Auto.

Le projet est réalisé avec HTML, CSS et JavaScript Vanilla (ES6+), sans framework ni backend.

## Technologies utilisées

- HTML5 : structure des pages.
- CSS3 : mise en forme et responsive design.
- JavaScript ES6+ : logique et interactions dynamiques.
- LocalStorage : sauvegarde et récupération des données.
- JSON : manipulation et stockage des données.
- Git & GitHub : gestion des versions et collaboration avec les branches.

## Fonctionnalités du projet

### 1. Gestion du parc automobile

- Affichage dynamique des voitures.
- Ajout d'une nouvelle voiture.
- Modification des informations d'une voiture.
- Annulation de la modification.
- Suppression d'une voiture avec confirmation.
- Recherche de voitures.
- Filtrage par statut et catégorie.
- Tri des voitures selon leur prix.
- Validation des champs du formulaire.
- Vérification de l'unicité de l'immatriculation.

### 2. Dashboard

- Affichage du nombre total de voitures.
- Nombre de voitures disponibles.
- Nombre de voitures louées.
- Nombre de voitures en maintenance.
- Actualisation des statistiques à partir des données sauvegardées.

### 3. Parcours de location — AutoPark 2

Mise en place d'un parcours de location organisé en plusieurs étapes :

- Sélection d'un véhicule disponible.
- Choix des dates de début et de fin de location.
- Choix du mode de récupération.
- Configuration des options de location.
- Récapitulatif de la réservation.
- Gestion des informations du parcours avec un objet JavaScript.

### 4. Gestion des données

- Utilisation de `localStorage` pour conserver les données.
- Utilisation de `JSON.stringify()` et `JSON.parse()`.
- Récupération des voitures enregistrées entre les différentes pages.
- Synchronisation des données entre la gestion du parc, le dashboard et le parcours de location.

## Organisation du projet

```text
AutoPark/
│
├── index.html
├── voitures.html
├── location.html
│
├── css/
│   ├── style.css
│   └── location.css
│
├── js/
│   ├── data.js
│   ├── voitures.js
│   └── location.js
│
└── README.md
```

## Lancement du projet

1. Cloner le dépôt GitHub :

```bash
git clone https://github.com/mariam-jbaili/AutoPark-.git
```

2. Ouvrir le dossier dans Visual Studio Code.
3. Lancer le projet avec l'extension Live Server.
4. Accéder à `index.html` pour le Dashboard.

## Déploiement

Le projet est accessible en ligne sur GitHub Pages :

https://mariam-jbaili.github.io/AutoPark-/

## Auteur

Projet individuel réalisé dans le cadre de la formation YouCode — 2026/2027.

**Technologies :** HTML5, CSS3, JavaScript Vanilla ES6+ et Git.
