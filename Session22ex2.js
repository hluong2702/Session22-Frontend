let numbers = [1,2,3,4,5,6];
let flag;
let input = +prompt(`Moi ban nhap vao 1 so bat ki`);
for (let i = 0; i < numbers.length; i++) {
    if (input === numbers[i]) {
        flag = 0;  
}
}
if (flag ===0) {
    document.write('Bingo');
} else {
    document.write('Chuc ban may man lan sau');
}