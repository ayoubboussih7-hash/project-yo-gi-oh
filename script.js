//                                         ~ les cart fore page home ~                                                         // 
const carte = document.getElementById("carte");
const carte1 = document.getElementById("carte1");
const carte2 = document.getElementById("carte2");
const carte3 = document.getElementById("carte3");
const carte4 = document.getElementById("carte4");
const carte5 = document.getElementById("carte5");
let s = 0
if (carte) {
    carte.addEventListener("click", function () {
        if (s === 0) {
            carte.src = "./img/lucky.jpg";
            s = 1
        } else if (s === 1) {
            carte.src = "./img/cart mklouba.jpg"
            s = 0
        }
    });
}
let v = 0
if (carte1) {
    carte1.addEventListener("click", function () {
        if (v === 0) {
            carte1.src = "./img/lucky2.jpg";
            v = 1
        } else if (v === 1) {
            carte1.src = "./img/cart mklouba.jpg"
            v = 0
        }
    });
}
let f = 0
if (carte2) {
    carte2.addEventListener("click", function () {
        if (f === 0) {
            carte2.src = "./img/lucky3.jpg";
            f = 1
        } else if (f === 1) {
            carte2.src = "./img/cart mklouba.jpg";
            f = 0
        }
    });
}
let r = 0
if (carte3) {
    carte3.addEventListener("click", function () {
        if (r === 0) {
            carte3.src = "./img/lucky4.jpg";
            r = 1
        } else if (r === 1) {
            carte3.src = "./img/cart mklouba.jpg";
            r = 0
        }
    });
}
let g = 0
if (carte4) {
    carte4.addEventListener("click", function () {
        if (g === 0) {
            carte4.src = "./img/lucky5.jpg";
            g = 1
        } else if (g === 1) {
            carte4.src = "./img/cart mklouba.jpg";
            g = 0
        }
    });
}
let u = 0
if (carte5) {
    carte5.addEventListener("click", function () {
        if (u === 0) {
            carte5.src = "./img/lucky6.jpg";
            u = 1
        } else if (u === 1) {
            carte5.src = "./img/cart mklouba.jpg";
            u = 0
        }
    });
}
//                                           ~ js for boutique ~                                                                    //

const packs = [
    { id: "beginner", nom: "Beginner Pack", prix: 39, cartes: 5 },
    { id: "summoning", nom: "Summoning of the Legends", prix: 59, cartes: 8 },
    { id: "dark", nom: "Dark Summoning", prix: 89, cartes: 12 },
    { id: "lucky", nom: "Lucky Pack", prix: 119, cartes: 16 }
];

const list = [];

const listePanier = document.getElementById("listePanier");
const totalPrix = document.getElementById("totalPrix");
const nombreArticles = document.getElementById("nombreArticles");
const btnValider = document.getElementById("viderPanier");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

function chargerAchats() {
    try {
        const achats = JSON.parse(
            localStorage.getItem("mythoriaAchats") || "[]"
        );

        return Array.isArray(achats) ? achats : [];
    } catch {
        return [];
    }
}

function ajouterPack(packId) {
    const pack = packs.find(p => p.id === packId);

    if (!pack) return;

    const existant = list.find(article => article.pack === packId);

    if (existant) {
        existant.quantite++;
    } else {
        list.push({
            pack: pack.id,
            nom: pack.nom,
            prix: pack.prix,
            cartes: pack.cartes,
            quantite: 1
        });
    }

    afficherPanier();
}

function afficherPanier() {
    if (!listePanier || !totalPrix || !nombreArticles) return;

    listePanier.innerHTML = "";

    let total = 0;
    let nombre = 0;

    if (list.length === 0) {
        listePanier.textContent = "Votre panier est vide.";
    }

    list.forEach((article, index) => {
        total += article.prix * article.quantite;
        nombre += article.quantite;

        const ligne = document.createElement("div");
        ligne.className =
            "mb-4 flex flex-wrap items-center justify-between gap-4";

        const texte = document.createElement("p");
        texte.textContent =
            `${article.nom} / Quantité : ${article.quantite} / ` +
            `Cartes : ${article.cartes * article.quantite} / ` +
            `Prix : ${article.prix * article.quantite} DH`;

        const supprimer = document.createElement("button");
        supprimer.type = "button";
        supprimer.dataset.index = index;
        supprimer.className =
            "supprimer rounded-lg border border-amber-400 px-4 py-2 text-amber-400";
        supprimer.textContent = "Supprimer";

        ligne.append(texte, supprimer);
        listePanier.appendChild(ligne);
    });

    totalPrix.textContent = `${total} DH`;
    nombreArticles.textContent = nombre;
}

