const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);

}

const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi

people.forEach((person) => {
  console.log(person.name);
})

const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

const newNumber = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i] + 1;

  newNumber.push(number)

}
console.log(newNumber);


const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori

const authorName = posts.map((post) => { return post.author; })

console.log(authorName);



const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari

const numeriPari = nums.filter((num) => num % 2 === 0)
console.log(numeriPari);



const pencils = [
  { brand: 'Faber-Castell', weight: 8, sizeInCm: 12 },
  { brand: 'Staedtler', weight: 9, sizeInCm: 18 },
  { brand: 'Faber-Castell', weight: 7, sizeInCm: 10 },
  { brand: 'Staedtler', weight: 10, sizeInCm: 16 },
  { brand: 'Faber-Castell', weight: 6, sizeInCm: 14 },
  { brand: 'Derwent', weight: 5, sizeInCm: 20 },
  { brand: 'Derwent', weight: 4, sizeInCm: 11 },
  { brand: 'Staedtler', weight: 6, sizeInCm: 9 },
  { brand: 'Caran d’Ache', weight: 12, sizeInCm: 22 },
  { brand: 'Caran d’Ache', weight: 11, sizeInCm: 13 },
];

// A partire dall'array fornito, crea due array. Uno con le matite lunghe almeno 15cm. L'altro con le restanti.

const matiteLunghe = pencils.filter(pencil => pencil.sizeInCm >= 15)
const matiteCorte = pencils.filter(pencil => pencil.sizeInCm < 15)

console.log(matiteCorte);
console.log(matiteLunghe);



const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2

const studentTrovato = students.filter(student => student.id == 2)

console.log(studentTrovato);



const students_2 = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    classroom: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    classroom: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    classroom: '5B'
  },
];

// Recuperare la classe dello studente Marco Lanci

const studenteClasse = students_2.find((student) => student.name === "Marco Lanci")

console.log(studenteClasse.classroom);
