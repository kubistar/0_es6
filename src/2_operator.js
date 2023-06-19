
// [1] 논리연산자 결합
// let arr = ['one', 'two'];
// let first, second, third = arr;
// let first = arr[0] || 'empty';
// let second = arr[1] || 'empty';
// let third = arr[2] || 'empty';

// console.log(first);
// console.log(second);
// console.log(third);

// [2] 삼항연산자와 truthy, falsy
// let truthy = true;
// let truthy = [];      // *빈배열
// let truthy = {};        // * 빈객체
// let truthy = 1;
// let truthy = -1;
// let truthy = '0';
// let truthy = 'false';
// let truthy = '';


// let samhang = truthy? '참':'거짓';
// console.log(samhang);
//---------------------------------------------------------------------------
// let falsy =false;
// let falsy = 0;
// let falsy =''; // 문자열 공백
// let falsy = undefined;
// let falsy = null;
let falsy = NaN;



let samhang = falsy? '참':'거짓';
console.log(samhang);



// [3] 요소분해
let arr = ['one', 'two'];
let [first, second, third="없음"] = arr;
console.log(first);
console.log(second);
console.log(third);

// swap
[second, first] = [first, second]
console.log(first);
console.log(second);

//[4] 전개연산자(...)
let objOne = {hana : 1, dul:2, gita:0};
let objTwo = {sam : 3, sa:4, gita:-1};
let old_combined = {
    hana:objOne.hana
    , dul : objOne.dul
    , gita : objOne.gita
    , sam : objTwo.sam
    , sa : objTwo.sa
    , gita : objTwo.gita
};
console.log(old_combined);


let new_combined = {...objOne, ...objTwo};
console.log(new_combined);


let {gita, ...namergi} = new_combined;
console.log(gita);
console.log(namergi);

function App()
{

}
export default App;
