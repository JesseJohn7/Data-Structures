/* SPREAD OPERATORS */
const chefs = {
  thurday: 'Michaelangelo',
  friday : 'Diego',
  saturday : 'Diego'
}

/* Enhanced Object literals */
const food = {
orderPasta(ingredient1,ingredient2,ingredient3){
console.log(`the ingredients for cooking pasta is ${ingredient1},${ingredient2},${ingredient3}`)
},
mainMenu : ["pizza","shawarma","Meatpie","Ice cream"],
starterMenu:["Noodles","spaghetti and meatballs","fried rice and chicken"],
chefs
}

/* The for of LOOP */
const miMenu = [...food.mainMenu,...food.starterMenu]
for (item of miMenu) 
console.log(item)

console.log(food)

/* Enhanced Object literals */

/* const pastaIngre = [
  prompt('What are the ingredients for cooking pasta'),
  prompt('What are the ingredients for cooking pasta'),
  prompt('What are the ingredients for cooking pasta')
] */

/* food.orderPasta(...pastaIngre)   */

/* const hausaDishes = {
  vegetableSoup:function(ingred1,ingred2,ingred3,ingred4,ingred5){
    console.log(`The ingredients for making vegetble soup is ${ingred1},${ingred2},${ingred3},${ingred4},${ingred5}`)
  }
}

const vegetingre = [
  prompt('What are the ingredients for making vegetabel soup'),
  prompt('What are the ingredients for making vegetabel soup'),
  prompt('What are the ingredients for making vegetabel soup'),
  prompt('What are the ingredients for making vegetabel soup'),
  prompt('What are the ingredients for making vegetabel soup')
]


hausaDishes.vegetableSoup(...vegetingre) */


/* const[c,d,e] = [] */




/* REST PATTERNS
Because is at  the left hand side of the equal to sign
*/
/* const[pizza,shawarma,...otherFood] = [food.mainMenu,food.starterMenu]
console.log(pizza,shawarma,otherFood)
const [a,b,...others] = [1,2,3,4,5]
console.log(a,b,others)
 */



/* SHORT CIRCUITING && AND OR  */

const rest1 ={
  name:'La cathedral',
  numGuest : 0
}
/* Zero is a false value so it assigns 10 */
const rest2 ={
  name:'Del mundo',
  owner :'senora sanchez'
}

/* rest1.numGuest = rest1.numGuest ||= 10
rest2.numGuest = rest2.numGuest ||=10 */

/* rest1.numGuest||= 10
rest2.numGuest||=10 */

rest2.owner &&= '<ANONYMOUS>'

/* Nullish collasecing  */
rest1.numGuest??= 10
rest2.numGuest??=10

/* Brings out the zero because zero is not a null value or undefined */

/* console.log(rest1)
console.log(rest2) */



const rest3 = {
  name:'MI resturante',
  owner: 'Jesse John'
}
rest1.attendance || 2000
rest2.attendance || 2000
rest3.attendance || 2000

/* console.log(rest1)
console.log(rest2)
console.log(rest3)
 */


const trophies = {
  england:['EPL ,Carabao,Fa Cup,Community Shield'],
  europe:['UEFA champions League , Super Cup , Club World Cup']
}

const manchesterCity = {
  founded:1894,
  captain:'kevin de bruyne',
  trophies,
  eplTitles(firstTitle,secondTitle,thirdTitle,fourthTitle,fifthTitle){
    console.log(`manchester won titles in  the following years ${firstTitle},${secondTitle},${thirdTitle},${fourthTitle},${fifthTitle}`)
  }
}
const eplYears = [
  2019,
  2020,
  2021,
  2022,
  2023,
  2024
]
console.log(manchesterCity)

const days = ['mon','tues','wed','thurs','fri','sat','sun']
for(const day of days)
  console.log(day)
  

const myArea = {
  country:"Nigeria",
  state: "Adamawa state",
  population:3000,
  Job(Job1,Job2,Job3,Job4){
    console.log(`The main occupation for people in my area is ${Job1},${Job2},${Job3},${Job4}`)
  },
  geozone : "North East",
  Hobbies : ["Football,Movies"]
}
const occupation = ["Retailers","Vendors","Traders","HouseWifes"]
console.log(myArea.Job(...occupation)) 

