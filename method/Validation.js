class Validation{
    checkEmpty(value, divId, message) {
        if (value === "") {
          //show error message
          document.getElementById(divId).innerHTML = message;
          document.getElementById(divId).style.display = "block";
          return false;
        }
        //hide error message
        document.getElementById(divId).innerHTML = "";
        document.getElementById(divId).style.display = "none";
        return true;
      }
      checkCharactersString(value, divId, message) {
        const letter =
          "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    
        if (value.match(letter)) {
          // hide error message
          document.getElementById(divId).innerHTML = "";
          document.getElementById(divId).style.display = "none";
          return true;
        }
    
        // show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
      }
      checkNumber(value, divId, message) {
        const number =
          /^[0-9]+$/;
    
        if (value.match(number)) {
          // hide error message
          document.getElementById(divId).innerHTML = "";
          document.getElementById(divId).style.display = "none";
          return true;
        }
    
        // show error message
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
      }
     checkNumbers(value, divId, message) {
        const numberPattern = /^[0-9]{4,6}$/; // Biểu thức chính quy để kiểm tra số từ 4 đến 6 chữ số
    
        if (value.match(numberPattern)) {
            // Ẩn thông báo lỗi
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        }
    
        // Hiện thông báo lỗi
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    
    checkEmail(value, divId, message) {
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if (value.match(emailPattern)) {
            // Ẩn thông báo lỗi
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        }
    
        // Hiện thông báo lỗi
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    checkPass(value, divId, message) {
        const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    
        if (value.match(passPattern)) {
            // Ẩn thông báo lỗi
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        }
    
        // Hiện thông báo lỗi
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    checkNgay(value, divId, message) {
      // Biểu thức chính quy (regex) để kiểm tra định dạng DD/MM/YYYY
      const passPattern = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
  
      // Kiểm tra nếu chuỗi ngày khớp với định dạng regex
      if (value.match(passPattern)) {
          // Ẩn thông báo lỗi nếu hợp lệ
          document.getElementById(divId).innerHTML = "";
          document.getElementById(divId).style.display = "none";
          return true;
      }
  
      // Hiển thị thông báo lỗi nếu không hợp lệ
      document.getElementById(divId).innerHTML = message;
      document.getElementById(divId).style.display = "block";
      return false;
  }
  

    
    
  checkLuong(value, divId, message) {
    if (isNaN(value) || value < 1000000 || value > 20000000) {
        // Hiển thị thông báo lỗi nếu lương không hợp lệ
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    // Ẩn thông báo lỗi nếu hợp lệ
    document.getElementById(divId).innerHTML = "";
    document.getElementById(divId).style.display = "none";
    return true;
}
    
    checkOption(idSelect, divId, message) {
        // Lấy giá trị của tùy chọn đã chọn
        const value = document.getElementById(idSelect).value;
    
        // Kiểm tra nếu người dùng đã chọn giá trị khác rỗng
        if (value !== "") {
            // Ẩn thông báo lỗi nếu hợp lệ
            document.getElementById(divId).innerHTML = "";
            document.getElementById(divId).style.display = "none";
            return true;
        }
    
        // Hiển thị thông báo lỗi nếu không hợp lệ
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    checkEmptyGioLam(value, divId, message) {
      // Kiểm tra nếu giá trị là rỗng hoặc là NaN
      if (value === "" || isNaN(value)) {
          // Hiển thị thông báo lỗi
          document.getElementById(divId).innerHTML = message;
          document.getElementById(divId).style.display = "block";
          return false;
      }
      // Ẩn thông báo lỗi nếu hợp lệ
      document.getElementById(divId).innerHTML = "";
      document.getElementById(divId).style.display = "none";
      return true;
  }
  checkGioLam(value, divId, message) {
    // Kiểm tra nếu giá trị không phải là số hoặc nằm ngoài khoảng 80 - 200
    if (isNaN(value) || value < 80 || value > 200) {
        // Hiển thị thông báo lỗi
        document.getElementById(divId).innerHTML = message;
        document.getElementById(divId).style.display = "block";
        return false;
    }
    // Ẩn thông báo lỗi nếu hợp lệ
    document.getElementById(divId).innerHTML = "";
    document.getElementById(divId).style.display = "none";
    return true;
}


}
// Tạo đối tượng EmployeeFilter

export default Validation;