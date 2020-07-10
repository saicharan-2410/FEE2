function f1(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            document.getElementById("img1").src="images/cselogo.jpg";
            resolve("Applied");
        },2000);
    });
}
function f2(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            document.getElementById("img2").src="images/ecelogo.png";
            resolve("Applied");
        },2000);
    });
}
function f3(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            document.getElementById("img3").src="images/it logo.png";
            resolve("Applied");
        },2000);
    });
}
async function f(){
    await f1();
    await f2();
    await f3();
    return (1);
}
console.log(f());