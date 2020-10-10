
let John=24;
if (John>18){
  console.log("John can drink 'beer' or 'Juice'");
} else {
  console.log ("John can drink only juice");
};


John=24;

switch(true) {
  case John<13:
  console.log("John is a boy"); 
   break;
   case  John >= 13 && John<20:
  console.log("John is a teenager");
  break;
  case John >= 20 && John<30:
  console.log("John is a young man");
  break;
  default:
    console.log("John is a man")
}
//Extra
job="instructor";
switch(job){
  case "teacher" && "instructor":
    console.log("John teaches to IT codes");
    break;
    case "driver":
      console.log("John is delivery driver ")
      break;
      case "designer":
      console.log("John is good web devoloper and designer");
      break;
      default:
      console.log("John not working right now.")
}

