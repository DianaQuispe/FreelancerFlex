/*
 * Archivo principal de JS
 */
var row = document.getElementById("row");
var imagenes = ["assets/images/portfolio/cabin.png", "assets/images/portfolio/cake.png", "assets/images/portfolio/circus.png", "assets/images/portfolio/game.png", "assets/images/portfolio/safe.png", "assets/images/portfolio/submarine.png"];
for (var i = 0; i < imagenes.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "col-4");
    var crearIM = document.createElement("img");
    crearIM.setAttribute("src", imagenes[i]);
    crearIM.setAttribute("id",i.toString());
    crearIM.setAttribute("onclick", "iMG("+i.toString()+")");
    crearIM.style.cursor = "pointer";
    crearIM.setAttribute("class", "imagenes");
    div.appendChild(crearIM);
    row.appendChild(div);
}
function iMG(o) {
    var product = document.getElementById("product");
    var divsote = document.createElement("div");
    divsote.setAttribute("id","divG");
    product.appendChild(divsote);
    var divsito = document.createElement("div");
    divsito.setAttribute("class","divC");
    var crearIMq = document.getElementById(o.toString()).src;
    var crearIM = document.createElement("img");
    crearIM.setAttribute("class","image")
    var crearSpan = document.createElement("p");
    crearSpan.setAttribute("class","span");
    crearSpan.setAttribute("onclick","borrar()");
    var textoSpan = document.createTextNode("X");
    var cambiar = document.createElement('span');
    var cambiarSpan = document.createTextNode("PROJECT TITLE");
    cambiar.setAttribute("class","spani");

    cambiar.setAttribute("onclick","cambiar("+o.toString().src+")");
    cambiar.appendChild(cambiarSpan);
    crearSpan.appendChild(textoSpan);
    crearIM.setAttribute("src", crearIMq);
    console.log(crearIM);
    divsito.appendChild(cambiar);
    divsito.appendChild(crearSpan);
    divsito.appendChild(crearIM);
    divsote.appendChild(divsito);
}
//////////////////////////
function borrar() {
    var product = document.getElementById("product");
    product.removeChild(product.firstChild);
}
