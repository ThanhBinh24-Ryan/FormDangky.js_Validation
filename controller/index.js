import MaganerNV from "../method/maganerNV.js";
import nhanVien from "../method/nhanVien.js";
import Validation from "../method/Validation.js";
// import MaganerNV from "../method/maganerNV";
const maganerNV = new MaganerNV();
const validation = new Validation();
const getEleId = (id) => document.getElementById(id);


const setLocalStorage = () =>{
    const dataString = JSON.stringify(maganerNV.listNV);
  localStorage.setItem("List_NhanVien",dataString);

};
const deleteNV =(tk) =>{
    maganerNV.deleteNV(tk)
    renderNhanVien(maganerNV.listNV);
    setLocalStorage();
}
window.deleteNV = deleteNV;
getEleId("btnThem").onclick = () => {

    // hide button "Cap nhat"
    getEleId("btnCapNhat").style.display = "none";

    getEleId("btnThemNV").style.display = "block";
    // reset form
    getEleId("nhanVienForm").reset();
    // enable input field
    getEleId("tknv").removeAttribute("disabled");
  };
// const editNV =(tk) =>{
//   getEleId("btnThemNV").style.display = "none";
//   // show button "Cap nhat"
//   getEleId("btnCapNhat").style.display = "block";
//   const NhanVien = maganerNV.editNV(tk);
//    if(NhanVien){
 
//     getEleId("tknv").value = NhanVien.taikhoan;
//     // getEleId("tknv").setAttribute("disabled",true);
//     getEleId("name").value =  NhanVien.hoten;
//     getEleId("email").value = NhanVien.email;
//     getEleId("password").value = NhanVien.password;
//     getEleId("datepicker").value = NhanVien.lich;
//     getEleId("luongCB").value  = NhanVien.luong;
//     getEleId("chucvu").value =  NhanVien.chucvu;
//     getEleId("gioLam").value  = NhanVien.giolam;
//    }
   
// }
let currentEditTK = null; // Khai báo biến lưu giữ tài khoản nhân viên đang chỉnh sửa

const editNV = (tk) => {
    getEleId("btnThemNV").style.display = "none";
    getEleId("btnCapNhat").style.display = "block";
  
    const NhanVien = maganerNV.editNV(tk);
    if (NhanVien) {
      currentEditTK = tk; // Lưu giữ tài khoản nhân viên hiện tại
  
      // Kiểm tra dữ liệu nhân viên trước khi hiển thị
      console.log("Dữ liệu nhân viên:", NhanVien);
  
      // Kiểm tra từng trường xem có bị undefined không
      if (NhanVien.tk) {
        getEleId("tknv").value = NhanVien.tk;
      } else {
        console.error("Tài khoản không tồn tại!");
      }
      getEleId("tknv").setAttribute("disabled", true);
      getEleId("name").value = NhanVien.hoten || "";
      getEleId("email").value = NhanVien.email || "";
      getEleId("password").value = NhanVien.mk || "";
      getEleId("datepicker").value = NhanVien.lich || "";
      getEleId("luongCB").value = NhanVien.luongcb || 0; // Nếu undefined, đặt mặc định là 0
      getEleId("chucvu").value = NhanVien.chucvu || "";
      getEleId("gioLam").value = NhanVien.giolam || 0; // Nếu undefined, đặt mặc định là 0
    } else {
      console.error("Không tìm thấy nhân viên với tài khoản:", tk);
    }
  };

window.editNV = editNV;
const updateNV =(tk) =>{
    maganerNV.updateNV(tk)
    renderNhanVien(maganerNV.listNV);
    setLocalStorage();
}
window.updateNV = updateNV;

const renderNhanVien = (listNV) =>{
    let contenHTML = "";
    listNV.forEach((NhanVien) => {
     contenHTML += `
         <tr>
         <td>${NhanVien.tk}</td>
         <td>${NhanVien.hoten}</td>
         <td>${NhanVien.email}</td>
         <td>${NhanVien.lich}</td>
         <td>${NhanVien.chucvu}</td>
         <td>${NhanVien.tongluong}</td>
         <td>${NhanVien.xeploai}</td>
         
           
        
        <td>
            <button class="btn btn-info " data-toggle="modal" data-target="#myModal" onclick="editNV(${NhanVien.tk})">Edit</button>
            <button class="btn btn-danger" onclick="deleteNV(${NhanVien.tk})">Delete</button>
        </td>
 
         </tr>
     
     `
     
    });
    getEleId("tableDanhSach").innerHTML = contenHTML;
 }
