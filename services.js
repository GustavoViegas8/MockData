module.exports = {
    characterLength(array, character){
        let registros = array.filter((value)=> value.name.startsWith(character));
        return `Existem ${registros.length} registros com ${character}`;
    },
    
    character(array, character){
        let registros = array.filter((value)=> value.name.startsWith(character));
        return registros;
    },
    
    clientName(array){
        let names = [];
        array.forEach((value)=> names.push(value.name));
        return names;
    },
    firstName(array){
        let names = array.map((value)=> value.name.split(' ')[0]);
        return names;
    },
    
    firstNameCharacter(array, character){
       let names = array.filter((value)=> value.name.startsWith(character))
       .map((value)=> value.name.split(' ')[0]);
       return names;
    },

    legalAge(array){
        let names = array.filter((value) => value.birthday <= yearPast(18));
        return names
    },

    nameInList(array, name){
       return array.find((value) => value.name.startsWith(name))
    },

    sales(array){
        const sales = [];
        array.map((value)=> sales.push(value.countPurchase))
        return sales.reduce((accumulator, currentValue) => accumulator + currentValue)
    },

    yearWithoutBuying(array){
        const names = array.filter((value) => value.lastPurchaseDate < yearPast(1));
        return names
    },

    moreBuyings(array){
        const names = array.filter((value) => value.countPurchase > 15);
        return names
    }

};

const yearPast = (years)=>{
    let dayMonthYear = new Date().toLocaleString().split(' ')[0].split('/')
    return new Date(dayMonthYear[2]-years, dayMonthYear[1]-1, dayMonthYear[0])
}