let mes:number=document.getElementById("mes");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
  let mes2=Number(mes.value);
let veintiochodias=2;
let treintadias=4,6,9,11;
let treintayunodias=1,3,5,7,8,10,12;
  switch (true) {
  case (mes2=== veintiochodias):
    console.log("tiene 28 días");
    break;
  case (mes2=== treintadias):
    console.log("tiene 30 dias");
    break;
  case (mes2=== treintayunodias):
    console.log("tiene 31 días");
    break;
  default:
    break;
}
}