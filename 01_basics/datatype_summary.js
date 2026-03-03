// Premitive

//  7 types: string, boolean, number, symbol, null, undefined, bigInt
  
  const score = 23;
  const name = "danial";
  const isLoggedin = false;
  const tempmail = null;
  const  useremail = undefined;

  const id = Symbol('123');
  const anotherId = Symbol('123');

  console.log(id === anotherId);   //false output

  const bigNumber = 34325235323155335633n;





//  non premitive (Reference)

// object, Array, functions

let obj = {
    name : "danial",
    age : 23
};
const arr = ["hello", "world", "how"];

const myfunction = function(){
    console.log("hello danial");
}

// ************************************************
//  stack (premitive), heap (non premitive)