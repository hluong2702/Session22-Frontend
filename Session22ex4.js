let inputNumbers = prompt('Moi ban nhap vao mot day so bat ki');
let numbers = inputNumbers.split("").map(Number);
if (numbers.some(isNaN)) {
    document.write("Khong hop le"); 
}else{
    let maxNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    document.write(`So lon nhat trong mang la : ${maxNumber}`);
}