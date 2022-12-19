 let pokemons = [
     {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
     {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
     {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
     {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
     {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
     {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
     {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
     {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
     {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
     {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

//1. Ordernar los pokemons por base_damage de menor a mayor.
    function orderPokemons() {
        return pokemons.sort((a,b)=>{
             return a.base_damage-b.base_damage;
         });
    }
     console.log(orderPokemons());
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
     function orderAtribute(atribute) {
      if(typeof pokemons[0][atribute]==="string"){
             return pokemons.sort((a, b) => {return a[atribute].localeCompare(b[atribute])})
         }else if(typeof pokemons[0][atribute]==="number"){
             return pokemons.sort((a,b)=>{return  a[atribute] - b[atribute]});
         }else{
             console.log("no es analizable");
         }
    }
     console.log(orderAtribute("type"));
//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
     function filterTypePokemon(tip) {
         return pokemons.filter((e)=>{
             if(e.type===tip){
                 return e.type;
             }
         });
        }
     console.log(filterTypePokemon("fire"));
//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
     class PokemonMaster{
        constructor(id,name,created_date,pokemon){
            this.id = id;
            this.name = name;
             this.created_date = created_date;
             this.pokemon = pokemon;
         }
 }

     let pokemon1 = new PokemonMaster();
     pokemon1.id = 12;
     pokemon1.name = "charmandel";
     pokemon1.created_date = "16 Dec";
     pokemon1.pokemon = [];
     console.log(pokemon1);
//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
    let aleatori = Math.floor(Math.random() *pokemones.length);
     console.log(pokemones[aleatori-1]);
let pokemones = ["charmander","squirtle","bulbasaur","pikachu",
                "pidgey","goldeen","bellsprout","magnemite","ponyta","evee"];
 class PokemonMaster{
     constructor(id,name,created_date,pokemon){
         this.id = id;
         this.name = name;
         this.created_date = created_date;
         this.pokemon = pokemon;
     }
}

 function addAleatoriPokemon(id,name,createdDate) {
     let aleatori = Math.floor(Math.random() *pokemones.length);
     let poke = pokemones[aleatori-1];
     let User = new PokemonMaster();
     User.id = id;
     User.name = name;
     User.created_date = createdDate;
     User.pokemon = [poke];
     return User;
}
 console.log(addAleatoriPokemon(26,"Samgraf","26 de Jun"));

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
//

let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

  let attributes =["min_damage","max_damage"];
  function addAtributes(arr) {
      for(let i  in arr){
          let prop = Math.floor(Math.random() * attributes.length);
          let aleatori = attributes[prop];
         let min = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
         let max = Math.floor(Math.random()*(5 - 3 + 1)) + 3;
         let obj=arr[i];
         if(aleatori == "min_damage"){
        obj[aleatori] = min;
        }else if(aleatori == "max_damage"){
             obj[aleatori] = max;
         }
        }
     console.log(arr);
}

 addAtributes(pokemons);

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

let pokemons = [
     {id: 1,name: 'charmander',type: 'fire',base_damage: 10,base_hp: 12,speed: 30,max_damage: 4},
     {id: 2,name: 'squirtle',type: 'water',base_damage: 9,base_hp: 14,speed: 26,max_damage: 5},
     {id: 3,name: 'bulbasaur',type: 'leaf',base_damage: 8,base_hp: 16,speed: 26,max_damage: 5},
     {id: 4,name: 'pikachu',type: 'electric',base_damage: 12,base_hp: 8,speed: 32,max_damage: 3},
     {id: 5,name: 'pidgey',type: 'air',base_damage: 10,base_hp: 10,speed: 35,max_damage: 3},
     {id: 6,name: 'goldeen',type: 'water',base_damage: 9,base_hp: 12,speed: 32,min_damage: 2},
     {id: 7,name: 'bellsprout',type: 'leaf',base_damage: 10,base_hp: 12,speed: 30,min_damage: 1},
     {id: 8,name: 'magnemite',type: 'electric',base_damage: 9,base_hp: 14,speed: 30,min_damage: 1},
     {id: 9,name: 'ponyta',type: 'fire',base_damage: 12,base_hp: 18,speed: 36,max_damage: 4},
     {id: 10,name: 'evee',type: 'normal',base_damage: 10,base_hp: 12,speed: 30,min_damage: 1}
]




 function damageDealt(pokemon) {
     let daño;
     for (let iterador in pokemons) {
         let obj = pokemons[iterador];
         for (let key in obj) {
             if(obj.name==pokemon && key=="max_damage"){
                 daño = `${pokemon} causa : `+(obj.base_damage + obj.max_damage)+" de Daño";
             }else if(obj.name==pokemon && key=="min_damage"){
                 daño = `${pokemon} causa : `+(obj.base_damage + obj.min_damage)+"de Daño";
             }
         }
     }
     return daño;
}
 console.log(damageDealt("pikachu"));


//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
 const root = document.getElementById("root")
 const table = document.createElement("table")
 table.setAttribute('border', '1')
 root.append(table)

let pokemons = [
     {id: 1,name: 'charmander',type: 'fire',base_damage: 10,base_hp: 12,speed: 30},
     {id: 2,name: 'squirtle',type: 'water',base_damage: 9,base_hp: 14,speed: 26},
     {id: 3,name: 'bulbasaur',type: 'leaf',base_damage: 8,base_hp: 16,speed: 26},
     {id: 4,name: 'pikachu',type: 'electric',base_damage: 12,base_hp: 8,speed: 32},
     {id: 5,name: 'pidgey',type: 'air',base_damage: 10,base_hp: 10,speed: 35},
     {id: 6,name: 'goldeen',type: 'water',base_damage: 9,base_hp: 12,speed: 32},
     {id: 7,name: 'bellsprout',type: 'leaf',base_damage: 10,base_hp: 12,speed: 30},
     {id: 8,name: 'magnemite',type: 'electric',base_damage: 9,base_hp: 14,speed: 30},
     {id: 9,name: 'ponyta',type: 'fire',base_damage: 12,base_hp: 18,speed: 36},
     {id: 10,name: 'evee',type: 'normal',base_damage: 10,base_hp: 12,speed: 30}
]

 let desOrden = pokemons.sort(()=>{
     return Math.random()- 0.5;
 });
 const encabezados1 = document.createElement("thead")
 for (const key in pokemons[0]){
     const th = document.createElement("th")
     th.textContent = key
     th.style.cursor = "pointer"
     th.addEventListener("click", (e) =>{
         ordenarProductosPorAtributo(key)
         table.innerHTML = ""
         table.append(encabezados)
         construirCuerpo()
     })
     encabezados.append(th)
 }
 table.append(encabezados)
 construirCuerpo()

 function construirCuerpo(){
    for (const index in desOrden){
         const tr = document.createElement("tr")
             for (const key in pokemons[index]){
                 const td = document.createElement("td")
                 td.textContent = pokemons[index][key]
                 tr.append(td)
            }
         table.append(tr)
    }
 }

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

    const root = document.getElementById("root")
    const table = document.createElement("table")
    table.setAttribute('border', '1')
    root.append(table)

 let pokemons = [
     {id: 1,name: 'charmander',type: 'fire',base_damage: 10,base_hp: 12,speed: 30},
     {id: 2,name: 'squirtle',type: 'water',base_damage: 9,base_hp: 14,speed: 26},
     {id: 3,name: 'bulbasaur',type: 'leaf',base_damage: 8,base_hp: 16,speed: 26},
     {id: 4,name: 'pikachu',type: 'electric',base_damage: 12,base_hp: 8,speed: 32},
     {id: 5,name: 'pidgey',type: 'air',base_damage: 10,base_hp: 10,speed: 35},
     {id: 6,name: 'goldeen',type: 'water',base_damage: 9,base_hp: 12,speed: 32},
     {id: 7,name: 'bellsprout',type: 'leaf',base_damage: 10,base_hp: 12,speed: 30},
     {id: 8,name: 'magnemite',type: 'electric',base_damage: 9,base_hp: 14,speed: 30},
     {id: 9,name: 'ponyta',type: 'fire',base_damage: 12,base_hp: 18,speed: 36},
     {id: 10,name: 'evee',type: 'normal',base_damage: 10,base_hp: 12,speed: 30}
    
]

 const encabezados = document.createElement("thead")
 for (const key in pokemons[0]){
     const th = document.createElement("th")
    th.textContent = key
     th.style.cursor = "pointer"
     th.addEventListener("click", (e) =>{
         table.innerHTML = ""
         table.append(encabezados)
         construirCuerpo()
     })
     encabezados.append(th)
 }
 table.append(encabezados)
 construirCuerpo()

 function construirCuerpo(){
     for (const index in pokemons){
         const tr = document.createElement("tr")
             for (const key in pokemons[index]){
                 const td = document.createElement("td")
                 td.textContent = pokemons[index][key]
                 tr.append(td)
             }
         table.append(tr)
     }
}