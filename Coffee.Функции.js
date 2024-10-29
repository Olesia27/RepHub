
 /*let coffee1 = 'Instant coffee.'
 let coffee2 = 'Coffee in Cezve.'
 let htWater = "hot boiling water"
 let cldWater = "cold water"
 let instCf = 'instant coffee'
 let grcoffee = 'ground coffee'
 let crmr = 'coffee creamer'
 let sugar = 'white sugar'
 let qtTsp1 = '1 tea spoon'
 let qtTsp2 = '2 tea spoons'
 let sizeCup = 'a small coffee cup'
 sizeCup = 'a medium coffee cup'
 sizeCup = 'a large coffee cup'
 
 let step1 = `1. Take ${sizeCup} and put there ${qtTsp2} of ${instCf}.`
 let step2 = `2. Add ${qtTsp1} of ${sugar}. `
 let step3 = `3. Stirr it well with a spoon until white.`
 let step4 = `4. Add carefully ${htWater} stirring along the way.`
 let step5 = `5. Add ${qtTsp1} of ${crmr} if needed.`
 let step6 = `6. Your coffee is ready to drink.`
 
 let step7 = `1. Take a coffee cezve and put in a cezve ${qtTsp2} of ${grcoffee}.`
 let step8 = `3. Add ${cldWater}.`
 let step9 = '4. Put it on a stove.'
 let step10 = '5. When it starts to boil turn it off.'
 
  let recCof1 = coffee1 +'\n' + sizeCup +'\n'+ '\n' + step1 + '\n'+ step2 + '\n'+ step3 + '\n'+ step4 + '\n'+ step5 + '\n' + step6 +'\n'+'\n'
  console.log( recCof1)*/



// 1. Функция, выводящая цену за 1 чашку кофе:


/*function coffeePriceDisplay (sizeCup){
  if (sizeCup=='a small coffee cup'){
    return ('Price for a small cup of instant coffee is $1')
  }
 else if (sizeCup=='a medium coffee cup'){
  return ('Price for a medium cup of instant coffee is $2')
  }
  else if (sizeCup=='a large coffee cup'){
    return ('Price for a large cup of instant coffee is $3')
  }
}

console.log(coffeePriceDisplay ('a medium coffee cup'))*/



// 2. Ф-ия высчитывает цену на кофе в завис.от количества и размера чашки:

/*let price1Scup = 1
let price1Mcup = 2
let price1Lcup = 3
let sizeCup = 's'
 sizeCup = 'm'
 sizeCup = 'l'
 


function coffeePrice (qnt,sizeCup){
  if (sizeCup=='s'){
    return (qnt*price1Scup)
  }
 else if (sizeCup=='m'){
  return (qnt*price1Mcup)
  }

  else if (sizeCup=='l'){
    return (qnt*price1Lcup)
    }
}

console.log(coffeePrice (6,'m'))*/



// 3. Ф-ия, дающая 100%-скидку за каждую 20 чашку кофе:

/*function discount (n){
  if(n%20==0){
    return ('Congratulations! Your cofee is free!')
  } else return ('Full price')
}
console.log(discount (20))*/





// 4. Object:

/*let coffeeobj={
    instantCoffee: {
                   price1Scup: 1,
                   price1Mcup: 2,
                   price1Lcup: 3 
                   },
    turkishCoffe:  {
                   price1Scup: 1.50,
                   price1Mcup: 2.20,
                   price1Lcup: 3.9 
                   }         
              }

console.log(coffeeobj)*/

// 5. Метод для подсчёта недельного дохода по дням недели:
/*let totSun=600
let totMon=200
let totTue=200
let totWed=200
let totThu=200
let totFri=200
let totSut=600

let weektotal=[]
weektotal.push(totSun,totMon,totTue,totWed,totThu,totFri,totSut)
console.log(weektotal)
let weekAmount=weektotal.reduce((sum,elem)=>sum+=elem)
console.log(weekAmount)*/

