// var -> function
// let -> block
// const -> block - readonly
  // const x = 0;
  // x = 2 ;


function sayHello() {
  
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
  
}

sayHello()