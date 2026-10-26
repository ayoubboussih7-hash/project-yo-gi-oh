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

const list = [];
const listoverture = [];

const packs = [
    { id: "beginner", nom: "Beginner Pack", prix: 39, cartes: 5 },
    { id: "summoning", nom: "Summoning of the Legends", prix: 59, cartes: 8 },
    { id: "dark", nom: "Dark Summoning", prix: 89, cartes: 12 },
    { id: "lucky", nom: "Lucky Pack", prix: 119, cartes: 16 }
];

const listePanier = document.getElementById("listePanier");
const totalPrix = document.getElementById("totalPrix");
const nombreArticles = document.getElementById("nombreArticles");
const btnclick = document.getElementById("viderPanier");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

function chargerDonnees(cle) {
    try {
        const donnees = JSON.parse(localStorage.getItem(cle) || "[]");
        return Array.isArray(donnees) ? donnees : [];
    } catch {
        return [];
    }
}

function sauvegarderDonnees(cle, donnees) {
    localStorage.setItem(cle, JSON.stringify(donnees));
}

function ajouterPack(packId) {
    const pack = packs.find(p => p.id === packId);

    if (!pack) return;

    const packExiste = list.find(e => e.pack === packId);

    if (packExiste) {
        packExiste.contite++;
    } else {
        list.push({
            pack: packId,
            nom: pack.nom,
            prix: pack.prix,
            carts: pack.cartes,
            contite: 1
        });
    }

    affichage();
}

function affichage() {
    if (!listePanier || !totalPrix || !nombreArticles) return;

    let total = 0;
    let nombreArt = 0;

    if (list.length === 0) {
        listePanier.textContent = "Votre panier est vide.";
    } else {
        listePanier.innerHTML = "";

        list.forEach((e, index) => {
            total += e.prix * e.contite;
            nombreArt += e.contite;

            const ligne = document.createElement("div");
            ligne.className =
                "mb-4 flex flex-wrap items-center justify-between gap-4";

            const texte = document.createElement("p");
            texte.textContent =
                `${e.nom} / Quantité : ${e.contite} / ` +
                `Cartes : ${e.carts * e.contite} / ` +
                `Prix : ${e.prix * e.contite} DH`;

            const supprimer = document.createElement("button");
            supprimer.type = "button";
            supprimer.dataset.index = index;
            supprimer.className =
                "supprimer rounded-lg border border-amber-400 " +
                "px-4 py-2 text-amber-400 hover:text-red-500";

            supprimer.textContent = "Supprimer";

            ligne.append(texte, supprimer);
            listePanier.appendChild(ligne);
        });
    }

    totalPrix.textContent = `${total} DH`;
    nombreArticles.textContent = nombreArt;
}

if (btn1) {
    btn1.addEventListener("click", () => ajouterPack("beginner"));
}
if (btn2) {
    btn2.addEventListener("click", () => ajouterPack("summoning"));
}
if (btn3) {
    btn3.addEventListener("click", () => ajouterPack("dark"));
}
if (btn4) {
    btn4.addEventListener("click", () => ajouterPack("lucky"));
}
if (listePanier) {
    listePanier.addEventListener("click", e => {
        const bouton = e.target.closest(".supprimer");
        if (!bouton) return;
        const index = Number(bouton.dataset.index);

        if (!Number.isInteger(index) || !list[index]) return;

        list.splice(index, 1);
        affichage();
    });
}

if (btnclick) {
    btnclick.addEventListener("click", () => {
        if (list.length === 0) {
            alert("Votre panier est vide.");
            return;
        }

        const achats = chargerDonnees("mythoriaAchats");

        list.forEach(e => {
            const achatExiste = achats.find(a => a.pack === e.pack);

            if (achatExiste) {
                achatExiste.quantite += e.contite;
            } else {
                achats.push({
                    pack: e.pack,
                    nom: e.nom,
                    quantite: e.contite,
                    cartes: e.carts
                });
            }
        });

        sauvegarderDonnees("mythoriaAchats", achats);

        list.length = 0;
        affichage();
        if (window.location.pathname.endsWith("boutique.html")) { }
    });
}

affichage();
const booster = document.getElementById("booster");
const resultats = document.getElementById("resultats");
const message = document.getElementById("message");
const ouvrirBooster = document.getElementById("ouvrirBooster");

const achatsCle = "mythoriaAchats";

function chargerAchats() {
    try {
        const achats = JSON.parse(localStorage.getItem(achatsCle) || "[]");
        return Array.isArray(achats) ? achats : [];
    } catch {
        return [];
    }
}

function sauvegarderAchats(achats) {
    localStorage.setItem(achatsCle, JSON.stringify(achats));
}

function afficherBoosters() {
    const achats = chargerAchats();

    booster.innerHTML = "";

    const disponibles = achats.filter(a => a.quantite > 0);

    if (disponibles.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Aucun booster disponible";
        booster.appendChild(option);

        ouvrirBooster.disabled = true;
        message.textContent = "Achetez d'abord un booster dans la boutique.";
        return;
    }
    ouvrirBooster.disabled = false;
    disponibles.forEach(a => {
        const option = document.createElement("option");
        option.value = a.pack;
        option.textContent = `${a.nom} — ${a.quantite} disponible(s)`;
        booster.appendChild(option);
    });

    message.textContent = "Choisissez un booster à ouvrir.";
}

async function chargerCartes() {
    const reponse = await fetch("./cartes.json");
    if (!reponse.ok) {
        throw new Error("Impossible de charger cartes.json");
    }
    return await reponse.json();
}

function melanger(tableau) {
    const copie = [...tableau];

    for (let i = copie.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copie[i], copie[j]] = [copie[j], copie[i]];
    }

    return copie;
}

function afficherCartes(cartes) {
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
        rarete.textContent = carte.rarity;

        article.append(image, nom, rarete);
        resultats.appendChild(article);
    });
}

ouvrirBooster.addEventListener("click", async () => {
    const packChoisi = booster.value;
    const achats = chargerAchats();
    const achat = achats.find(
        a => a.pack === packChoisi && a.quantite > 0
    );

    if (!achat) {
        message.textContent = "Ce booster n'est pas disponible.";
        afficherBoosters();
        return;
    }

    ouvrirBooster.disabled = true;
    message.textContent = "Ouverture du booster...";

    try {
        const cartes = await chargerCartes();

        const cartesPack = cartes.filter(
            carte => carte.pack === packChoisi
        );

        if (cartesPack.length === 0) {
            message.textContent =
                "Aucune carte n'est configurée pour ce booster.";
            return;
        }

        const nombreCartes = achat.cartes;
        const cartesTirees = melanger(cartesPack).slice(
            0,
            Math.min(nombreCartes, cartesPack.length)
        );

        afficherCartes(cartesTirees);

        achat.quantite--;

        sauvegarderAchats(
            achats.filter(a => a.quantite > 0)
        );

        afficherBoosters();
        message.textContent =
            `Booster ouvert ! ${cartesTirees.length} carte(s) découverte(s).`;

    } catch (erreur) {
        console.error(erreur);
        message.textContent =
            "Erreur de chargement. Vérifiez cartes.json et les chemins des images.";
    } finally {
        ouvrirBooster.disabled = booster.options.length === 0 ||
            !booster.value;
    }
});

afficherBoosters();