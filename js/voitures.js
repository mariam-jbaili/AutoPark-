
import { voituresInitiales } from "./data.js";

let nextID = 7;
let IdModification = null;

const boutonAnnuler = document.getElementById("annuler-modification");

// Local storage
let data = JSON.parse(localStorage.getItem("voituresInitiales"));

if (data === null) {
  data = voituresInitiales;
  localStorage.setItem("voituresInitiales", JSON.stringify(data));
}

// Fonction pour sauvegarder les données
function sauvegarder() {
  localStorage.setItem("voituresInitiales", JSON.stringify(data));
}

// AFFICHER LES VOITURES
function afficher(teble = data) {
  const liste = document.getElementById("liste-voitures");
  liste.innerHTML = "";

  teble.forEach((d) => {
    const tr_global = document.createElement("tr");

    const td_Marque = document.createElement("td");
    const strong_Marque = document.createElement("strong");
    strong_Marque.textContent = d.marque;

    const td_Modele = document.createElement("td");
    td_Modele.textContent = d.modele;

    const td_Immatriculation = document.createElement("td");
    const span_Immatriculation = document.createElement("span");
    span_Immatriculation.classList.add("registration");
    span_Immatriculation.textContent = d.immatriculation;

    const td_Categorie = document.createElement("td");
    td_Categorie.textContent = d.categorie;

    const td_Prix_jour = document.createElement("td");
    td_Prix_jour.classList.add("price");
    td_Prix_jour.textContent = d.prixJour + " DH / jour";

    const td_Statut = document.createElement("td");
    const span_Statut = document.createElement("span");
    span_Statut.classList.add("badge");
    span_Statut.textContent = d.statut;

    const td_actions = document.createElement("td");
    const div_actions = document.createElement("div");
    div_actions.classList.add("row-actions");

    const button_modifier = document.createElement("button");
    button_modifier.classList.add("button", "button-edit");
    button_modifier.textContent = "Modifier";
    button_modifier.dataset.id = d.id;
    button_modifier.type = "button";

    const button_supprimer = document.createElement("button");
    button_supprimer.classList.add("button", "button-delete");
    button_supprimer.textContent = "Supprimer";
    button_supprimer.dataset.id = d.id;
    button_supprimer.type = "button";

    td_Marque.append(strong_Marque);
    td_Immatriculation.append(span_Immatriculation);
    td_Statut.append(span_Statut);
    td_actions.append(div_actions);

    div_actions.append(button_modifier, button_supprimer);

    tr_global.append(
      td_Marque,
      td_Modele,
      td_Immatriculation,
      td_Categorie,
      td_Prix_jour,
      td_Statut,
      td_actions
    );

    liste.append(tr_global);

    // SUPPRIMER
    button_supprimer.addEventListener("click", function () {
      suprimer_voiture(d);
    });

    // MODIFIER
    button_modifier.addEventListener("click", function () {
      document.getElementById("marque").value = d.marque;
      document.getElementById("modele").value = d.modele;
      document.getElementById("immatriculation").value = d.immatriculation;
      document.getElementById("categorie").value = d.categorie;
      document.getElementById("prix-jour").value = d.prixJour;
      document.getElementById("statut").value = d.statut;

      boutonAnnuler.hidden = false;
      modifier_voiture(d);
    });
  });
}

afficher();

