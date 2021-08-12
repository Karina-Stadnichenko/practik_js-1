// class Queue {
//     constructor () {
//         // console.log(arguments);
        
//         this.room ={};
//     for (let i = 0 ; i < arguments.length; i++);{
//     const element = arguments[i]
//     this.room[i] = element;
// }
//     this.push(element)
//     this
    
//     this.end = arguments.length
//     this.head = 0;
// }
//     push (element) {
//         this.room[this.end++] = element;
//     }
// shift () {
//     if (this.end ===this.head)
//     return undefined
//     const element = this.room[this.head];
//     delete this.queue[this.head++];
    
//     return element; 
// }

// }

// const queue = new Queue(1,2,3,4)

// switch (day) {
//     case '1':
//         break;
//         console.log(Пн);
//         case '2':
//             console.log(Вт);
//             break;
//     }
     
//     switch (season) {
//         case '1':
//             console.log("Весна");
//             break;
//             case '2':
//                 console.log("Лето");
//                 case '3':
//                     console.log("Осень");
//                     break;
//                     case '4':
//                         console.log("Зима");
//                         break;

//     }
//     // const season = ["Весна","Лето","Осень","Зима"]
//     //  const month = [1,2,3,4,5,6,7,8,9,10,11,12]
//    const mounth = 1;
//    season = Math.ceil(mounth / 3)
   
   
//    for(let i=20;i >=10; i--) ///выводит числа от 20 ДО 20

//    ///вывести в консоль нечетные числа
//    for (let i=1;i<10;i +=2)
//    /// сумма  чисел от 0 до 5 циклом
//    let sum = 0; 
//    for(let i =0; i<=5; i++) {
//         sum +=i;
//     }
//     /// средняя арифметическая сумма чисел
//     const result = (x1+x2+x3)/3
//     //функция 
//     function arifSum () {
//         //сумировать ячейки массива аргументов
//         let sum = 0
//         for(let i=0; i<arguments.length; i++) {
//             sum += arguments[i]
//         }
//         //деление
//         const result = sum /arguments.length
//     }
//       //длина / legth 3
//     arifSum(1,2,3)
   
// function agge(){
// const age =18;

// if (age >= 18){
//     console.log('yes');
// }
// else (age < 18);{
//     console.log('no');
// }
// return age;
// }
// agge(23)


// const num=25;
// const sqrt = Math.sqrt(num)
// if(sqrt % Math.floor(sqrt) ===0) {
//     return}
    
//     if(sqrt -Math.floor(sqrt)===0){
//         console.log("ost");
//     }


const array = [];
for (let i=0;i<10; i++) {
    array[i] = i +1;
}

console.log(array);


const newArray = array.slice();
console.log(newArray);

const arr  = [];
for (let i =5; i<newArray.length;i++){
      arr.push(newArray[i])
}      

console.log(arr);
