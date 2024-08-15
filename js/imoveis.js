const imoveisDB = [
    {
        "id": 1,
        "tipo":"casa",
        "url_foto": "img/1.jpg",
        "nome": "Sobrado lindo",
        "cidade": "Piracicaba",
        "estado": "Rio de Janeiro",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 6
            },
            {
                "chave":"Piscina",
                "valor" : "sim"
            }
        ]
    },
    {
        "id": 2,
        "tipo":"apartamento",
        "url_foto": "img/2.jpg",
        "nome": "Kitnet",
        "cidade": "Saltinho",
        "estado": "Espirito Santo",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Banheiro",
                "valor" : 1
            }
        ]
    },
    {
        "id": 3,
        "tipo":"casa",
        "url_foto": "img/3.jpg",
        "nome": "Casarão",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 10
            },
            {
                "chave":"Quintal",
                "valor" : "Muito grande"
            }
        ]
    },
    {
        "id": 4,
        "tipo":"casa",
        "url_foto": "img/4.jpg",
        "nome": "Sítio muito bonito",
        "cidade": "Campinas",
        "estado": "São Paulo",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 4
            },
            {
                "chave":"Banheiros",
                "valor" : 4
            }
        ]
    },
    {
        "id": 5,
        "tipo" : "apartamento",
        "url_foto": "img/5.jpg",
        "nome": "Casa moderna",
        "cidade": "São Pedro",
        "estado": "São Paulo",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 3
            },
            {
                "chave":"Piscina",
                "valor" : "sim"
            }
        ]
    },
    {
        "id": 6,
        "tipo" : "casa",
        "url_foto": "img/6.jpg",
        "nome": "Mansão em Alphaville",
        "cidade": "Rio Claro",
        "estado": "Bahia",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 6
            },
            {
                "chave":"Piscina",
                "valor" : "sim"
            }
        ]
    },
    {
        "id": 7,
        "tipo" : "casa",
        "url_foto": "img/7.jpg",
        "nome": "Casa de velho",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "adicionais":[]
    },
    {
        "id": 8,
        "tipo" : "casa",
        "url_foto": "img/8.jpg",
        "nome": "Casa normal",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 6
            },
            {
                "chave":"Piscina",
                "valor" : "não"
            }
        ]
    },
    {
        "id": 9,
        "tipo" : "apartamento",
        "url_foto": "img/9.jpg",
        "nome": "Apartamento pequeno",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 2
            },
            {
                "chave":"Piscina",
                "valor" : "apenas do condomínio"
            }
        ]
    },
    {
        "id": 10,
        "tipo" : "casa",
        "url_foto": "img/10.jpg",
        "nome": "Casa de alto padrão",
        "cidade": "São Paulo",
        "estado": "São Paulo",
        "favorito": false,
        "adicionais":[
            {
                "chave":"Quartos disponiveis",
                "valor" : 6
            },
            {
                "chave":"Piscina",
                "valor" : "sim"
            }
        ]
    }
]

function buscartodosimoveis() {
    return imoveisDB
}

function buscarimovelpeloid(id) {
    for (let i = 0; i < imoveisDB.length; i++) {
        const imv = imoveisDB[i];

        if (imv.id == id) {
            return imv;            
        }
        
    }
}
