// 1. implement curry()
/*
function curry(fn) {
    return function curried(...arr) {
        if (arr.length >= fn.length) {
            return fn.apply(this, arr);
        } else {
            return function(...arr2) {
                return curried.apply(this, arr.concat(arr2));
            }
        }
    }
}
*/



// 2. implement curry() with placeholder support



/*
function curry(fn) {
    return function curried(...args) {
        const rightArr = args.slice(0, fn.length);
        const ishavePlaceholder = rightArr.some(arg => arg === curry.placeholder);
      
        if (rightArr.length === fn.length && !ishavePlaceholder) {
            return fn.apply(this, rightArr);
        }
        else {
            return function next(...nextArgs) {
                return curried.apply(this, makeRightArr(rightArr, nextArgs));
            }
        }
    }
}
function makeRightArr(firstArr, secondArr) {
    const result = [];
    firstArr.forEach(item => item === curry.placeholder ? result.push(secondArr.shift()) : result.push(item));
    return [...result, ...secondArr];
}
curry.placeholder = Symbol();

const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
 }
 
 const curriedJoin = curry(join);
 const _ = curry.placeholder;
*/


// 3. implement Array.prototype.flat()


/*
function flat(arr, depth = 1) {
    const result = [];
    let count = 0;
    function push(arr2) {
        count++;
        arr2.forEach(element => {
            if (Array.isArray(element) && count <= depth) {
                push(element);
            }
            else {
                result.push(element);
            }
        });
    }
    arr.forEach(item => Array.isArray(item) ? push(item) : result.push(item));
    return result;
}
*/