if (btn1) btn1.addEventListener("click", () => ajouterPack("beginner"));
if (btn2) btn2.addEventListener("click", () => ajouterPack("summoning"));
if (btn3) btn3.addEventListener("click", () => ajouterPack("dark"));
if (btn4) btn4.addEventListener("click", () => ajouterPack("lucky"));

if (listePanier) {
    listePanier.addEventListener("click", event => {
        const bouton = event.target.closest(".supprimer");

        if (!bouton) return;

        list.splice(Number(bouton.dataset.index), 1);
        afficherPanier();
    });
}

if (btnValider) {
    btnValider.addEventListener("click", () => {
        if (list.length === 0) {
            alert("Votre panier est vide.");
            return;
        }

        const achats = chargerAchats();

        list.forEach(article => {
            const existant = achats.find(
                achat => achat.pack === article.pack
            );

            if (existant) {
                existant.quantite += article.quantite;
            } else {
                achats.push({
                    pack: article.pack,
                    nom: article.nom,
                    quantite: article.quantite,
                    cartes: article.cartes
                });
            }
        });
        localStorage.setItem("mythoriaAchats", JSON.stringify(achats));

        list.length = 0;
        afficherPanier();
    });
}

afficherPanier();
//  OUVERTURE DES BOOSTERS //

const booster = document.getElementById("booster");
const ouvrirBooster = document.getElementById("ouvrirBooster");
const message = document.getElementById("message");
const resultats = document.getElementById("resultats");

const nombreCartesParPack = {
    beginner: 5,
    summoning: 8,
    dark: 12,
    lucky: 16
};

function afficherBoosters() {
    if (!booster || !ouvrirBooster || !message) return;

    const achats = chargerAchats();
    const disponibles = achats.filter(achat => achat.quantite > 0);

    booster.innerHTML = "";

    if (disponibles.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Aucun booster disponible";
        booster.appendChild(option);

        ouvrirBooster.disabled = true;
        message.textContent = "Achetez d'abord un booster dans la boutique.";
        return;
    }

    disponibles.forEach(achat => {
        const option = document.createElement("option");
        option.value = achat.pack;
        option.textContent =
            `${achat.nom} — Quantité disponible : ${achat.quantite}`;

        booster.appendChild(option);
    });

    ouvrirBooster.disabled = false;
    message.textContent = "Choisissez un booster à ouvrir.";
}

function melanger(cartes) {
    const copie = [...cartes];

    for (let i = copie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copie[i], copie[j]] = [copie[j], copie[i]];
    }

    return copie;
}

function afficherCartes(cartes) {
    if (!resultats) return;

    resultats.innerHTML = "";

    cartes.forEach(carte => {
        const article = document.createElement("article");
        article.className =
            "overflow-hidden rounded-xl border border-amber-500/30 bg-slate-900 p-3";

        const image = document.createElement("img");
        image.src = carte.image;
        image.alt = carte.name;
        image.className = "w-full rounded-lg object-contain";
        image.loading = "lazy";

        const nom = document.createElement("h3");
        nom.className = "mt-3 font-bold text-amber-400";
        nom.textContent = carte.name;

        const rarete = document.createElement("p");
        rarete.className = "mt-1 text-sm text-slate-300";
        rarete.textContent = carte.rarity || "Common";

        article.append(image, nom, rarete);
        resultats.appendChild(article);
    });
}

if (ouvrirBooster) {
    ouvrirBooster.addEventListener("click", () => {
        const packChoisi = booster.value;
        const achats = chargerAchats();

        const achat = achats.find(
            element =>
                element.pack === packChoisi &&
                element.quantite > 0
        );

        if (!achat) {
            message.textContent = "Ce booster n'est pas disponible.";
            afficherBoosters();
            return;
        }

        if (typeof cart === "undefined" || cart.length === 0) {
            message.textContent = "Les cartes ne sont pas chargées.";
            return;
        }

        const nombre = nombreCartesParPack[packChoisi];

        if (!nombre) {
            message.textContent = "Ce type de booster est inconnu.";
            return;
        }

        const cartesTirees = melanger(cart).slice(
            0,
            Math.min(nombre, cart.length)
        );

        afficherCartes(cartesTirees);

        achat.quantite--;

        const achatsRestants = achats.filter(
            element => element.quantite > 0
        );

        localStorage.setItem(
            "mythoriaAchats",
            JSON.stringify(achatsRestants)
        );

        afficherBoosters();

        message.textContent =
            `Booster ouvert ! ${cartesTirees.length} carte(s) découverte(s).`;
    });
}

afficherBoosters();