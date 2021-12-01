let a=5;
//Case 1 if,else if, else outside of a function
if (a<6){
    console.log("1st if "+a);
}
if (a<7){
    console.log("2nd if "+a)
}
if (a<4){
    console.log("3d if "+a);
}
else if(a<8){
    console.log("else if "+a) //will be executed
}

else if (a<9){
    console.log("2nd else if "+a); //will never run because code stops 
    //after the 1st else if returns true;
}

else {
    console.log("else"+a); 
}
//Case 2: if, else if, else declared inside of a function
function testIfInsideFunction(a){
    if (a<7){
        console.log("case 2 if "+a)
    }
    if (a<10){
        console.log("case 2 if "+a)
    }

    else if(a<8){
        console.log("case 2 else if "+a)
    }
    else if(a<9){
        console.log("case 2  else if "+a)
    }
}

testIfInsideFunction(6);
/*
Any time you use an if...else if construction, at most 
one code block will be executed. As soon as one of the conditions
 returns a truthy value, the attached code block runs 
 and the conditional statement ends. 
 */