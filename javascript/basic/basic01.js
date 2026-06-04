
//javascript

console.log('basic.01');
console.log('text');

// 변수선언
// var let const

//변수선언 : let
//상수선언 : const
// let a = 10;
// let b = 20.123;
// let c = "안녕하세요";
// let d = '작은따옴표';
// let e = true;
// let f = false;

const g = 30;
const h = "헬로우"

a = 20;
// g = 50;  //const변수 (상수형) 변경 불가

console.log('abc');
console.log('abc');
console.log('작은따옴표 "안녕" ㅎㅎ');
console.log("큰따옴표 '안녕' \"ㅎㅎ\" ");
console.log(`백틱문자로 감싸면 "큰따옴" '작은따옴' 편함`);

// let x = 20;
// let y ;

// console.log(x);
// console.log(y);
//----------------------------------




// z = 50;
// console.log(z);

//let z = 30;
// var z = 30;
// console.log(z);
// var z = 20;
// console.log(z);

//문제 발생시킬 risk 높다! --- var  ---> let

let x = 10;
let y = 10;
let z = '10';

console.log(x+y);
console.log(x-y);

console.log(x+z);

console.log( 2 ** 4); //제곱

// ==   ===
// == 값 같은가
// === 값 + 타입(자료형) 같은가

console.log(x == y);
console.log(x === y);

let q = 10;
let w = '20';
let e = 30;

console.log(q+e);
console.log(q+w+e);

//형변환 (타입변환)
//String()
//Number()

console.log( q + String(e));
console.log( q + Number(w) +e);

console.log( Number('425432'));
console.log( Number('425432.1232'));

if(q == 10){
    console.log('q가 10이더라~');
}

// &&
q == 11 && console.log('&& 11 확인 출력')
q == 10 && console.log('&& 10 확인 출력')

// true && true
// false || true

console.log( 10 == 10.0);
console.log( 10 === 10.0);
console.log( Number('10') === Number(10.0));
