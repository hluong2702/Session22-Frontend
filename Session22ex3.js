let input = prompt('Moi ban nhap vao mot chuoi');
let numbers = input.split("").map(Number);
if (numbers.some(isNaN)) {
    console.log("Khong hop le"); 
}else{
    let reversedNumbers = numbers.reverse();
    console.log(reversedNumbers);
}

