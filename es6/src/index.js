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


//Objects
//Objects are the collection of key/value pairs that can be modified throughout the lifecycle of an object as similar to hash map or dictionary. 

const Person = {
  name : 'sachin',
  walk(){
    console.log(this);
    
  }
}
Person.walk()

const walk = Person.walk;
walk();
//window object
