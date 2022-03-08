//individual elements

document.getElementById("message"); //object
document.querySelector('#message');

//group elements
document.getElementsByName("main"); //array
document.getElementsByTagName("p"); //array
document.getElementsByClassName("message"); //array
const paragraphs = document.querySelectorAll('p'); //array


for (let i in paragraphs) {
    console.log(paragraphs[i]);
}
