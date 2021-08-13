const faker = require('faker-br');
const { nameInList, yearWithoutNuying } = require('./services');
const services = require('./services');
const array = [];

function createUsers(num){
    for(let i = 0; i < num; i++){
        array[i] = {
            name: faker.name.firstName()+' '+faker.name.lastName(),
            gender: faker.random.arrayElement(["Feminino", "Masculino"]),
            birthday: faker.date.past(10, new Date(2010, 0, 1)),
            lastPurchaseDate: faker.date.past(5),
            countPurchase: faker.random.number(150)
        }
    }
}
createUsers(1000);

/* 1° Desenvolva, utilizando filter , uma função que, 
dado um caractere de entrada, retorne todos os registros 
de clientes cujo o nome inicia com o caractere. */
//console.table(services.character(array, "E"))

//2° Retorne o array de clientes
//console.table(array)

/* 3° Desenvolva uma função que, dado o caractere de entrada, 
retorna apenas um número com o total de registros encontrados. */
//console.table(services.characterLength(array, "E"))

//4° Desenvolva uma função que retorne apenas os nomes dos clientes.
//console.table(services.clientName(array))

//5° Desenvolva uma função que retorne apenas o primeiro nome dos clientes.
//console.table(services.firstName(array))

/* 6° Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo 
os nomes começam com o caractere de entrada da função. */
//console.table(services.firstNameCharacter(array, "E"))

//7° Desenvolva uma função que retorne todos os usuários que são maiores de idade.
//console.table(services.legalAge(array))

//8° Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.
//console.table(services.nameInList(array, "Carla"))
//console.table(services.nameInList(array, array[5].name))

//9°Implemente uma função que retorna o total de vendas realizadas somando as compras de todos os clientes.
//console.table(services.sales(array))

//10° Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.
//console.table(services.yearWithoutBuying(array))

//11° Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.
//console.table(services.moreBuyings(array))
