// const studente ={
//     nome : "gianni",
//     cognome : "arancia",
//     eta : 20,

// };

// console.log(studente);


// // studente.eta = 19;

// //destructuring
// let {nome , eta} = studente; //funziona sia con let che const

// console.log(nome , eta);

// nome = "gianni2";


// console.log(studente);
// console.log(nome);


// const studenti = [studente , { nome : "gianna", cognome :"mandarino" , eta : 17}];

// console.log(studenti);

// const {newStudente} = studenti;
// console.log(newStudente);

//array di oggetti
let bici = [
    {
        nome:"mk1" ,
        peso: 20,
    },
    {
        nome: "mk2",
        peso: 23,
    },
    {
        nome: "mk22",
        peso: 1,
    },
    {
        nome: "mk45",
        peso: 29,
    },
    {
        nome: "mk0",
        peso: 100,
    },
];

console.log(bici);
console.log(bici[2]);
// const {peso , nome} = bici[2];
// console.log(peso , nome);

let pesoMin = 999999;
let biciL;
for(let i=0 ; i < bici.length ; i++){

    if(bici[i].peso < pesoMin){
        pesoMin = bici[i].peso;
        biciL = i;
    }

}
// console.log(biciL);

//estraggo le proprietà dell'oggetto bici con peso minore
const{peso , nome} = bici[biciL];
console.log(peso , nome);


console.log(`La bici con peso minore è  ${nome}`);
document.getElementById("output").innerHTML = `
<ul>
    <li>La bici con peso minore è  ${nome}</li>
</ul>


`;

