

const { JSDOM } = require('jsdom');
const { document } = new JSDOM(`
  <div class="a" id="root">
    <div class="b" id="b-1">
      <div class="a" id="a-2">
        <div class="d" id="d-1"></div>
      </div>
      <div class="c" id="c-1">
        <div class="a" id="a-3">
          <div class="d" id="d-2"></div>
        </div>
      </div>
    </div>
  </div>
`).window;

// Test case:
 // getByClassName(document, 'a') => [Element<root>, Element<a-2>, Element<a-3>]



// Test code below:

const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
const root = document.getElementById('root');

console.log('actual:  ', getIds(getByClassName(root, 'd')));
console.log('expected:' , `[ 'd-1', 'd-2' ]`);
console.log();

console.log('actual:  ', getIds(getByClassName(root, 'a')));
console.log('expected:' , `[ 'root', 'a-2', 'a-3' ]`);
console.log();

console.log('actual:  ', getIds(getByClassName(root, 'c')));
console.log('expected:' , `[ 'c-1' ]`);
