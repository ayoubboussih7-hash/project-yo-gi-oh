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
// arrays //
const list = []
const listoverture = []
// les button de acheter // 
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")

// panier information //
const listePanier = document.getElementById("listePanier")
const totalPrix = document.getElementById("totalPrix")
const nombreArticles = document.getElementById("nombreArticles")
const btnclick = document.getElementById("viderPanier");

function ajouterPack(pack, prix, carts) {
    const packExiste = list.find(e => e.pack === pack)

    if (packExiste) {
        packExiste.contite++
    } else {
        list.push({
            contite: 1,
            prix: prix,
            carts: carts,
            pack: pack
        })
    }

    affichage(totalPrix, nombreArticles)
}

if (btn1) {
    btn1.addEventListener("click", (e) => {
        e.preventDefault()
        ajouterPack("begner", 39, 5)
    })
}


if (btn2) {
    btn2.addEventListener("click", (e) => {
        e.preventDefault()
        ajouterPack("summoner", 59, 8)
    })
}


if (btn3) {
    btn3.addEventListener("click", (e) => {
        e.preventDefault()
        ajouterPack("darck", 89, 12)
    })
}

if (btn4) {
    btn4.addEventListener("click", (e) => {
        e.preventDefault()
        ajouterPack("lucky", 119, 16)
    })
}

function affichage(totalPrix, nombreArticles) {
    if (list.length === 0) {
        totalPrix.textContent = 0
        nombreArticles.textContent = 0
        listePanier.textContent = "Votre panier est vide"
        return
    }

    let total = 0
    let nombreArt = 0
    let contenu = ""

    list.forEach((e, index) => {
        contenu += `
            <div class="flex justify-between items-center gap-4 mb-4">
                <p>
                    Pack : ${e.pack}
                    / Quantité : ${e.contite}
                    / Cartes : ${e.carts * e.contite}
                    / Prix : ${e.prix * e.contite} DH
                </p>

                <button
                    data-index="${index}"
                    class="supprimer rounded-lg border border-amber-400
                    px-4 py-2 text-amber-400 hover:text-red-500 hover:scale-95 hover:border-red-500">
                    Supprimer
                </button>
            </div>
        `

        total += e.prix * e.contite
        nombreArt += e.contite
    })

    listePanier.innerHTML = contenu
    totalPrix.textContent = total
    nombreArticles.textContent = nombreArt
}
if (listePanier) {
    listePanier.addEventListener("click", (e) => {
        if (e.target.classList.contains("supprimer")) {
            const index = Number(e.target.dataset.index)

            list.splice(index, 1)

            affichage(totalPrix, nombreArticles)
        }
    })
}