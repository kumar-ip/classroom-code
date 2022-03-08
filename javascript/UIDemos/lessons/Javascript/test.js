// const div = document.querySelector("#main");

// const fragment = new DocumentFragment();

// for (let i = 1; i <= 100; i++) {
//   const newSection = document.createElement("section");
//   const newParagraph = document.createElement("p");
//   const text = document.createTextNode("Section " + i);
//   newParagraph.appendChild(text);
//   newSection.appendChild(newParagraph);

//   fragment.appendChild(newSection);
// }

// div.appendChild(fragment);

//document.write('<h1>Hello World!!!</h1>');

const btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', (e) => {
    console.log('BTN1');
    console.log(e);
    e.stopPropagation();


    const req = new XMLHttpRequest();
    req.addEventListener("load", (event) => {
      const response = JSON.parse(event.target.responseText);
      document.querySelector('#first').textContent = response.message;
    });
    req.open("GET", "https://api.talentscreen.io/");
    req.send();



}, false);

// document.querySelector('#innerDiv').addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log('innerDiv');
//     console.log(e);
// }, false);

// document.querySelector('#outerDiv').addEventListener('click', (e) => {
//     console.log('outerDiv');
//     console.log(e);
// }, false);

// document.querySelector('#main2').addEventListener('click', (e) => {
//     console.log('Main2');
//     console.log(e);
// }, false);

// document.querySelector('body').addEventListener('click', (e) => {
//     console.log('Body');
//     console.log(e);
// }, false);


// btn.addEventListener('click', (e) => {
//     debugger;
//     console.log('Button is clicked') 
// }, false);


// btn.addEventListener('click', () => console.log('Button is clicked - Second subscriber'), false);


