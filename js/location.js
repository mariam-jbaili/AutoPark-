let voitures = JSON.parse(localStorage.getItem("voituresInitiales"));

// declaration 
let  total_prix
let Click2 = false;
let Click1 = false ;
const selectedConfig = {
  etape: 1,
  voitureId: null,
  dateDebut: "",
  dateFin: "",
  modeRecuperation: "agence",
  prix: null ,
  nbrs_jours : 0 ,
  recuperation: {
    heureRecuperation: "",

    // Mode aeroport uniquement.
    aeroport: "",
    numeroVol: "",
    heureArrivee: "",

    // Mode adresse uniquement.
    ville: "",
    adresse: "",
    heureLivraison: "",
  },
}
 const erreur_datedebut = document.getElementById("erreur-datedebut");
 const erreur_datefin = document.getElementById("erreur-datefin");
 const aeroport = document.getElementById("aeroport");
 const adresse = document.getElementById("adresse");
 const agence = document.getElementById("agence");
 const siege = document.getElementById("Siege");
 const Conducteur = document.getElementById("Conducteur");
 let produit_prix 
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
      selectedConfig.voitureId = element.id 
          valider_date()
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
        div.classList.add("premier_div")
  const p = document.createElement("p");
        p.classList.add("eyebrow");
        p.textContent = "VOTRE LOCATION";
  const h2 = document.createElement("h2");
        h2.className = "nom_voitur";
        h2.textContent = `${element.marque}  ${element.modele} `;
 const prix_categorie = document.createElement("p");
       prix_categorie.className ="section-note";
       prix_categorie.textContent=  `${element.categorie} ·  ${element.prixJour} MAD / jour`;
 const divdeux = document.createElement("div");
       divdeux.classList.add("divdeux");
const  h3 = document.createElement("h3");
       h3.textContent = `${jour_depart.value[8]+jour_depart.value[9]} →  ${jour_finale.value} `;
          let date1 =  new Date(jour_finale.value) ;
          let date2 =  new Date(jour_depart.value) ;
          let deffrence = ((date1 - date2 )/ (1000 * 3600 * 24)) + 1; 
           selectedConfig.nbrs_jours = deffrence;
const  nbr_jours = document.createElement("p");
       nbr_jours.className ="section-note";
       nbr_jours.textContent =   ` ${ deffrence} jours · dates incluses`;
const span_prix = document.createElement("span");
const produit =  document.createElement("p");   
      produit.className ="section-note";
      produit.textContent = `Véhicule · ${ deffrence} × ${element.prixJour} MAD `;
              produit_prix = deffrence*element.prixJour ;
              selectedConfig.prix = produit_prix;
const prix = document.createElement("h3");
      prix.textContent =  ` ${ produit_prix } MAD`;
const span_Recuperation = document.createElement("span");
const Recuperation =  document.createElement("p");   
      Recuperation.className ="section-note"; 
      Recuperation.textContent = "Récupération";
const Gratuite = document.createElement("h3");
      Gratuite.classList.add("Gratuite");
      Gratuite.textContent = "Gratuite";
      //==================================================================
const Siege_prix =  document.createElement("h3");
      Siege_prix.classList.add("Siege_prix");
const Siege_p =  document.createElement("p");
     Siege_p.classList.add("section-note", "Siege_p");
const Conducteur_prix =  document.createElement("h3");
       Conducteur_prix.classList.add("Conducteur_prix");
const Conducteur_p =  document.createElement("p");
       Conducteur_p.classList.add("section-note", "Conducteur_p");
const span_Siege = document.createElement("span");
const span_Conducteur= document.createElement("span");
//=============================================================
 const divtrois = document.createElement("div");
       divtrois.classList.add("divtrois");
 const p1 = document.createElement("p");
       p1.textContent="Frais de récupération facturés une seule fois.";
 const p2 = document.createElement("p");
       p2.classList.add("paraghraf_carte");
       p2.textContent="Une demande, sans paiement en ligne.";
const div_prixtotale = document.createElement("div");
const total = document.createElement("h3");  
      total.textContent = "Total estimé"  ;
const prix_total =  document.createElement("h3");
      prix_total.classList.add("prix_total");
      prix_total.textContent =` ${ produit_prix } MAD`;
  
total_prix  = produit_prix



  div.append(p, h2,prix_categorie);
  divtrois.append(div_prixtotale,p1,p2 );
  div_prixtotale.append(total,prix_total)
  divdeux.append(h3 , nbr_jours ,span_prix ,span_Recuperation ,span_Siege,span_Conducteur)
  span_Recuperation.append(Recuperation,Gratuite)
  span_Siege.append(Siege_p,Siege_prix)
  span_Conducteur.append(Conducteur_p,Conducteur_prix)
  span_prix.append(produit , prix)
  
  location.append(div,divdeux,divtrois);
  console.log("saluuuut");
  console.log("Configuration :", selectedConfig);  
}


// validation de la date
const jour_finale = document.getElementById("date_fin"); 
const jour_depart = document.getElementById("date_depart");
const mindate = new Date().toISOString().split('T')[0] ;
      jour_depart.min = mindate;
