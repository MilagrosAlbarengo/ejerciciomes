let mes:number=document.getElementById("mes");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
  let mes2=Number(mes.value);

  switch (mes2) {
  case 1
    console.log("tiene 31 días");
    break;
    case 2:
    console.log("tiene 28 días");
    break;
    case 3:
    console.log("tiene 31 días");
    break;
    case 4:
    console.log("tiene 30 días");
    break;
    case 5:
    console.log("tiene 31 días");
    break;
    case 6:
    console.log("tiene 30 días");
    break;
    case 7:
    console.log("tiene 31 días");
    break;
    case 8:
    console.log("tiene 31 días");
    break;
    case 9:
    console.log("tiene 30 días");
    break;
    case 10:
    console.log("tiene 31 días");
    break;
  case 11:
    console.log("tiene 30 dias");
    break;
  case 12:
    console.log("tiene 31 días");
    break;
  default:
    break;
}
}