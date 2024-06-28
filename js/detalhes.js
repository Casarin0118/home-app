function buscarimovel() {
    const urlpagina = window.location.href
    const id = urlpagina.split("=")[1]
    const imvdetalhe = buscarimovelpeloid(id)
    atualizarimovel(imvdetalhe)
}

function atualizarimovel(imovel) {
    const imgimv = document.getElementById("img")
    imgimv.setAttribute("src", imovel.url_foto)

    const nomeimv = document.getElementById("nomeimv")
    nomeimv.textContent = imovel.nome

    const local = document.getElementById("local")
    local.textContent = `${imovel.cidade} - ${imovel.estado}`

    const adicionais = imovel.adicionais
    const ul = document.getElementById("lista-adicionais")

 if (adicionais.length == 0) {
    const li = document.createElement("li")
    li.textContent = "Sem adicionais para o imóvel"
    ul.appendChild(li)
    
    
 } else{
    for (let i = 0; i < adicionais.length; i++) {
        const adicional = adicionais[i]
        const chave = adicional.chave
        const valor = adicional.valor
        
        const li = document.createElement("li")
        li.textContent = `${chave}: ${valor}`
        ul.appendChild(li)
    }
 }
    

}