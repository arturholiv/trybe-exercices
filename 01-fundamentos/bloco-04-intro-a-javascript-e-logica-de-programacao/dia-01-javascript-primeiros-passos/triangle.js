let a1 = 90;
let a2 = 45;
let a3 = 45;

if (0 < a1 + a2 + a3 >180 || a1 + a2 + a3 <180) {
    console.log(false);
} else if (a1 + a2 + a3 == 180){
    console.log(true);
} else if(a1 || a2 || a3 < 0){console.log(ERROR)}