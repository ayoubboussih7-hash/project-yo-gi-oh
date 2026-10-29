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
const listcarts = []

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
        image.className = "w-full rounded-lg object-contain hover:scale-120";
        image.loading = "lazy";

        const nom = document.createElement("h3");
        nom.className = "mt-3 font-bold text-amber-400";
        nom.textContent = carte.name;

        const rarete = document.createElement("p");
        rarete.className = "mt-1 text-sm text-slate-300 ";
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
        const cartesTirees = melanger(cart).slice(0, Math.min(nombre, cart.length))

        afficherCartes(cartesTirees);

        const collection = JSON.parse(localStorage.getItem("mythoriaCollection") || "[]")

        cartesTirees.forEach(carte => {
            collection.push(carte)
        })
        localStorage.setItem("mythoriaCollection", JSON.stringify(collection))

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

// colection //
const grille = document.getElementById("grilleCollection")
const collectionVide = document.getElementById("collectionVide")
const nombreCartes = document.getElementById("nombreCartes")
const filtreType = document.getElementById("filtreType")
const filtreRarete = document.getElementById("filtreRarete")

function afficherCollection() {
    const collection = JSON.parse(
        localStorage.getItem("mythoriaCollection") || "[]"
    );
    const typechoisi = filtreType.value;
    const rareteChoisie = filtreRarete.value;
    const cartesFiltrees = collection.filter(carte => {
        const typeOK = typechoisi === "tous" || carte.type === typechoisi
        const rareteOK = rareteChoisie === "toutes" || carte.rarity === rareteChoisie
        return typeOK && rareteOK
    })
    nombreCartes.textContent = collection.length
    grille.innerHTML = ""
    collectionVide.classList.toggle("hidden", collection.length > 0)
    cartesFiltrees.forEach(carte => {
        const article = document.createElement("article")
        article.className = "rounded-xl border border-amber-500/30 bg-[#18120d] p-3 transition hover:border-amber-400"
        const image = document.createElement("img")
        image.src = carte.image;
        image.alt = carte.name
        image.loading = "lazy"
        image.className = "w-full rounded-lg object-contain"

        const nom = document.createElement("h3")

        nom.className = "mt-3 font-bold text-amber-400"
        nom.textContent = carte.name

        const type = document.createElement("p")

        type.className = "mt-2 text-sm text-gray-300"
        type.textContent = carte.type

        const rarete = document.createElement("p")

        rarete.className = "mt-1 text-sm text-purple-300"
        rarete.textContent = carte.rarity

        article.append(image, nom, type, rarete)
        grille.appendChild(article)

    })
    if (collection.length > 0 && cartesFiltrees.length === 0) {
        const message = document.createElement("P")

        message.className = "col-span-full py-10 text-center text-gray-400"
        message.textContent = "Aucune carte ne correspond aux filtres"
        grille.appendChild(message)
    }
}
if (grille && collectionVide && nombreCartes && filtreType && filtreRarete) {
    filtreType.addEventListener("change", afficherCollection)
    filtreRarete.addEventListener("change", afficherCollection)

    afficherCollection()
}

// Mon Deck //

