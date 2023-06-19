// 3_function2


// let obj = {result : 0};
// obj.add = function(x,y){ this.result = x+y; }

// obj.add(2,3);
// console.log(obj.result);
// console.log(obj);
//--------------------------------------------------
// let obj = {result : 0};
// let add = function(x,y){this.result = x+y;}
// add = add.bind(obj);
// add(2,3)



// console.log(obj.result);
// console.log(obj);



// let obj = {result : 0};
// obj.add = function(x,y){
//     function inner()
//     {
//         this.result = x+y;
//     }
//     inner = inner.bind(this);
//     inner();
// }
// obj.add(2,3);
// console.log(obj.result);
//-----------------------------------------------------


let obj = {result : 0};
obj.add = function(x,y){
    const inner = () => this.result = x+y;
    inner();
}
obj.add(2,3);
console.log(obj.result);





function App()
{

}

export default App;