const getLocalStrorage = () =>{
    const dataString = localStorage.getItem("List_NhanVien");
    if(dataString){
        const dataJson = JSON.parse(dataString);
        maganerNV.listNV = dataJson;
        renderNhanVien(maganerNV.listNV);
      }
    
    
}

getLocalStrorage();

const getInfoNhanVien =() =>{
    const taikhoan = getEleId("tknv").value;
    const hoten = getEleId("name").value;
    const email = getEleId("email").value;
    const password = getEleId("password").value;
    const lich = getEleId("datepicker").value;
    const luong = Number(getEleId("luongCB").value); 
    const chucvu = getEleId("chucvu").value;
    const giolam = Number(getEleId("gioLam").value); 
    
    
  // flag: true/false
  let isValid = true; // true: hop le; false: khong hop le

  // Validate form
  // foodID
  isValid &= validation.checkEmpty(taikhoan, "tbTKNV", "Nhập số tài khoản");
  isValid &= validation.checkNumber(taikhoan,"tbTKNV","please, hãy nhập số");
  isValid &= validation.checkNumbers(taikhoan,"tbTKNV","please,hãy nhập từ 4 -> 6 chữ số");
  // check name
  isValid &=
    validation.checkEmpty(hoten, "tbTen", "Please enter name") &&
    validation.checkCharactersString(
      hoten,
      "tbTen",
      "Please, hãy nhập chữ"
    );
    //check email
    isValid &= validation.checkEmpty(email, "tbEmail", "Không được để trống");
    isValid &= validation.checkEmail(email,"tbEmail","Please, hãy nhập đúng định dạng email");
    //check password
    isValid &= validation.checkEmpty(password,"tbMatKhau", "Không được để trống");
    isValid &= validation.checkPass(password,"tbMatKhau","Please, mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)");
    // ngay
    isValid &= validation.checkEmpty(lich, "tbNgay", "Không được để trống");
    isValid &=  validation.checkNgay(lich, "tbNgay", "Chọn đúng định dạng lịch");

    
    isValid &= validation.checkLuong(luong,"tbLuongCB","khong de trong và Lương cơ bản 1 000 000 - 20 000 000");
    // option 
    isValid &= validation.checkOption("chucvu","tbChucVu","khong de trong");
 
    
    isValid &= validation.checkEmpty(giolam, "tbGiolam", "không để trống")
    isValid &= validation.checkGioLam(giolam, "tbGiolam", "Giờ làm phải nằm trong khoảng 80 - 200 giờ và là số");
    if (isValid) {
    const NhanVien = new nhanVien(
        taikhoan,
        hoten,
        email,
        password,
        lich,
        luong,
        chucvu,
        giolam,

    );
  
    return NhanVien;
}
return null;


};

getEleId("btnThemNV").onclick = () => {
    const NhanVien = getInfoNhanVien();
    if (!NhanVien) {
        console.log("Thông tin không hợp lệ. Không thể thêm nhân viên.");
        return;
    }
 
    // Tính toán xếp loại và tổng lương
    NhanVien.showxeploai();
    NhanVien.showtongluong();
 
    // Thêm nhân viên vào danh sách
    maganerNV.addNV(NhanVien);
 
    // Hiển thị danh sách nhân viên
    renderNhanVien(maganerNV.listNV);
 
    // Lưu vào localStorage
    setLocalStorage();
 };
 
 getEleId("btnCapNhat").onclick = () => {
    const NhanVien = getInfoNhanVien();
  
    if (!NhanVien) return;
    
    // Đảm bảo rằng tài khoản cũ được giữ nguyên
    NhanVien.taikhoan = currentEditTK;
    NhanVien.showxeploai();
    NhanVien.showtongluong();
    // Cập nhật thông tin nhân viên
    maganerNV.updateNV(NhanVien);
    renderNhanVien(maganerNV.listNV);
    
    // Lưu vào localStorage
    setLocalStorage();
  };
  
getEleId("searchName").addEventListener("change", () => {
    const value = getEleId("searchName").value; // Lấy giá trị từ input
    console.log(value);
    // Lọc danh sách nhân viên theo loại mà người dùng nhập vào
    const listNhanVienFilter = maganerNV.filterNV(value);
  
    // Hiển thị lại danh sách nhân viên sau khi lọc
    renderNhanVien(listNhanVienFilter);
  });
  
  
  