const bestMeal = ["Pasta","Rice","Pepper soup","Vegatable soup"]
const jambutu = {
myArea,
bestMeal
} 
for (foodies of bestMeal)
console.log(foodies)
console.log(jambutu)

const person  = {
  name:'Donald trump',
  age:70,
  job:'President',
}

for (let key of Object.keys(person)){
console.log(key)
}

for (let value of Object.values(person)){
  console.log(value)
  }

for (let [key,value] of Object.entries(person)){
  console.log(`${key}: ${value}`)
}


/* Sets */
const orderset = new Set(["pizza","pasta","chicken","lasagna","pizza","pizza"])
console.log(orderset)

/* Set size */
console.log(orderset.size)

/* Check if element exist in a set */
console.log(orderset.has('pizza'))
console.log(orderset.has('macroni'))
/* Add and delete from set */
orderset.add ('Garlic bread')
orderset.delete('pizza')
/* To clear set */
/* orderset.clear() */
console.log(orderset)

for (const order of orderset)
  console.log(orderset)


const staff  = ['manager','chef','waiter','chef','waiter']
const staffUni = [...new Set (staff)]
console.log(staffUni)

console.log(new Set ('Jesse').size)



const favPeople = new Set (['Elon Musk','Mark Zuckerberg','Lionel Messi','Cristiano Ronaldo','Donald trump','Cristiano Ronaldo','Lionel Messi'])
console.log(favPeople)
console.log(favPeople.has('devi vishiakumar'))
favPeople.add('Dwayne Johnson')
console.log(favPeople)
favPeople.delete('Cristiano ronaldo')
console.log(favPeople)

/* MAPS */
const club = new Map()
club.set('name','Manchester City')
club.set('est','1896')
club.set('country','England')
club.set('bestPlayer','Sergio Aguero')
club.set('categories',['UCL','FA CUP','EPL','carabao'])
.set('captain','kevin de bruyne')
.set('Top scorer','sergio ageuaro')
.set ('true','we are open 24/7')
.set('false','we are not open today')
.set('open',7)
.set('close',12)
console.log(club)

/* GET ELEMENTS */
console.log(club.get('name'))
console.log(club.get('est'))
console.log(club.get('country'))
console.log(club.get('true'))

const time = 9
console.log(club.get(time>club.get('open') && time < club.get('close')))
/* HAS */
console.log(club.has('categories'))

/* DELETE */
club.delete('Top scorer')
console.log(club)

/* size */
console.log(club.size)

/* rest.clear() */

const resturant = new Map()
resturant.set('name','Mac Donalds')
resturant.set('location','United States')
resturant.set('state','New York')
console.log(resturant.get('name'))

for (const [key,value] of resturant){
  console.log(`${key} : ${value}`)
}
/* MAPS ITERATION */
/* const quiz = new Map ([
  ['question','what is the best programming language in the world'],
  [1,'C'],
  [2,'Java'],
  [3,'Javascript'],
  ['correct',3],
  [true,'Correct✅'],
  [false,'Try again']

])
console.log(quiz.get('question'))
for (const [key,value] of quiz){
  if(typeof key === 'number'){
    console.log(`option ${key} : ${value}`)
  }
}
const answer = Number(prompt('Your answer(1,2, or3):'))
console.log(quiz.get(answer === quiz.get('correct')))
 */
/* const cityQuiz = new Map([
  ['ques1', 'who is the highestGoalscorer in 2024']
  [1,'Erling braut Haaland'],
  [2,'Josko Gvardiol'],
  [3,'Bernado Silva']
  [4,'Savinho']
  ['correc',1],
  [true,'Correct✅'],
  [false,'Try again💔']
])

console.log(cityQuiz.get('ques1'))
for (const [key,value] of cityQuiz){
  if(typeof key === 'number'){
    console.log(`option ${key} : ${value}`)
  }
}
const cityAns =  Number(prompt(`Select between 1-3:`))
console.log(cityQuiz.get(cityAns === cityQuiz.get('correc'))) */

