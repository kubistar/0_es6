// 0. 기존 자바스크립트


function work1(onDone)
{
    setTimeout(()=> onDone("작업1 완성"), 100);
}


function work2(onDone)
{
    setTimeout(()=> onDone("작업2 완성"), 200);
}


function work3(onDone)
{
    setTimeout(()=> onDone("작업3 완성"), 500);
}


function urgentWork()
{
    console.log("긴급작업");
}




work1(function(msg1){
    console.log("0.1초 후에 작업" + msg1)
    work2(function(msg2){
        console.log("0.2초 후에 작업" + msg2)
    
    
        work3(function(msg3){
            console.log("0.5초 후에 작업" + msg3)
        
        
        
            
        });
    
        
    });



});
urgentWork();


function App(){}

export default App;