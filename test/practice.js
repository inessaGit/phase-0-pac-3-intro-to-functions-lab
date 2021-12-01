
const message ="I love you, Grandma.";
function sayHiToGrandma(s){
    let info;
    switch(true){
        case(s===s.toLowerCase()):
        info="I can\'t hear you!";
        console.log("inside switch case 1 "+ info)
        break;

        case(s===s.toUpperCase()):
        info="YES INDEED!";
        console.log("inside switch case 2 "+info)
        break;

        case(s===message):
        info="I love you, too.";
        console.log("inside switch case 3 "+info)
        break;
    }
    return info;
}

//sayHiToGrandma("TEST"); //calling function
//console.log(sayHiToGrandma("test")) //calling function


function sayHiToGrandma1(s){
    let info;

    if (s===s.toLowerCase()){
        info="I can\'t hear you!";
        console.log("inside if statement")
    }
    else if(s===s.toUpperCase()) {
        info="YES INDEED!";
        console.log("inside else if statement")
    }
    else if(s===message){
        info="I love you, too.";
        console.log("inside else if statement")
    }
    return info;
}

sayHiToGrandma1("test");

function myFunction(a, b) {
    return a * b;
  }
  myFunction(10,2); //call function
  //console.log(myFunction(10, 2));      //print to console


