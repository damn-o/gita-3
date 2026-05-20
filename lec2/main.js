
// var, let, const

// let userName = 'Giorgi'
// console.log(userName.length)
// console.log(userName[userName.length -])


let userName = 'Nika'
userName[0] = 'L'

// console.log(userName)

const names = ['nika', 'dato', 'giorgi']
names[0] = 'lika'

// console.log(names)


let userAge = 22
let userAge2 = userAge

userAge2 = 25
// console.log(userAge, 'userAge')
// console.log(userAge2, 'userAge2')

let user = {
    age: 22
}
let user2 = user

user2.age = 25
// console.log(user.age, 'user.age')
// console.log(user2.age, 'user2.age')

const str = 'H1e1l1l1o'
const str2 = 'World'
// console.log(str.charAt(1)) //[1] igive indexi
//console.log(str.slice(-2)) //+- mde chris da dan chris
// console.log(str.toLowerCase()) //adidebs apataravebs
//console.log(str.concat(str2)) //str + str2
//const fullstr = str + ' ' + str2 // cudi magaliti
//const fullstr = `${str} ${str2}` // uketesi magaliti
// console.log(fullstr)
//console.log(str.trim().length) //winadadebis tavshi da boloshi space ebs ashorebs
// console.log(str.split('1')) //gaxlechva 
// console.log(str.replaceAll('1', '')) //chaanacvlebs
//console.log(str.toLocaleLowerCase().includes('h'.toLocaleLowerCase())) //amowmebs tanmimdevrobit ras sheicavs sityva
// console.log(str.startsWith('h1')) //dasawyisis gameoreba
// console.log(str.endsWith('1o')) //dasasrulis
// console.log(str.indexOf('l')) //indexacia

//const a = 10

// if(a > 20){
//     console.log('metia 20ze')
// }else{
//     console.log('naklebia 20ze')
// }

//a > 20 ? console.log('a metia 20ze') : console.log('naklebia 20ze') //igive rac zevit

// let str3 = 'Javascript'

// for(let i = 0; i < str3.length; i++){
//         if(str3[i] !== 'a'){
//             console.log(str3[i]) 
//         }
// } //sigrdzeze chamowera


// for(let i=1; i <=100; i++){
    
//     if (i % 3 === 0 && i % 5 === 0){
//     console.log('fizzbuzz')
// }if(i % 3 === 0){
//     console.log('fizz')
// }else if(i % 5 ===0) {
//     console.log('buzz')
// }else{
//     console.log(i);
// }
// }


//dawerat funqcia romelic miigebs 1 parametrs da ipovet yvelaze grdzeli sityva am winadadebashi

function getLongestWord(sentence){
    const words = sentence.split(' ')
    let getLongestWord = words [0]

    for(let i = 0; i < words.length; i++){
        if(words[i].length > getLongestWord.length){
            getLongestWord = words[i]
        }
    }
    return getLongestWord
}


const res = getLongestWord('Hello word test testststst')
console.log(res,'response')