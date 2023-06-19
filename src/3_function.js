
// [1] function 명령어
function func1(first, second)
{
    return first + second;
}


console.log(func1(1,2));



// [2] 함수리터럴
let func2 = function(first, second)
            {
                return first + second;
            }

console.log(func2(3,4));



// [3] 화살표 함수
let func3 = (first, second) => {
    return first + second;
}

console.log(func3(5,4));


let func4 = (first, second) => first + second;


console.log(func4(10,8));



class MyClass{
    value = 10;
    constructor()
    {
        let func2_add = function(first, second){
            return this.value + first + second;
        }.bind(this);
        console.log('확인0 : ' + func2_add(1,2));


        let func4_add = (first, second) => this.value + first + second;
        console.log('확인1 : ' + func4_add(1,2))
    }
}

let my = new MyClass();


function App(){}
export default App;