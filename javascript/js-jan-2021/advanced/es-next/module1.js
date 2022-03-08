let a = 10;

const doSomething = () => console.log('Hello World!!!');

export default {
    a: 10,
    doSomething: function() {
        console.log('Hello World!!!');
    }
}

export {a, doSomething};