// AJOUTER ET MODIFIER
function ajouter() {
  const marque = document.getElementById("marque");
  const modele = document.getElementById("modele");
  const immatriculation = document.getElementById("immatriculation");
  const categorie = document.getElementById("categorie");
  const prix_jour = document.getElementById("prix-jour");
  const statut = document.getElementById("statut");

  if (IdModification === null) {
    const nouvelle_voiture = {
      id: nextID,
      marque: marque.value,
      modele: modele.value,
      immatriculation: immatriculation.value,
      categorie: categorie.value,
      prixJour: prix_jour.value,
      statut: statut.value,
    };
 const erreur_prix = document.getElementById("erreur-prix-jour");

if (prix_jour.value.trim() === "" || Number(prix_jour.value) <= 0) {
    erreur_prix.textContent = "Le prix doit être supérieur à 0 DH.";
    return;
} else {
    erreur_prix.textContent = "";
}
    data.push(nouvelle_voiture);
    nextID++;

  } else {
    const voiture = data.find(function (d) {
      return d.id == IdModification;
    });

    if (voiture) {
      voiture.marque = marque.value;
      voiture.modele = modele.value;
      voiture.immatriculation = immatriculation.value;
      voiture.categorie = categorie.value;
      voiture.prixJour = prix_jour.value;
      voiture.statut = statut.value;
      const erreur_prix = document.getElementById("erreur-prix-jour");
      if (prix_jour.value.trim() === "" || Number(prix_jour.value) <= 0) {
          erreur_prix.textContent = "Le prix doit être supérieur à 0 DH.";
          return;
      } else {
          erreur_prix.textContent = "";
      }
    }
    IdModification = null;
    boutonAnnuler.hidden = true;
  }

  sauvegarder();

  
  marque.value = "";
  modele.value = "";
  immatriculation.value = "";
  categorie.value = "";
  prix_jour.value = "";
  statut.value = "";

  afficher();
}

// ANNULER LA MODIFICATION
boutonAnnuler.addEventListener("click", function () {
  document.getElementById("marque").value = "";
  document.getElementById("modele").value = "";
  document.getElementById("immatriculation").value = "";
  document.getElementById("categorie").value = "";
  document.getElementById("prix-jour").value = "";
  document.getElementById("statut").value = "";

  IdModification = null;
  boutonAnnuler.hidden = true;
});

// BOUTON ENREGISTRER
const button_ajouter = document.getElementById("bouton-enregistrer");

button_ajouter.addEventListener("click", function (event) {
  event.preventDefault();
  ajouter();
});

// FONCTION MODIFICATION
function modifier_voiture(d) {
  IdModification = d.id;
}

// FONCTION SUPPRESSION
function suprimer_voiture(d) {
  if (confirm("Tu veux supprimer cette voiture ?") == true) {
    data.splice(data.indexOf(d), 1);

    sauvegarder();
    afficher();
  }
}

// RECHERCHE ET FILTRES
function Recherche_voiture() {
  let voituresFiltrees = data.filter(function (voiture) {
    let recherche =
      voiture.marque.toLowerCase().startsWith(nom_rechrche.value.toLowerCase()) ||
      voiture.modele.toLowerCase().startsWith(nom_rechrche.value.toLowerCase()) ||
      voiture.immatriculation.toLowerCase().startsWith(nom_rechrche.value.toLowerCase());

    let categorie =
      filtre_categorie.value === "" ||
      filtre_categorie.value === voiture.categorie;

    let statut =
      filtre_statut.value === "" ||
      filtre_statut.value === voiture.statut;

    return recherche && categorie && statut;
  });

  Trier(voituresFiltrees);
}

// TRIER PAR PRIX
function Trier(filtredCars) {
  if (Trier_voiture.value === "croissant") {
    for (let i = 0; i < filtredCars.length - 1; i++) {
      for (let j = i + 1; j < filtredCars.length; j++) {
        if (Number(filtredCars[i].prixJour) > Number(filtredCars[j].prixJour)) {
          let temp = filtredCars[i];
          filtredCars[i] = filtredCars[j];
          filtredCars[j] = temp;
        }
      }
    }
  } else if (Trier_voiture.value === "decroissant") {
    for (let i = 0; i < filtredCars.length - 1; i++) {
      for (let j = i + 1; j < filtredCars.length; j++) {
        if (Number(filtredCars[i].prixJour) < Number(filtredCars[j].prixJour)) {
          let temp = filtredCars[i];
          filtredCars[i] = filtredCars[j];
          filtredCars[j] = temp;
        }
      }
    }
  }

  afficher(filtredCars);
}

// declaration 
const Trier_voiture = document.getElementById("tri-prix");
      Trier_voiture.addEventListener("change", Recherche_voiture);
const filtre_categorie = document.getElementById("filtre-categorie");
      filtre_categorie.addEventListener("change", Recherche_voiture);
const filtre_statut = document.getElementById("filtre-statut");
      filtre_statut.addEventListener("change", Recherche_voiture);
const nom_rechrche = document.getElementById("recherche");
      nom_rechrche.addEventListener("input", Recherche_voiture);
