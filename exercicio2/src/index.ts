// Interface para definir os tipos do objeto
interface Person {
    id: number;
    name: string;
    bio: string;
  }
  
  type PersonList = Person[];
  
  const listPerson: PersonList = [
    {
      id: 1,
      name: "Ada Lovelace",
      bio: "Ada Lovelace foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina.",
    },
    {
      id: 2,
      name: "Alan Turing",
      bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial.",
    },
    {
      id: 3,
      name: "Nikola Tesla",
      bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
      id: 4,
      name: "Nicolau Copérnico",
      bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
  ];
  
  // PARADIGMA FUNCIONAL
  // a) Função que retorna a bio pelo ID
  function getBioById(id: number): string {
    const person = listPerson.find((item) => item.id === id);
    return person?.bio || "ID não encontrado";
  }
  
  // b) Função que retorna o nome pelo ID
  function getNameById(id: number): string {
    const person = listPerson.find((item) => item.id === id);
    return person ? person.name : "ID não encontrado";
  }
  
  // c) Função que apaga um item pelo ID
  function deleteItemById(id: number): string {
    const index = listPerson.findIndex((item) => item.id === id);
    if (index !== -1) {
      listPerson.splice(index, 1);
      console.log(`Item com ID ${id} removido.`);
      return "Item removido";
    } else {
      console.log("ID não encontrado");
      return "ID não encontrado";
    }
  }
  
  // d) Atualizar bio ou nome pelo ID
  function updateItemById(
    id: number,
    newBio?: string,
    newName?: string
  ): Person | undefined {
    const index = listPerson.findIndex((item) => item.id === id);
    if (index !== -1) {
      if (newBio) {
        listPerson[index].bio = newBio;
      }
      if (newName) {
        listPerson[index].name = newName;
      }
      return listPerson[index];
    }
    return undefined;
  }
  
  // PARADIGMA IMPERATIVO
  // a) Função que retorna a bio pelo ID
  function getBioByIdImperative(id: number): string {
    for (let i = 0; i < listPerson.length; i++) {
      if (listPerson[i].id === id) {
        return listPerson[i].bio;
      }
    }
    return "ID não encontrado";
  }
  
  // b) Função que retorna o nome pelo ID
  function getNameByIdImperative(id: number): string {
    for (let i = 0; i < listPerson.length; i++) {
      if (listPerson[i].id === id) {
        return listPerson[i].name;
      }
    }
    return "ID não encontrado";
  }
  
  // c) Função que apaga um item pelo ID
  function deleteItemByIdImperative(id: number): void {
    for (let i = 0; i < listPerson.length; i++) {
      if (listPerson[i].id === id) {
        listPerson.splice(i, 1);
        console.log(`Item com ID ${id} removido.`);
        return;
      }
    }
    console.log("ID não encontrado");
  }
  
  // d) Atualizar bio ou nome pelo ID
  function updateItemByIdImperative(
    id: number,
    newBio?: string,
    newName?: string
  ): Person | undefined {
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
    }
    console.log("ID não encontrado");
    return undefined;
  }
  
  // SAÍDAS FUNCIONAIS
  console.log(getBioById(3)); // Output: Bio de Nikola Tesla
  console.log(getNameById(4)); // Output: Nicolau Copérnico
  deleteItemById(3); // Remove Nikola Tesla
  console.log(listPerson);
  updateItemById(4, "Nova bio de Nicolau Copérnico", "Copérnico Atualizado");
  console.log(listPerson);
  
  // SAÍDAS IMPERATIVAS
  console.log("Get Bio: ", getBioByIdImperative(1)); // Output: Ada Lovelace
  console.log("Get Name Id", getNameByIdImperative(2)); // Output: Alan Turing
  deleteItemByIdImperative(3);
  updateItemByIdImperative(4, "Bio atualizada de Copérnico", "Copérnico");
  console.log("listPerson final Console: ", listPerson);
  