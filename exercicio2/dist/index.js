"use strict";
const listPerson = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];

// paradigma funcional
//a Função que retorna a bio pelo ID
function getBioById(id) {
    const person = listPerson.find(item => item.id === id);
    return (person === null || person === void 0 ? void 0 : person.bio) || "ID não encontrado";
}
//b Função que retorna o nome pelo ID
function getNameById(id) {
    const person = listPerson.find(item => item.id === id);
    return person ? person.name : "ID não encontrado";
}
// c Função que apaga um item pelo ID
function deleteItemById(id) {
    const index = listPerson.findIndex(item => item.id === id);
    if (index !== -1) {
        listPerson.splice(index, 1);
        console.log(`Item com ID ${id} removido.`);
        return "Item removido";
    }
    else {
        console.log("ID não encontrado");
        return "ID não encontrado";
    }
}

// d) Atualizar bio ou nome pelo ID
function updateItemById(id, newBio, newName) {
    const index = listPerson.findIndex(item => item.id === id);
    const person = listPerson.find((item => item.id === id));

    if (!person) {
        return undefined;
    }

    if (newBio) {
        person.bio = newBio;
    }

    if (newName) {
        person.name = newName;
    }

    listPerson[index] = person;

    return person;
}
//funções imperativas
//a Função que retorna a bio pelo ID
function getBioByIdImperative(id) {
    for (let i = 0; i < listPerson.length; i++) {
        if (listPerson[i].id === id) {
            return listPerson[i].bio;
        }
    }
    return "ID não encontrado";
}
//b Função que retorna o nome pelo ID
function getNameByIdImperative(id) {
    for (let i = 0; i < listPerson.length; i++) {
        if (listPerson[i].id === id) {
            return listPerson[i].name;
        }
    }
    return "ID não encontrado";
}
// c Função que apaga um item pelo ID
function deleteItemByIdImperative(id) {
    const index = listPerson.findIndex(item => item.id === id);
    if (index !== -1) {
        listPerson.splice(index, 1);
        console.log(`Item com ID ${id} removido.`);
    }
    else {
        console.log("ID não encontrado");
    }
}
// d) Atualizar bio ou nome pelo ID
function updateItemByIdImperative(id, newBio, newName) {
    for (let i = 0; i < listPerson.length; i++) {
        if (listPerson[i].id === id) {
            if (newBio) {
                listPerson[i].bio = newBio;
            }
            if (newName) {
                listPerson[i].name = newName;
            }
            console.log(`Item com ID ${id} atualizado.`);
            return listPerson[i];
        }
        console.log("ID não encontrado");
        return undefined;
    }
}
    //saidas funcionais
    //a) busca bio pelo ID
    console.log(getBioById(2)); // Output: Alan Turing 
    // b) Buscar nome pelo ID
    console.log(getNameById(4)); // Output: Nicolau Copérnico
    // c) Apagar item pelo ID
    deleteItemById(3); // Remove Nikola Tesla
    console.log(listPerson); // listPerson sem Nikola Tesla
    //d) Atualizando a bio
    updateItemById(4, "Nova bio de Nicolau Copérnico", "Sarah Atualizado");
    console.log(listPerson);
    //saidas imperativas
    //a) busca bio pelo ID
    console.log("Get Bio: ", getBioByIdImperative(1));
    // b) Buscar nome pelo ID
    console.log("Get Name Id", getNameByIdImperative(2)); // Output: Alan Turing
    // c) Apagar item pelo ID
    const updatednameList = deleteItemByIdImperative(3);
    console.log("listPerson Updated:", updatednameList);
    // d) Atualizar bio ou nome pelo ID
    updateItemByIdImperative(4, "Nova bio de Nicolau Copérnico", "Copérnico Atualizado");
    console.log('listPerson final Console: ', listPerson);

// e) Demonstre todas as funções com o paradigma funcional e com o imperativo, copie uma pagina web html, faça o deploy automatico a partir do github e apresente
