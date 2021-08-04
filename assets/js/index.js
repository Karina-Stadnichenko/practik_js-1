function sayType(number) {
	if(typeof number ==="number"){
        return "это число"
    }
    if(typeof number ==="string"){
        return "это  число"
    }
    return 'не знаю'
}



function getRandomInt(max) {
    return Math.random() * max;
  }
  
  console.log(getRandomInt(100));
  console.log(getRandomInt(0));
 
  let star = '' ;
  for (star =0; star<7; star++){
       star = star + '*';
 
  }
  console.log(star);
let stringSquare = '';
const stringSize = 4;
for(let j = 0; j<4; j++){


  for( let i =0; i<4; i++) {
      stringSquare += '*';
  }
}


const array = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<array.length; i++) {
  if(i % 2 ===1 ){
    delete array[i];

  }
}


const array1 = [1,2,3,4,5];
for(let i=5; i<10;++i){
  array1[i] = i+1;
}
console.log(array1);


const users = [];
for(let i=1;i<5;++i){
  users[i-1] = 'user' + i;
}
