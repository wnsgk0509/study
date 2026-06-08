
//내장객체

//문자열

let str = "hellohi@gmail.com";

console.log(str.length); //문자길이
console.log(str.includes("@")); //문자열에 특정 문자가 포암되었는가?
console.log(str.includes("!"));

console.log(str.indexOf("@"));  //해당문자가 있는 인덱스 찾기
console.log(str.indexOf("!"));  //문자가 없을 경우 -1 반환

if(str.indexOf("1")== -1){}


console.log(str.substring(0,4)); //특정 위치 문자 잘라내기(뽑아내기);
                // 0<= index < 4
console.log(str.substring(5,10)); // 5<= index <10  비파괴적 함수
console.log(str); //원본 변형?

// 이메일 아이디
// 이메일 도메인 

console.log(str.indexOf("0"));
console.log(str.substring(0,str.indexOf("@")));
console.log(str.substring(str.indexOf("@")+1));


// 문자 앞뒤 공백제거 trim()
// 가입 -> 아이디 입력  "abc" 가입 진행
// " abc"

let test = " abc ";
console.log("|"+test+"|");
console.log("|"+test.trim()+"|");

// 문자 분리 split
let phone = "010-1234-5678"
let spt = phone.split("-");   //spli(매개변수) 매개변수 문자 기준으로 자르겠다
console.log(spt);
console.log(spt[1]);
console.log(spt[2]);

console.log("-----------------");

//날짜 Date
let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getMonth()+1+"월");
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

console.log(today.getDay());

console.log("---------------");
//Math
console.log(Math.abs(-10)); //절대값
console.log(Math.round(123.56)); //반올림
console.log(Math.ceil(123.01)); //올림
console.log(Math.floor(123.99)); //내림

console.log(Math.trunc(123.55)); //소수점 제거
console.log(Math.trunc(-123.55)); //-123.55

console.log(Math.max(10, 50));
console.log(Math.min(10, 50));

let arr = [10, 30, 50, 90];
console.log(Math.max(...arr));

console.log(Math.random()); // 0<= value <= 1
// random * 범위갯수 + 시작값   (random * 45)+1)

console.log(Math.floor(Math.random()*45)+1)
console.log(Math.floor(Math.random()*45)+1)
console.log(Math.floor(Math.random()*45)+1)

console.log(Math.sqrt(225));
console.log(Math.sqrt(25));

