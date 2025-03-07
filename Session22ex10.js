      let choice;
      const numbers = [];

      do {
        choice = +prompt(
          "Mời bạn nhập yêu cầu: 1 - Nhap vao mang, 2 - Hien thi mang, 3 - Them phan tu, 4 - Sua phan tu, 5 - Xoa phan tu, 6 - Thoat"
        );

        switch (choice) {
          case 1:
            let numbersInput = +prompt("Mời bạn nhập vào mảng: ");
            numbers.push(numbersInput);
            alert("Thêm mang thanh cong");
            break;
          case 2:
            console.log("Danh sach mang : ",numbers);
            break;
          case 3:
            let newElement = +prompt(`Nhap so can them vao`);
            numbers.push(newElement)
            alert("Them phan tu thanh cong");
            break;
          case 4:
            let indexEdit = +prompt(`moi ban nhap vi tri sua phan tu`);
            let newValue = +prompt(`moi ban nhap vao gia tri moi`);
            if (indexEdit < numbers.length) {
                numbers.splice(indexEdit,1,newValue);
                alert("Cap nhat phan tu thanh cong");
            } else {
                alert("vi tri khong hop le");
            }
            break;
          case 5:
            let indexDelete = +prompt("Moi ban nhap vi tri can xoa");
            if (indexDelete < numbers.length) {
                numbers.splice(indexDelete,1);
                alert("Xoa thanh cong");
            } else {
                alert("Vi tri khong hop le");
            }
            break;
          case 6:
            break;
          default:
            console.log("Lựa chọn không hợp lệ");
            break;
        }
      } while (choice !== 0);