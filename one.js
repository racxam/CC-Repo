// let str="Harsh bhai kese ho"


// let ans=str.split(" ").map(ele=>{
//     return ele.split("").reverse().join("");
// })

// console.log(ans.join(" "));



//ques2 
// function isArr(ele){
//     return Array.isArray(ele);
// } 
// console.log( isArr([]))
// console.log( isArr({}))

// console.log(typeof([]));


//que3

// var arr=[1,2,3,4,5,6]
// arr.length=0
// console.log(arr);


//que4 
// var a=34
// console.log(a%1);
// console.log(Number.isInteger(a));


//qu5
// function duplicate(arr) {
   
//     return arr+","+arr
    
// }

// console.log( duplicate([1,3,4,5,6]).split(","));
// console.log(Array.isArray(duplicate([1,3,4,5,6]).split(",")));

// console.log([1,2,3,4,5,6].concat([1,2,3,4,5,6]));



//que6

// function reversekaro(num){
//   return num.toString().split("").reverse().join("")

// }

// console.log(parseInt(reversekaro(12)));

// function reversekaro(num){
//     var ans=0
//   while (num>0) {
//     ans=ans*10 +(num%10);
//     num=Math.floor(num/10);
    
    
//   }
//   return ans;

// }

// console.log(reversekaro(12));



//que7

// function isPlaindrome(str) {
//     var ans=false;
//     for (let i = 0; i < str.length/2; i++) {
//         if (str[i]===str[str.length-1-i]) {
//                 ans=true;
            
//         }
//         else{
//             return false;
//         }



//     }
//     return ans;

    
// }

// console.log(isPlaindrome("jahaj "));



//que 8
// function alpha(str) {
//     return str.split("").sort().join("");
    
// }

// let str="dcba fez"
// console.log(alpha(str));


//que9
// function uppcseEach(str){

//    var ans= str.split(" ").map(word=>{

     
//         if (word.length>1) {
            
//            return word.charAt(0).toUpperCase()+ word.slice(1);
            
//         }else{
//            return word.charAt(0).toUpperCase();

//         }
//     })

//     return ans.join(" ");
// }

// function uppcse(str) {
//     return str.charAt(0).toUpperCase()+str.slice(-(str.length-1));
// }


// console.log(uppcse("hello bhabhi ji"));

// console.log("hello".toUpperCase());
// console.log('hello'.charAt(0).toUpperCase());


// console.log(uppcseEach("hello i am good"));



// que8

// function occurances(str){
//     var occ={}

//     str.toLowerCase().replace(/\s+/g, '').split("").sort().forEach(ele => {
//         if (!occ.hasOwnProperty(ele)) {
//                 occ[ele]=1;
            
//         }else{
//             occ[ele]++;
//         }
//     });
//    return occ;

// }

// console.log(occurances("Hello i am a good guy"));

//qu1-

// function summ(arr) {
//     var ans = 0; // Initialize ans to 0
//     arr.forEach(ele => {
//         ans += ele; // Use += for shorthand for ans = ans + ele
//     });
//     return ans;
// }

// var arr = [1, 2, 3, 4, 5];
// console.log(summ(arr)); // Output: 15

// var s=[
//     {
//         id:1,
//         gender:"male"
//     },
//     {
//         id:2,
//         gender:"male"
//     },
//     {
//         id:3,
//         gender:"female"
//     },
//     {
//         id:4,
//         gender:"male"
//     },
//     {
//         id:5,
//         gender:"female"
//     },
//     {
//         id:6,
//         gender:"female"
//     },
// ]

// console.log(s.filter(obj=>obj.gender==="male"));
// for (let i = 0; i < s.length; i++) {
//     if (s[i].gender!=="male") {
//         s.splice(i,1)
        
//         i=i-1;
//     }
    
// }
// console.log(s);



//qu5

// function freq(arr) {
//     var temp=0;
//     var ans={}
//     var arr2=arr.sort((a,b)=>{return a-b})
//     for (let i = 0; i < arr2.length-1; i++) {
//        if(arr[i]===arr[i+1]){
//             temp++;
//             ans.i=
            

//        }else{
//             temp=0;
//        }
        
//     }
//     return arr2;
// }


// console.log(freq([1, 2, 3, 12, 2, 3, 12, 1, 2, 3, 2121]));


// (function sumit() {
//      console.log("I am sumit");
// })()

// sumit=a=>b=>c=>a+b+c
// console.log(sumit(1)(2)(3));

// amit=(a)=>{
//           return (b)=>{
//           return (c)=>{
//                return a+b+c;
//           }
//      }
// }
// console.log(amit(1)(2)(3)f);


// const id=Symbol("sumit")
// const persom={
//      name:"Sumit",
//      [Symbol("sumit")]:1
// }
// console.log(Symbol.for("sumit"));
// function debounce(fx,time) {
//      let debounceTimer;
//       return function(){
//           const context= this;
//           const args=arguments;
//           clearTimeout(debounceTimer);
//           debounceTimer=setTimeout(()=>
//                fx.apply(context,args),time
//           )
//       }
     
// }


// document.getElementById('inp').addEventListener('input',debounce((e)=>{
//      document.getElementById('para').innerText=e.target.value;
// },1000))


//generator

function* generator() {
    let i=0;
    while (i<10 ) {
      yield i;
      i++
    }
}

let itr= generator()
console.log([...itr]);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
