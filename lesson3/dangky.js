// B1 : lấy dự liệu trên local 
const dataUsers = JSON.parse(localStorage.getItem('dataUser'));
// B2 : tạo công việc đăng ký
// B2.1 : kiểm tra xem đã nhập dữ liệu hay chưa
// B3 : kiểm tra xem đã có tk nào như thế chưa
// B4 : thêm tài khoản đã đăng kí thành công vào mảng data trên local
// B5 : đẩy dữ liệu đã thêm vào local

const signUp = () => {
    let acc = document.querySelector('.acc').value;
    let pass = document.querySelector('.pass').value;
    let name = document.querySelector('.name').value;
    if (acc == '' || pass == '' || name == '') {
        alert('vui lòng nhập đầy đủ thông tin')
    } else {
        for (let user of dataUsers) {
            if (acc == user.name) {
                alert("tài khoản đã tồn tại");
                return;
            }
        }
        let userNew = {
            name,
            pass,
            acc,
            id: dataUsers.length + 1
        }
        dataUsers.push(userNew);
        localStorage.setItem("dataUser" , JSON.stringify(dataUsers))
    }

}