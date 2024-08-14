let num = [0, 1, 3, 9, 6]
num.sort()
//console.log(num) mostrar com formatação []

/*  console.log(num[0])
    console.log(num[1])
    console.log(num[2])
    console.log(num[3])
    console.log(num[4])
*/ // forma manual 

/*
for(let pos= 0; pos < num.length; pos++) {
    console.log(`A possição ${pos} tem o valor ${num[pos]}`)
} 
*/ // forma utilizando form, simples

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //forma mutilizando form in, mais simples