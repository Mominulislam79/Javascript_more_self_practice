
// forEach() method
const numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number) {
    console.log(number);
});

const newnumber=[11,12,13,14,15];
newnumber.forEach(function(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("------------");
});

const an_array=["rahim","karim","shaheen","zamil"];

an_array.forEach(function(value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("----------");
});
// Basic Arrow Function
const add=(a,b) => a+b;

console.log(add(4,6));

const addd=(a,b,c) =>a*b*c;
console.log(addd(4,6,8));

const multi_01=(a,b)=>a*b;
console.log(multi_01(10,12));

const divide_01=(a,b)=>a/b;
console.log(divide_01(20,2));

const subtr=(a,b)=>a-b;
console.log(subtr(20,15));
// Arrow Function with No Parameters
const greet = () =>"Hello Javascript";
console.log(greet());
// another way to arrange these code
const greet_1=()=>console.log("Hello Javascript");
greet_1();

const newera = () => console.log("Hi guys, welcome back to our new session");
newera();

const new_math = () => console.log("Only way to be a successful man is to practice more and more");
new_math();

const new_physics = () => console.log("Make sure you know the fundamentals of physics");
new_physics();

// Arrow Function with One Parameter

const square = x =>x*x;
console.log(square(5));

const cube_1 = a =>a*a*a;
console.log(cube_1(3));

const math_plus = a => a+a;
console.log(math_plus(4));

const math_mult = a => a*a;
console.log(math_mult(6));

const math_sub=a=>a-a;
console.log(math_sub(5));
// Arrow Function with Multiple Lines of Code
const sum_square=(a,b)=>{
    const sum=a+b;
    return sum*sum;
}
console.log(sum_square(4,5));

const mult_add=(a,b)=>{
    const mult=a*b;
    return mult+a+b;
}
console.log(mult_add(4,6));

const sum_div=(a,b,c)=>{
    const sum=a+b+c;
    const divi=sum/3;
    return sum+divi;
}
console.log(sum_div(10,20,30));

const new_sum=(a,b,c,d)=>{
    const sum=a+b+c+d;
    const avge=sum/4;
    const sub=sum-avge;
    return sum+avge+sub;
}
console.log(new_sum(10,20,30,40));

// Using Arrow Functions with forEach()
const one_number=[10,12,14,16,18];

one_number.forEach(number=>console.log(number*2));
console.log("------------------")
const word_s=["zarif","choyon","ritul"];

word_s.forEach(word=>console.log(word));
console.log("------------------")

const sent_enc=["school","college","university"];
sent_enc.forEach(newer=>console.log(newer));
console.log("------------------")

const auto_crat_hasina=["obaidul_kader","Asaduzzaman_khan_Kamal","Arafat","Hasan_Mahmud"];
auto_crat_hasina.forEach(kulngar=>console.log(kulngar));

// Arrow Function Returning an Object
const createUser=(name,age)=>({name,age});
const user=createUser("Alice",45);
console.log(user);
console.log("------------");

const careTaker=(name,designation,age,salary)=>({name,designation,age,salary});
const infor_mation=careTaker("Dr. Muhammad Yunus","Chief Adviser",84,"120000USD");
console.log(infor_mation);
console.log("----------");

const cabinet=(chief_adviser, minister_rhd,minister_rail,minister_public_admin)=>({chief_adviser, minister_rhd,minister_rail,minister_public_admin});

const cabinet_persons=cabinet("Dr. Muhammad Yunus", "Mr. Ehsanun Hoque","Mr. Salaudding Ahmed","Mr. Ashish Barua");
console.log(cabinet_persons);
console.log("-----------");

// Arrow Function in a SetTimeout


// The setTimeout() function takes two main parameters:
// Callback Function: The first parameter is a function (often provided as an arrow function) that you want to execute after the delay.
// Delay Time: The second parameter is the delay in milliseconds before the callback function is executed.
// 2000 milliseconds equals 2 seconds.
// If you use 18000, the function will execute after 18 seconds.
setTimeout(()=>{console.log("This message will be shown to the console after just 12 seconds after you save it")},12000);
setTimeout(()=>{console.log("Carefully note that how long does it take to show this message")},16000);
setTimeout(()=>{console.log('This message is delyaed by 18 seconds')},18000);
setTimeout(()=>{console.log("keep patience when you code")},20000);
// now see what happens when you set time to 2 seconds
setTimeout(()=>{console.log("Don't show this message again!")},2000);