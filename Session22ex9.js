let numbers = [2,1,7,1,1,8,6,2,2,7];
let noDuplicatesNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let flag=0;
    for (let j = 0; j < noDuplicatesNumbers.length; j++) {
        if ( numbers [i] === noDuplicatesNumbers[j]) {
            flag = 1;
            break;
        }
        
    }
    if(flag ===0){
        noDuplicatesNumbers.push(numbers[i]);
    }
    
}
for (let i = 0; i < noDuplicatesNumbers.length - 1; i++) {
    for (let j = i + 1; j < noDuplicatesNumbers.length; j++) {
        if (noDuplicatesNumbers[i] > noDuplicatesNumbers[j]) {
            let temp = noDuplicatesNumbers[i];
            noDuplicatesNumbers[i] = noDuplicatesNumbers[j];
            noDuplicatesNumbers[j] = temp;
        }
    }
}
console.log("Mang sau khi loai bo va sap xep la:", noDuplicatesNumbers);
