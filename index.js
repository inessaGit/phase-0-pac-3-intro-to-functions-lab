
const message ="I love you, Grandma.";

function shout(string) {
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
string = string.toUpperCase();
console.log(string);

}

function logWhisper(string){
    string = string.toLowerCase();
    console.log(string);

    }

function sayHiToGrandma(s){
    let info;
 if (s===s.toLowerCase()){
     info="I can\'t hear you!";
 }
 else if (s===s.toUpperCase()){
    info ="YES INDEED!";
 }

 else if(s===message){
     info="I love you, too.";
 }
 return info;
}


