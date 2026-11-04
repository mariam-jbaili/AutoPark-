let voitures = JSON.parse(localStorage.getItem("voituresInitiales"));

console.log(voitures);
//affichage
function afficher(tableau) {
  const liste_carte = document.getElementById("Liste_cartes");
  liste_carte.innerHTML = "";
  tableau.forEach((element) => {
    const carte = document.createElement("label");
    carte.classList.add("carte");
    const header_carte = document.createElement("span");
    header_carte.classList.add("header_carte");
    const categorie = document.createElement("span");
    categorie.classList.add("categorie");
    categorie.textContent = element.categorie;
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "voiture";
    const h3 = document.createElement("h3");
    h3.textContent = `${element.marque}${element.modele}`;
    const statut = document.createElement("p");
    statut.classList.add("statut");
    statut.textContent = element.statut;
    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.textContent = element.prixJour + " DH / jour";
    header_carte.append(categorie, input);
    carte.append(header_carte, h3, statut, prix);

    liste_carte.append(carte);

    carte.addEventListener("click", function () {
      afficher_carte(element);
    });
  });
}

// affichge des voitures disponible
function afficher_voiture() {
  let voitures_disponible = voitures.filter(function (v) {
    return v.statut === "Disponible";
  });
  afficher(voitures_disponible);
  console.log(voitures_disponible);
}
afficher_voiture();

//afficher carte d information

function afficher_carte(element) {
  const location = document.getElementById("votre_location");
  location.innerHTML = "";
  const div = document.createElement("div");
  const p = document.createElement("p");
        p.classList.add("eyebrow");
        p.textContent = "VOTRE LOCATION";
  const h2 = document.createElement("h2");
        h2.className = "nom_voitur";
        h2.textContent = `${element.marque}  ${element.modele} `;
 const prix_categorie = document.createElement("p");
       prix_categorie.className ="section-note";
       prix_categorie.textContent=  `${element.categorie} ·  ${element.prixJour} 250 MAD / jour`;
 const divdeux = document.createElement("div");
       divdeux.classList.add("divdeux");
 const divtrois = document.createElement("div");
       divtrois.classList.add("divtrois");
 const p1 = document.createElement("p");
       p1.textContent="Frais de récupération facturés une seule fois.";
 const p2 = document.createElement("p");
       p2.classList.add("paraghraf_carte");
       p2.textContent="Une demande, sans paiement en ligne.";

  div.append(p, h2,prix_categorie);
  divtrois.append(p1,p2)
  location.append(div,divdeux,divtrois);

  console.log("saluuuut");
}
// validation de la date 
const jour_depart = document.getElementById("date_depart");
const mindate= new Date().toISOString().split('T')[0] ;

date_depart.min = mindate;

