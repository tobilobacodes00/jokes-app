const button = document.getElementById("jokeButton");
let display = document.getElementById("jokeDisplay");

const loadJokes = async () => {
      display.innerHTML = `<span class="loader"></span> Loading...`;
       const jokeType = document.querySelector('input[name="jokeType"]:checked').value;
        let url = `https://v2.jokeapi.dev/joke/${jokeType}`;
      
    try{
       const response = await fetch(url);
       const data = await response.json();
       let joke = "";
       if(data.type === "single"){
           joke = data.joke;
       }
       else if(data.type === "twopart"){
           joke = `${data.setup} ... ${data.delivery}`;
       }
       else{
           joke = "No jokes found!";
       }
       display.style.display = "block";
       setTimeout(() => {
       display.innerHTML = joke
       }, 1000);
    }

    catch(error){
        console.log(error)
        display.innerHTML = "Oops! Something went wrong. Please try again later.";
    }
}

button.addEventListener("click", loadJokes)
























































// // const showMessage = (callback) => {
// //     console.log(callback)
// // }

// // const firstMessage = (callback) => {
// //     setTimeout(() => {
// //         showMessage('Hello');
// //         callback();
// //     })
// // }

// // const secondMessage = ( ) => {
// //     showMessage(('world'))
// //     callback()
// // };

// // firstMessage(secondMessage)

// //Promises

// // const promise = new Promise((resolve, reject) => {
// //     const allWentWell = true;
// //     if (allWentWell){
// //         resolve("All Things Went Well!")
// //         }else{
// //             reject('Opps! Something went wrong!')
// //         }
// // }
// // )

// // console.log(promise)

// // First project

// const getAllProducts = async () => {
//     try{
//     const response = await fetch('https://dummyjson.com/products');
//     const json = await response.json();
//     console.log(json);
//     }
//     catch(error) {
//         console(error);
//     }
// }
  
// getAllProducts();






