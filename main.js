let a ="Abdurazzokov "
let b ="ulugbek"
console.log(a)
console.log(a.length)
console.log(a.padStart(20, "a"))
console.log(a.charAt(5))
console.log(a.concat(b))
console.log(a.indexOf('b'))
console.log(a + " " + b)
console.log(String("ulugbek").concat(a))
console.log(a.substring(0,5))
console.log(a.slice(3))
console.log(a.includes("a"))
console.log(a.repeat(100))
console.log(a.replace("abdurazzokov", "me"))
console.log(a.toLocaleLowerCase())
console.log(a.toLocaleUpperCase())
console.log(a.endsWith("kov"))
console.log(a.trim())
let fly = 5
let num = 379
console.log(typeof fly)
console.log(num)
console.log(Number(num))
let son = "son"
let r= 2
let f = son.substring(0,2)
let sonlar =f === r ? "tugri"  : "xato";
confirm(sonlar)
let sons = 2879287987947
console.log(parseInt(sons))
let son1 = "36832562564528645"
let son2 ="63574571547645"
let parsent1 = (son1)
let parsent2 = (son2)
let qush = parsent1 + parsent2
let tekshirish = qush == Number("3683256256452864563574571547645")? "tugri" : "xato"
console.log( qush)
console.log(tekshirish)
let usha = "ronaldo"
let almashtir=usha.replace("mmm, ronaldo")
let kattaqil = almashtir.toLocaleUpperCase()
let kes = kattaqil.slice(4)
let tekshir =kes === kattaqil.slice(4)? 'tugri' :'xato'
console.log(tekshir)