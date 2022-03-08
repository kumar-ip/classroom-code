async function print() {
  return "Hello World";
}

//print().then((result) => console.log(result));

async function doSomething() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 2000);
  });

  let result = await promise;

  return result;
}

doSomething().then((res) => console.log(res));
