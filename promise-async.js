const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

// Progression 1: create a function to get all the cookies
function getCookies(){

// Progression 2: using setTimeout() - use 1000 units for time parameter
setTimeout(()=>{
   let outputs = "";
   cookies.forEach(cookie=>{
      outputs+=`<li>${cookie.name}</li>`
   });
   document.body.innerHTML = outputs;
},1000);
};

//Progression 3: Create a function to creat cookies and create an object of Promise.
function createcookie(newCookie){
   return new Promise((resolve,reject)=>{

// Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter
setTimeout(()=>{
   
// Progression 5: handling errors and adding new cookie to the list
cookies.push(newCookie);
const errors = false;
if(!errors){
   resolve();
}
else{
  reject('There are no such cookies')
   }
 },2000);
}
   )
};

// Progression 7: creating a new async function
async function InIt(){
   await createCookie(newCookie);
   getCookies()
 }
 
// calling the new async function
InIt()
