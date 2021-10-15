// Code your solutions in this file
/*
for (let age = 30; age<40; age ++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    //debugger;
}
*/

/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (i=0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      //debugger;
    }
    return gifts;
}
wrapGifts(gifts);
*/

function writeCards(names, event) {
    let msgs=[];
    for (let i=0; i< names.length  ; i++) {
                msgs.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return msgs;
}

function countDown(posNum) {
    while ( posNum >= 0){
        console.log(posNum);
        posNum --;
    }
    
}



/*
function writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' ) ) {

}
*/

//writeCards(["Ada", "Brendan", "Ali"], "birthday");







































