let imoveis = buscartodosimoveis()

if (window.localStorage.getItem("lista") == null) {
    window.localStorage.setItem("lista", JSON.stringify(imoveis))
} else {
    imoveis = JSON.parse(window.localStorage.getItem("lista"))
}

function criarImovelHTML(imovel) {

    const section = document.createElement("section")
    section.setAttribute("class", "listing")

    const img = document.createElement("img")
    img.setAttribute("Class", "listing-photo")
    img.setAttribute("src", imovel.url_foto)
    section.appendChild(img)

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "listing-heading")
    h2.textContent = imovel.nome
    section.appendChild(h2)

    const p = document.createElement("p")
    p.setAttribute("Class", "listing-location")
    p.textContent = `${imovel.cidade}, ${imovel.estado}`
    section.appendChild(p)

    const a = document.createElement("a")
    a.textContent = "Veja mais"

    const url = `detalhes.html?imovel_id=${imovel.id}`

    a.setAttribute("href", url)

    section.appendChild(a)



    const favId = `fav-${imovel.id}`
    const favorito = document.createElement("img")
    favorito.setAttribute("id", favId)
    
    if (imovel.favorito == true) {
        favorito.setAttribute("src", "img/favorito.png")
    } else if (imovel.favorito == false) {
        favorito.setAttribute("src", "img/desfavorito.png")
    }

    favorito.setAttribute("class", "favorito")
    favorito.setAttribute("onclick", `favoritar(${JSON.stringify(imovel)})`)

    section.appendChild(favorito)


    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)

}


const casa = document.getElementById("check_casa")
casa.addEventListener("change", filtro)
const apartamento = document.getElementById("check_apartamento")
apartamento.addEventListener("change", filtro)


function filtro() {
    
    limparlista()
    if (apartamento.checked && casa.checked) {
        mostrartodosimoveis()
    } else if (apartamento.checked) {
        filtroporap()
    } else if (casa.checked) {
        filtroporcasa()
    } else {
        mostrartodosimoveis()
    }
}

function filtroporcasa() {
    limparlista()
    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];

        if (check_casa != 0 && imovel.tipo == "casa") {
            criarImovelHTML(imovel)
        }
    }
}

function filtroporap() {
    limparlista()
    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];

        if (check_apartamento != 0 && imovel.tipo == "apartamento") {
            criarImovelHTML(imovel)
        }
    }
}

function favoritar(imovel) {
    const favId = `fav-${imovel.id}`
    const fav = document.getElementById(favId)
    const posicaoLista = imovel.id - 1

    if (fav.getAttribute("src") == "img/favorito.png") {
        fav.setAttribute("src", "img/desfavorito.png")
        imoveis[posicaoLista].favorito = false
    } else {
        fav.setAttribute("src", "img/favorito.png")
        imoveis[posicaoLista].favorito = true
    }
    window.localStorage.setItem("lista", JSON.stringify(imoveis))


}

function mostrarFavoritos() {
    limparlista()


    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i]

        if (imovel.favorito == true) {
            criarImovelHTML(imovel)
        }
    }
}

function filtrar() {
    const pesquisa = document.getElementById("pesquisa").value
    listarimoveis(pesquisa)
}

function listarimoveis(texto) {
    limparlista()

    if (texto == "") {
        mostrartodosimoveis()
    }

    else {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i];

            const textoM = removerAcentos(texto.toUpperCase())
            const cidadeimovelM = removerAcentos(imovel.cidade.toUpperCase())
            const estadoimovelM = removerAcentos(imovel.estado.toUpperCase())


            if (cidadeimovelM.search(textoM) == 0 || estadoimovelM.search(textoM) == 0) {
                criarImovelHTML(imovel)
            }
        }
    }

}

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function limparlista() {
    const sectionResults = document.getElementById("lista-imoveis")
    while (sectionResults.lastElementChild) {
        sectionResults.removeChild(sectionResults.lastElementChild)
    }
}

function mostrartodosimoveis() {
    limparlista()

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        criarImovelHTML(imovel)
    }
}

function filtrarcomenter(tecla) {
    if (tecla.keyCode == 13) {
        tecla.preventDefault()
        filtrar()
    }
}

 for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i];
        criarImovelHTML(imovel)
    }