const About = {
  name:'Jesse John',
  class:'Level 3',
  Job:'Programmer',
  Hobby:'Coding,Reading',
  Hates:'Been Broke',
  DreamCountry:['United States','United Kingdom','France','Netherlands']
}

for (const key of Object.keys(About)){
  console.log(key)
}
for (const value of Object.values(About)){
  console.log(value)
}

for (const [key,value] of Object.entries(About)){
  console.log(`${key} : ${value}`)
}









/* const quiz = new Map ([
  ['question','Which of these states is located in Nigeria?'],
  [1,'Chicago'],
  [2,'Mathattan'],
  [3,'Paris'],
  [4,'Adamawa'],
  [5,'Ottawa'],
  ['correct',4],
  [true,'Correct✅'],
  [false,'Sorry Try Again💔']
])
console.log(quiz.get('question'))
for (const[key,value] of quiz){

  if(typeof key === 'number'){
    console.log(`${key} : ${value}`)
  }
} */

/* const answer = Number (prompt('Please input from number 1-5'))
console.log(quiz.get(answer === quiz.get('correct') )) */

/* converting map to array */
/* console.log([...quiz])
console.log([...quiz.keys()])
console.log([...quiz.values()]) */

/* WHICH DATA STRUCTURE TO USE */

/* USE ARRAY OR MAP IF A SIMPLE LIST = no description of value */

/* USE OBJECT OR MAP FOR KEY VALUE PAIRS = allows us to describe values */ 

/* ARRAY  = ordered list of values that might contain duplicates*/


/* SETS = when working with unique values to remove duplicates from arrays,faster */

/* OBJECTS =  easier to write and use dot or bracket notation if using functions */

/* MAPS = better performance can use any data type,easy to iterate*/


const gameEvents = new Map ([
  [17,'🟢GOAL'],
  [36,'🔂SUBSTITUTION'],
  [47,'🟢GOAL'],
  [61,'🔂SUBSTITUTION'],
  [64,'🟡YELLOW CARD'],
  [69,'🔴RED CARD'],
  [70,'🔂SUBSTITUTION'],
  [72,'🔂SUBSTITUTION'],
  [76,'🟢GOAL'],
  [80,'🟢GOAL'],
  [92,'🟡YELLOW CARD']
])
gameEvents.delete(64)
console.log(gameEvents)
console.log(`An event happened,on average,every 9 minut4es`)
for (const [time,event] of gameEvents){
  const half = time <=45 ?'first half' : 'second half';
  console.log(`[${half}] ${time} : ${event}`)
}

/* Working with strings */
const airline = 'USA AIRLINE'
const plane = 'A320'
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])

/* length */
console.log(plane.length)

/* Index */
console.log(airline.indexOf('R'))
/* To find the last location */
console.log(airline.lastIndexOf('A'))
/* SLCING STARTS from the number : It cuts from 0-4 and outputs from 5 to end */
console.log(airline.slice(4))
/* SLICES THE 0-4 AND OUPUT THE 5-7,  7-4=3 THEREFORE THE LENGHT OF THE STRING*/
console.log(airline.slice(4,7))
/* NOT HARDCODING */
console.log(airline.slice(0,airline.indexOf(' ')))
console.log(airline.lastIndexOf(' '))
/* GET ELEMENTS FROM END */
console.log(airline.slice(-2))
console.log(airline.slice(-1))

function planeSeat(seat){ 
  /* B & E is the middle seat */
const s = seat.slice(-1) 
if ( s =='B' || s =='E')
  console.log('You got the middle seat💔')
else console.log('You got lucky🙂')
}
planeSeat('34B')
planeSeat('34C')
planeSeat('34E') 

/* string to object */
console.log(new String ('Jesse'))

console.log(airline.toLowerCase())/* capital letter */
console.log(airline.toUpperCase())/* small letter */



const names = '        Joe skilly '
console.log(names.trim()) /* To remove the space or overflow of spaces */

const price = '30$'
console.log(price.replace('$','N')) /* to substitute */

const plane3 = 'FLY EMIRATES B530'
console.log(plane3.includes('B530')) /* If it includes  a particular element */

