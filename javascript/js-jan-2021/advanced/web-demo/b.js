(function () {
  
    var fn1 = function() {
        console.log('Hello FN1');
    }

    var fn2 = function() {
        console.log('Hello FN2');
    }

    var fn3 = function() {
        console.log('Hello FN3');
    }

    window.$ = {
        function1: fn1,
        function2: fn2,
        function3: fn3,
        x: 100
    }

})(window);
