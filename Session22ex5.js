let numbers = [1,4,7,8,3];
let evenTotal=0;
let oddTotal=0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 ===0) {
        evenTotal += numbers[i]
    } else {
        oddTotal += numbers[i]
    } 
}
document.write(`Tong cac so chan la ${evenTotal} <br>`);
document.write(`Tong cac so le la ${oddTotal}`);
