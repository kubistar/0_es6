

let msg_a = "안녕하세요";
let msg_b = "반갑습니다.";

let old_msg = msg_a + " " +msg_b;
console.log(old_msg);



// 템플릿 문자열 :
let new_msg = `${msg_a} ${msg_b}`;
console.log(new_msg);

let num1 = 10;
let num2 = 20;
let old_result = num1 + "*" + num2 + "=" + (num1 * num2);
console.log(old_result);


let new_result = `${num1} * ${num2} = ${num1 * num2}`;
console.log(new_result);

//------------------------------
function App()
{

}

export default App;