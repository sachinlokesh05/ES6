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
  //properties
  name : 'sachin',
  //methods
  talk:function(){},
  walk(){}
}
console.log(Person.name);

const value = Person.talk();
console.log(value);

Person.name ="";

const targetMember = 'name';
Person[targetMember]='lokesh';

console.log(Person.name);
