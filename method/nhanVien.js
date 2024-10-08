class nhanVien {
    constructor(_tk, _hoten, _email, _mk, _lich, _luongcb, _chucvu, _giolam) {
        this.tk = _tk;
        this.hoten = _hoten;
        this.email = _email;
        this.mk = _mk;
        this.lich = _lich;
        this.luongcb = _luongcb;
        this.chucvu = _chucvu;
        this.giolam = _giolam;
        this.xeploai = "";
        this.tongluong = 0;
    }

    showxeploai() {
        let result = "";  // Sử dụng let thay vì const và sửa lỗi chính tả
        if (this.giolam >= 192) {
            result = "Xuất Sắc";
        } else if (this.giolam >= 176 && this.giolam < 192) {
            result = "Giỏi";
        } else if (this.giolam >= 160 && this.giolam < 172) {
            result = "Khá";
        } else {
            result = "Trung Bình";
        }
        this.xeploai = result;  // Gán kết quả vào this.xeploai
    }

    showtongluong() {
        if (this.chucvu === "Sếp") {  // Sử dụng === để so sánh giá trị
            this.tongluong = this.luongcb * 3;
        } else if (this.chucvu === "Trưởng phòng") {
            this.tongluong = this.luongcb * 2;
        } else {
            this.tongluong = this.luongcb * 1;
        }
    }
}

export default nhanVien;
