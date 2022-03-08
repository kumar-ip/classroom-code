(function() {

    var doSomething = function() {
        var a = 10;
        console.log(a);
    }
    
    var fn1 = function() {
    
    }
    
    var fn2 = function() {
        
    }

    window.$ = {
        fn1: fn1,
        fn2: fn2,
        doSomething: doSomething
    }


})(window); //IIFE - Immediately invokable function expression


