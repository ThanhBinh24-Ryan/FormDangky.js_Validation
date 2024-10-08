class MaganerNV{
    constructor(){
        this.listNV = [
           
        ];
    }
    addNV(NhanVien){
        this.listNV.push(NhanVien);
    };
    findNV(tk){
    // let index  =-1;
    // for(let i =0 ; i<this.listNV.length; i++){
    //     if(this.listNV[i].email == email){
    //         index =1;
    //         break;
    //     }
    // }
    // return index;
   const index = this.listNV.findIndex((NhanVien) =>{
        return NhanVien.tk == tk;
    });
    return index;
    
    }
    deleteNV(tk){
        const index = this.findNV(tk);
        if(index !== -1){
            this.listNV.splice(index,1);
        }
    };
    editNV(tk){
        const index = this.findNV(tk);
        if(index !== -1){
           return this.listNV[index];
        }
        return null;
    }
    updateNV(NhanVien) {
        // Tìm vị trí của nhân viên trong danh sách dựa trên tài khoản
        const index = this.findNV(NhanVien.taikhoan);
        
        // Nếu tìm thấy nhân viên với tài khoản tương ứng
        if (index !== -1) {
          // Ghi đè thông tin nhân viên tại vị trí đó
          this.listNV[index] = NhanVien;
        } else {
          // Nếu không tìm thấy, có thể log ra lỗi hoặc thông báo
          console.log(`Không tìm thấy nhân viên với tài khoản: ${NhanVien.taikhoan}`);
        }
      }
      
   
   // Lọc danh sách nhân viên theo loại
   filterNV(xeploai) {
    if (xeploai === "all" || !xeploai) {
        return this.listNV; // Hiển thị tất cả nhân viên
    }

    // Chuẩn hóa giá trị người dùng nhập (loại bỏ dấu, khoảng trắng và chữ hoa thường)
    const normalizedType = removeVietnameseTones(xeploai.toLowerCase().trim());

    // Lọc danh sách nhân viên dựa trên loại đã chuẩn hóa
    return this.listNV.filter((NhanVien) => {
        if (NhanVien.xeploai) {
            const normalizedNhanVienType = removeVietnameseTones(NhanVien.xeploai.toLowerCase().trim());
            return normalizedNhanVienType === normalizedType;
        }
        return false; // Loại bỏ nhân viên nếu type không hợp lệ
    });
}
}

// Hàm xóa dấu tiếng Việt
function removeVietnameseTones(str) {
if (!str || typeof str !== 'string') return str; // Bảo vệ thêm lớp kiểm tra chuỗi
return str
    .normalize("NFD") // Tách các ký tự dấu ra khỏi ký tự gốc
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu bằng biểu thức chính quy
    .replace(/đ/g, "d").replace(/Đ/g, "D"); // Thay thế ký tự "đ" thành "d"
}

export default MaganerNV;