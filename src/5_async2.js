// 0. 기존 자바스크립트


// Es6 -Promiss

const work1 = () => new Promise( resolve => {
    setTimeout (() => {
        resolve('작업1 완성')},100);

});const work2 = () => new Promise( resolve => {
    setTimeout (() => {
        resolve('작업2 완성')},200);

});const work3 = () => new Promise( resolve => {
    setTimeout (() => {
        resolve('작업3 완성')},500);
});
function urgentWork() {console.log('긴급작업')};


work1()
.then((msg1) => {
    console.log('0.1초 후에 작업:' + msg1);
    return work2();
})

.then((msg2) => {
    console.log('0.2초 후에 작업:' + msg2);
    return work3();
})

.then((msg3) => {
    console.log('0.5초 후에 작업:' + msg3);
});

urgentWork();

function App(){}

export default App;