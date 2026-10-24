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
            carte.src = "/img/lucky.jpg";
            s = 1
        } else if (s === 1) {
            carte.src = "/img/cart mklouba.jpg"
            s = 0
        }
    });
}
let v = 0
if (carte1) {
    carte1.addEventListener("click", function () {
        if (v === 0) {
            carte1.src = "/img/lucky2.jpg";
            v = 1
        } else if (v === 1) {
            carte1.src = "/img/cart mklouba.jpg"
            v = 0
        }
    });
}
let f = 0
if (carte2) {
    carte2.addEventListener("click", function () {
        if (f === 0) {
            carte2.src = "/img/lucky3.jpg";
            f = 1
        } else if (f === 1) {
            carte2.src = "/img/cart mklouba.jpg";
            f = 0
        }
    });
}
let r = 0
if (carte3) {
    carte3.addEventListener("click", function () {
        if (r === 0) {
            carte3.src = "/img/lucky4.jpg";
            r = 1
        } else if (r === 1) {
            carte3.src = "/img/cart mklouba.jpg";
            r = 0
        }
    });
}
let g = 0
if (carte4) {
    carte4.addEventListener("click", function () {
        if (g === 0) {
            carte4.src = "/img/lucky5.jpg";
            g = 1
        } else if (g === 1) {
            carte4.src = "/img/cart mklouba.jpg";
            g = 0
        }
    });
}
let u = 0
if (carte5) {
    carte5.addEventListener("click", function () {
        if (u === 0) {
            carte5.src = "/img/lucky6.jpg";
            u = 1
        } else if (u === 1) {
            carte5.src = "/img/cart mklouba.jpg";
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

// button ajouter //
if (btn1) {
    btn1.addEventListener("click", (e) => {
        e.preventDefault()
        list.push({
            contite: 1,
            prix: 39,
            carts: 5,
            pack: "begner"
        })
        affichage(totalPrix, nombreArticles)
    })
}

if (btn2) {
    btn2.addEventListener("click", (e) => {
        e.preventDefault()
        list.push({
            contite: 1,
            prix: 59,
            carts: 8,
            pack: "summoner"
        })
        affichage(totalPrix, nombreArticles)
    })
}

if (btn3) {
    btn3.addEventListener("click", (e) => {
        e.preventDefault()
        list.push({
            contite: 1,
            prix: 89,
            carts: 12,
            pack: "darck"
        })
        affichage(totalPrix, nombreArticles)
    })
}

if (btn4) {
    btn4.addEventListener("click", (e) => {
        e.preventDefault()
        list.push({
            contite: 1,
            prix: 119,
            carts: 16,
            pack: "lucky"
        })
        affichage(totalPrix, nombreArticles)
    })
}
// function ajouter //
function affichage(totalPrix, nombreArticles) {
    if (list.length <= 0) {
        totalPrix.textContent = 0
        nombreArticles.textContent = 0
        listePanier.textContent = "Votre panier est vide"
    } else {
        let total = 0
        let nombreArt = 0
        let contenu = "";
        list.forEach((e) => {
            contenu += `<div class="flex justify-between"> <p> le pack :${e.pack} / le contiter : ${e.contite} / et le total cart ${e.carts} / le prix : ${e.prix}</p><button href="#" id="sumpr" class="rounded-lg border text-amber-400 border-amber-400 px-6 py-3 font-bold transition hover:border-red-900 hover:text-red-500 hover:scale-90 px-11">sumprim</button> </div>`
            total += e.prix
            nombreArt++
        })
        listePanier.innerHTML = contenu;
        totalPrix.textContent = total;
        nombreArticles.textContent = nombreArt;
    }
}

if (btnclick) {
    btnclick.addEventListener("click", (e) => {
        for (let i = 0; i < list.length; i++) {
            listoverture.push(list[i])
        }
        list.length = 0
        affichage(totalPrix, nombreArticles)
    })
}
// data carts  //
const data = [{
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
},
{
    id: 2,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 3,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 4,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 5,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 6,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 7,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 8,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 9,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 10,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 11,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 12,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 13,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 14,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 15,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 16,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 17,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 18,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
}, {
    id: 1,
    nom: "Dragon des Ombres",
    type: "Monstre",
    rarete: "Legendary",
    image: "images/dragon.png"
},
]