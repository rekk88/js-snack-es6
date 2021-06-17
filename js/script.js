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





//-----------------------------------es1------------------------------------------

// let bici = [
//     {
//         nome:"mk1" ,
//         peso: 20,
//     },
//     {
//         nome: "mk2",
//         peso: 23,
//     },
//     {
//         nome: "mk22",
//         peso: 1,
//     },
//     {
//         nome: "mk45",
//         peso: 29,
//     },
//     {
//         nome: "mk0",
//         peso: 100,
//     },
// ];

// console.log(bici);
// console.log(bici[2]);
// // const {peso , nome} = bici[2];
// // console.log(peso , nome);

// let pesoMin = 999999;
// let biciL;
// for(let i=0 ; i < bici.length ; i++){

//     if(bici[i].peso < pesoMin){
//         pesoMin = bici[i].peso;
//         biciL = i;
//     }

// }
// // console.log(biciL);

// //estraggo le proprietà dell'oggetto bici con peso minore
// const{peso , nome} = bici[biciL];
// console.log(peso , nome);


// console.log(`La bici con peso minore è  ${nome}`);
// document.getElementById("output").innerHTML = `
// <ul>
//     <li>La bici con peso minore è  ${nome}</li>
// </ul>

//modifica
// `;

//-----------------------------------es2------------------------------------------
const rand = (min , max) => Math.floor(Math.random() * (max - min + 1) + min); //se metto le {} js si aspetta un return altrimenti senza le parentesi il return è implicito


//caricamento array squadre
let squadre = [
    {
        nome : "mele",
        punti : rand(0,100),
        falli : rand(0,200),
    },
    {
        nome : "fragole",
        punti : rand(0,100),
        falli : rand(0,200),
    },
    {
        nome : "noci",
        punti : rand(0,100),
        falli : rand(0,200),
    },
    {
        nome : "nani",
        punti : rand(0,100),
        falli : rand(0,200),
    },
    {
        nome : "delfini",
        punti : rand(0,100),
        falli : rand(0,200),
    },
];

console.log(squadre);
let squadra;
const nomi = []; //nuovo array con nome e falli subiti

for(let i=0 ; i < squadre.length ; i++){
    const {nome, falli} = squadre[i];
    squadra = {
        nome : nome,
        falli : falli,
    }
    console.log(squadra);
    nomi.push(squadra);

}
console.log(nomi);