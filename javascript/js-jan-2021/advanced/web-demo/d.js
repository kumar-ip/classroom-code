// import {a, doSomething} from '../module1.js';

// console.log(a);
// doSomething();

// const oReq = new XMLHttpRequest();
// oReq.addEventListener("load", function() {

//     //JSON.stringify
//     document.querySelector('#talentScreen').innerText = JSON.parse(this.responseText).message;
// });
// oReq.open("GET", "https://api.talentscreen.io/");
// oReq.send();

// fetch('https://api.talentscreen.io/')
//   .then(response => response.json())
//   .then(data => document.querySelector('#talentScreen').innerText = data.message);

  async function makeHTTPGetAndGetResponse(url) {

        let response = await fetch('https://api.talentscreen.io/');
        let data = await response.json();
        return data.message;

  }

  makeHTTPGetAndGetResponse().then(value => document.querySelector('#talentScreen').innerText = value);

