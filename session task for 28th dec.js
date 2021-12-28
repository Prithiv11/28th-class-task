var fname = function(greetings1,greetings2){
    return greetings1 + this.firstname+this.lastname +", "+ greetings2
}
var s1={
    firstname : "ram",
    lastname : "esh",
    fullname : fname
};
var s2={
    firstname : "ram",
    lastname : "kumar",
    fullname : fname
};
var s3={
    firstname : "raj",
    lastname : "esh",
    fullname : fname
};

//Call
// we can pass arguments one by one
console.log(fname.call(s1,"hiii ","Welcome😊"));

//Apply
// we can pass arguments by an array format
console.log(fname.apply(s2,["hey ","Whatsup!🤓"]));

//Bind
// we can't use bind directly..we need to declare it and then we need to use blind through the declared variable as a function
// we can't pass arguments directly
// first we need to pass the reference and save it in a variable then only you can pass the arguments through the declared variable
var bind = fname.bind(s3);
console.log(bind("hello ","How are you?😍"));