jour_depart.addEventListener("change",function () {
          jour_finale.value = "";
          erreur_datedebut.textContent = "";
          const date = jour_depart.value;
              date_fin.min = date;
          selectedConfig.dateDebut  = jour_depart.value;
                  
})

 jour_finale.addEventListener("change" ,function () {
          valider_date();
          erreur_datefin.textContent = "";
          selectedConfig.dateFin  = jour_finale.value;
})

// validation de date finale
function valider_date() {
if (jour_depart.value === "") {
    erreur_datedebut.textContent = "Ajouter une date !";
    return ;
}else if(jour_finale.value === ""){
    erreur_datefin.textContent = "Ajouter une date !";
    return ;
}
}
 



// Récupérer les étapes
const vehicule = document.getElementById("vehicule");
const recuperation = document.getElementById("Recuperation");
const options = document.getElementById("Options");


const button_suivant = document.getElementById("btn-suivant");
const button_recommencer = document.getElementById("btn-recommencer");

let step = 1;


recuperation.hidden = true;
options.hidden = true;


button_suivant.addEventListener("click", function () {
    step++;
    vehicule.hidden = true;
    recuperation.hidden = true;
    options.hidden = true;

    if (step === 2) {
        recuperation.hidden = false;
    }
    else if (step === 3) {
        options.hidden = false;
    }
    button_recommencer.textContent= "Précédent";

});
button_recommencer.addEventListener("click",function () {
    step--;
    vehicule.hidden = true;
    recuperation.hidden = true;
    options.hidden = true;
        if (step === 1) {
        vehicule.hidden = false;
        button_recommencer.textContent= "Recommencer";
        }
        else if (step === 2) {
        recuperation.hidden = false;
       }else if(step === 3){
            options.hidden = false;
       }
  
})

console.log(selectedConfig)


//===================================================
aeroport.addEventListener("click",function () {
    const       Gratuite = document.querySelector(".Gratuite");
    const      prix_total = document.querySelector(".prix_total");
         Gratuite.textContent = "+150" ;
         total_prix =  produit_prix + 150;
          prix_total.textContent =` ${total_prix  } MAD`;
          selectedConfig.prix = total_prix ;
          console.log("Prix véhicule :", produit_prix);
console.log("Total :", total_prix);
console.log("Configuration :", selectedConfig);
  
})
adresse.addEventListener("click",function () {
     const      Gratuite = document.querySelector(".Gratuite");
    const      prix_total = document.querySelector(".prix_total");
         Gratuite.textContent = "+100" ;
          total_prix = produit_prix + 100 
          prix_total.textContent =` ${  total_prix  } MAD`;
          selectedConfig.prix = total_prix ;
          console.log("Prix véhicule :", produit_prix);
console.log("Total :", total_prix);
console.log("Configuration :", selectedConfig);
    
})
agence.addEventListener("click",function () {
         const Gratuite = document.querySelector(".Gratuite");
         const prix_total = document.querySelector(".prix_total");
          Gratuite.textContent = "Gratuite" ;
          total_prix  = produit_prix
          prix_total.textContent =` ${ total_prix } MAD`;
          selectedConfig.prix = total_prix ;
     console.log("Prix véhicule :", produit_prix);
console.log("Total :", total_prix);
console.log("Configuration :", selectedConfig);   
})

//========================================================================

Conducteur.addEventListener("click" ,function(){
           
          const Conducteur_p = document.querySelector(".Conducteur_p");
          const Conducteur_prix = document.querySelector(".Conducteur_prix");
          const prix_total = document.querySelector(".prix_total");
if (Click2 == false) {
          Conducteur_p.textContent = `Conducteur· ${ selectedConfig.nbrs_jours} × 200 MAD`;
          Conducteur_prix.textContent = ` ${selectedConfig.nbrs_jours * 200 } MAD`;
          total_prix = (selectedConfig.prix ) + selectedConfig.nbrs_jours * 200
          prix_total.textContent =` ${total_prix } MAD`;
          selectedConfig.prix = total_prix ;
        Click2 = true ;  
}else{
         Conducteur_p.textContent = ``;
          Conducteur_prix.textContent = ` `;
          total_prix = (selectedConfig.prix ) - selectedConfig.nbrs_jours * 200
          prix_total.textContent =` ${total_prix } MAD`;
          selectedConfig.prix = total_prix ;
          Click2 = false ;  
}

})
siege.addEventListener("click" ,function(){
        const Siege_p = document.querySelector(".Siege_p");
        const Siege_prix = document.querySelector(".Siege_prix");
        const prix_total = document.querySelector(".prix_total");
        console.log(selectedConfig);
         if (Click1 == false) {
          console.log(selectedConfig);
            Siege_p.textContent = `Siège bébé · ${selectedConfig.nbrs_jours} × 30 MAD`;
            Siege_prix.textContent = ` ${selectedConfig.nbrs_jours * 30} MAD`;
            total_prix = (selectedConfig.prix ) + selectedConfig.nbrs_jours * 30 ;
            prix_total.textContent =` ${total_prix } MAD`;
            selectedConfig.prix = total_prix ;
            Click1 = true ; 
         } else{
          console.log(selectedConfig);
            Siege_p.textContent = ``;
            Siege_prix.textContent = ` `;
            total_prix = (selectedConfig.prix ) - selectedConfig.nbrs_jours * 30 ;
            prix_total.textContent =` ${total_prix } MAD`;
            selectedConfig.prix = total_prix ;
            Click1 = false ; 
         }

            
})


