function f1(){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            document.getElementById("box1").style.display="block";
            document.getElementById("text1").style.display="none";
            resolve("Done");                            
        },2000);
    })
}
function f2(){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            document.getElementById("box2").style.display="block";
            document.getElementById("text2").style.display="none";
            resolve("Done");                            
        },2000);
    })
}
async function f(){
    await f1();
    await f2();
    return("Done");
}
f();