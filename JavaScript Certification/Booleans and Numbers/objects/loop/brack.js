

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break; // Exit the loop when i is 7
    }
    console.log("Current value of i: " + i);
}

console.log("break Loop ended.");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the iteration when i is 5
    } 
    console.log("Current value of i: " + i);
}


  outerLoop: for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        if(j===5){
            break outerLoop; // Exit the inner loop when j is 5
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}