const statement = 'I LOVE CODING'
console.log(statement.split( ' '))
console.log(statement.split( ' ').join('-'))

const passenger = 'jOnas'
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)


const email = '     jesSeJohn260@gmail.com      '
const normalEmail = email.toLowerCase().trim()
console.log(normalEmail)

/* REPLACING */
const priceUk = '576£'
const priceUs = priceUk.replace('£','$')
console.log(priceUs)

/* Changes all occurence globally that is the g */
const announce = 'all passenger come to boarding door 23 that is the correct door'
const announCorr = announce.replace(/door/g,'gate')
console.log(announCorr)


const plNum = 'Air A38Boeing'
console.log(plNum.includes('A38'))
console.log(plNum.startsWith('Air'))

if (plNum.startsWith('Air') && plNum.endsWith('Boeing')){
  console.log(`${plNum} is part of the boeing family`)
} 


/* Practice */
function Checkbaggage (item){
  const baggage = item.toLowerCase()
  if (baggage.includes('gun') || baggage.includes('knife')){
    console.log('You are not allowed to board this plane')
  }
  else{
    console.log('welcome aboard')
  }
}

Checkbaggage(' i have some vegies, a gun and some books')
Checkbaggage('i have some balls and a KNIfe')
Checkbaggage(' i have a laptop and some flash drives')



const schoolRequirement = function (itemsa){
  /* IF student doesnt have pen or pencil */
  const rightFormat = itemsa.toLowerCase()
  if(rightFormat.includes('pen') || rightFormat.includes('pencil')){
    console.log('You are ready for exams please enter the hall')
  }
  else{
    console.log(`You're not ready for exams please exit the hall`)
  }
}

schoolRequirement(' i have a PEN ')
schoolRequirement('i have a book ')
schoolRequirement(' i have a pencil')

/* SPLIT AND JOIN */
const [firstName,LastName] = 'JESSE JOHN'.split(' ')
const newName = ['Mr.' , firstName,LastName.toUpperCase()].join(' ')
console.log(newName)
console.log([firstName,LastName])

const capitalizeName = function (name){
  const names = name.split(' ')
  const namesUpper = []
  for(const n of names){
    namesUpper.push(n[0].toUpperCase() + n.slice(1))
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('kevin france')
capitalizeName('jerry')


/* const caseName = function(identity){
  const identityName = identity.split(' ')
  const idenCamel = []
  for (const ident of identityName){
    idenCamel.push(ident.replace(ident[0],ident[0].toUpperCase()))
  }
  console.log(idenCamel.join(' '));
} */


/* PADDING  */
const message = 'I love you'
console.log(message.padStart(25,'+'))/* Adds the + to make the string a 25 letter word */
console.log('Jesse'.padStart(10,'+').padEnd(12,'+'))/* Adds to the end of string  since already 10 it adds just two*/


const caseName = function(identity){
  const identityName = identity.split(' ')
  const idenCamel = []
  for (const ident of identityName){
    idenCamel.push(ident.replace(ident[0],ident[0].toUpperCase()))
  }
  console.log(idenCamel.join(' '));
}

caseName('elon')
caseName('jesse')

console.log('Joy'.padStart(10,'+').padEnd(15,'+'))

const maskCred = function(number){
  const Str = number + ' ' /* Automatically convert to string because its added to emptu=y string */
  const last = Str.slice(-4)
  return last.padStart(Str.length,'*')
}

console.log(maskCred(6456495393595))
console.log(maskCred('050650566040'))

/* REPEAT */
const message2 = 'Bad weather all departures delayed...'
console.log(message2.repeat(5))

const planeInLine = function(n){
  console.log(`there are ${n} planes in line ${'✈'.repeat(n)}`)
}
planeInLine(5)


document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))
document.querySelector('button').addEventListener('click',function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
for (const row of rows){
  const [firstt,secondd] = row.toLowerCase().trim().split('_');
  console.log(row,firstt,secondd)
  const output = `${firstt} ${secondd.replace(secondd[0],secondName[0].toUpperCase())}`
  console.log(output)
}
})

