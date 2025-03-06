let numbers = [2,5,7,4,1,8,6,2,5,7];
let input = +prompt('Moi ban nhap vao mot so bat ki');
let flag = 0;
let total = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === input) {
        flag++;
    }
}
if (flag > 0) {
    document.write(`So ${input} xuat hien ${flag} lan trong mang`);
} else {
    document.write(`So ${input} khong xuat hien trong mang`);   
}

