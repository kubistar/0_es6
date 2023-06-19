// 


// 기존
 let queryString = 'kind=it&title=python&cnt=3';
// let result = {};
// let chunks = queryString.split('&');
// console.log(chunks);
// for(let i=0; i<chunks.length; i++)
// {
//     let parts = chunks[i].split('=');
//     let key = parts[0];
//     let value = parts[1];
//     result[key] = value;
// }

// console.log(result);

//-----------------------------------------------------------
/// [1] foreach
let result2 = {};
let chunks = queryString.split('&');
chunks.forEach((chunk) => {

    const[key, value] = chunk.split('=');
    result2[key] = value;
    
});
console.log(result2);

// [2] map 결곽값을 return
let result3 = chunks.map((chunk) => {

    const[key, value] = chunk.split('=');
    return {key, value};
    
});

console.log(result3);

function App()
{

}

export default App;



