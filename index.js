// for(let j = 5; j >= 1; j--){
//     let output = "";
//     for(let i = 5; i >=j; i--){
//         output+=i
//     }
//     console.log(output)
// }

// for(let i = 1; i <= 10; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// console.log("odd numbers in th range of 1 t0 10")
// for(let i = 1; i <= 10; i++){
//     if(i%2 != 0){
//         console.log(i)
//     }
// }


// for(let j = 1; j<= 5 ; j++){
//     console.log(`------${j}'s multiplication table ----------`)
//     table = j
//     for(let i = 1; i<=10; i++){
//         console.log(`${table} x ${i} = ${table * i}`)
//     }
// }

// for (let i = 1; i<= 5; i++){
//     n = 1
//     for(let j = 1; j <=i ; j++){
//         n = n * j
//     }
//     console.log(n)
// }

// for(let j = 1; j<= 100; j++){
//     count = 0
//     for(let i = 1; i <= j; i++){
//         if(j % i == 0){
//             count+=1
//         }
//     }
//     if(count <= 2){
//         console.log(`prime ${j}`)
//     }
// }

// check the given numbe is palindrome or not

for(let j = 100; j <= 200; j++){
    let palindrome = 0
    for(i = j; i>0; i = parseInt(i/10)){
    digit = i % 10
    palindrome = palindrome * 10 + digit;
}
if(j == palindrome){
    console.log(`palindrome ${j}`)
}
}