(function () {
    const cartesDisponibles = document.getElementById("cartesDisponibles")
    const monDeck = document.getElementById("monDeck")
    const nombreCartesDeck = document.getElementById("nombreCartes")
    const deckVide = document.getElementById("deckVide")
    const progressionDeck = document.getElementById("progressionDeck")
    const progressionTexte = document.getElementById("progressionTexte")

    if (!cartesDisponibles || !monDeck) {
        return
    }

    const MAX_CARTES = 20
    const CLE_DECK = "mythoriaDeck"

    let categorieActive = "Toutes"
    let monDeckCartes = []

    function chargerDeck() {
        try {
            const idsSauvegardes = JSON.parse(
                localStorage.getItem(CLE_DECK) || "[]")
            if (!Array.isArray(idsSauvegardes)) {
                return []
            }
            return idsSauvegardes
                .map(id => cart.find(carte => String(carte.id) === String(id)))
                .filter(carte => carte !== undefined)
                .filter((carte, index, tableau) =>
                    tableau.findIndex(c => String(c.id) === String(carte.id)) === index
                )
                .slice(0, MAX_CARTES)
        } catch (erreur) {
            return []
        }
    }

    function sauvegarderDeck() {
        const ids = monDeckCartes.map(carte => carte.id)
        localStorage.setItem(CLE_DECK, JSON.stringify(ids))
    }

    function creerCarte(carte, dansDeck = false) {
        const article = document.createElement("article")
        article.className = "rounded-2xl border border-amber-600 bg-[#1b160e] p-4 shadow-lg"

        const nom = document.createElement("h3")
        nom.className = "mt-3 text-center font-bold text-amber-400"
        nom.textContent = carte.name

        const image = document.createElement("img")
        image.src = carte.image
        image.alt = carte.name

        const type = document.createElement("p")
        type.className = "mt-2 text-center text-sm text-gray-300"
        type.textContent = carte.type

        const rarete = document.createElement("p")
        rarete.className = "mt-2 text-center text-sm text-purple-300"
        rarete.textContent = carte.rarity

        const statistique = document.createElement("div")
        statistique.className = "mt-3 flex justify-between gap-2 text-xs text-gray-300"

        const attaque = document.createElement("span")
        attaque.textContent = "ATK : " + carte.attack

        const defense = document.createElement("span")
        defense.textContent = "DEF : " + carte.defance

        statistique.append(attaque, defense)
        const boton = document.createElement("button")
        boton.type = "button"

        boton.className = "mt-4 w-full rounded-full border border-amber-400 py-2 text-sm font-bold text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-108"

        if (dansDeck) {
            boton.textContent = "retirer - "
            boton.dataset.action = "retirer"
        } else {
            boton.textContent = "Ajouter +"
            boton.dataset.action = "ajouter"
        }
        boton.dataset.id = carte.id

        article.append(image, nom, type, rarete, statistique, boton)
        return article
    }

    function afficher() {
        cartesDisponibles.innerHTML = ""
        const cartesFiltrees = cart.filter(carte => {
            if (categorieActive === "Toutes") {
                return true
            }
            return carte.type === categorieActive
        })
        cartesFiltrees.forEach(carte => {
            const elementCarte = creerCarte(carte)
            cartesDisponibles.appendChild(elementCarte)
        })
    }

    function afficherMON() {
        monDeck.innerHTML = ""
        if (deckVide) {
            deckVide.classList.toggle("hidden", monDeckCartes.length > 0)
        }
        monDeckCartes.forEach(carte => {
            const elementcarte = creerCarte(carte, true)
            monDeck.appendChild(elementcarte)
        })
        if (nombreCartesDeck) {
            nombreCartesDeck.textContent = monDeckCartes.length + "/" + MAX_CARTES
        }
        const pourcentage = (monDeckCartes.length / MAX_CARTES) * 100

        if (progressionDeck) {
            progressionDeck.style.width = pourcentage + "%"
        }
        if (progressionTexte) {
            progressionTexte.textContent = monDeckCartes.length + " /" + MAX_CARTES + " cartes"
        }
    }

    function ajouterAuDeck(id) {
        const carte = cart.find(carte =>
            String(carte.id) === String(id)
        )
        if (!carte) {
            return
        }
        const dejaAjoutee = monDeckCartes.some(carte =>
            String(carte.id) === String(id)
        )
        if (dejaAjoutee) {
            alert("Cette carte est deja dans le deck")
            return
        }
        if (monDeckCartes.length >= MAX_CARTES) {
            alert("le deck est complet : 20 cartes maximum")
            return
        }
        monDeckCartes.push(carte)
        sauvegarderDeck()
        afficher()
        afficherMON()
    }

    function retirerDuDeck(id) {
        monDeckCartes = monDeckCartes.filter(carte =>
            String(carte.id) !== String(id)
        )
        sauvegarderDeck()
        afficher()
        afficherMON()
    }

    function gereClicCarte(event) {
        const bouton = event.target.closest("button[data-action]")
        if (!bouton) {
            return
        }
        const id = bouton.dataset.id
        const action = bouton.dataset.action

        if (action === "ajouter") {
            ajouterAuDeck(id)
        }
        if (action === "retirer") {
            retirerDuDeck(id)
        }
    }
    cartesDisponibles.addEventListener("click", gereClicCarte)
    monDeck.addEventListener("click", gereClicCarte)
    monDeckCartes = chargerDeck()
    afficher()
    afficherMON()
})()