//B1 : tạo ra cơ sở dữ liệu
const dataUser = [
    {
        id: 1,
        name: 'Tèo',
        acc: 'cuong123',
        pass: 123
    }
];
//B2 : Lấy dữ liệu từ local
const localUser = JSON.parse(localStorage.getItem('dataUser'));
// B2.1 : kiểm tra xem trên local đã có dữ liệu chưa
// -chưa có thì cho phép thêm
// -đã có thì bỏ qua
//B3 :Đẩy dữ liệu đã có lên local
if (localUser == null) {
    localStorage.setItem('dataUser', JSON.stringify(dataUser));
}
//B4 : tạo ra công việc đăng nhập
//b4.1 : lấy dự liệu từ 2 ô input bên html
//b4.2 : duyệt qua hết các phần tử trong dataUser
//b4.3 : So sánh và kiểm tra xem giá trị có trùng nhau không
//b4.3.1 : Nếu trùng thì thông báo thông tin đúng
//b4.3.2 : Nếu không trùng thì thông báo thông tin không đúng
//b4.3.3 : Thực hiện thao tác đăng nhập
//B5 : tạo sự kiện đăng nhập
//B6 : sau khi đăng nhập thành công thì cần lưu id của user 
const Login = () => {
    let acc = document.querySelector('.acc').value;
    let pass = document.querySelector('.pass').value;
    for (let user of localUser) {
        if (acc == user.acc && pass == user.pass) {
            localStorage.setItem("idUser", user.id);
            alert('Đăng nhập thành công');
            //dùng để chuyển trang
            window.location.href = 'checkin.html';
            return;
        }
    }
    alert('Đăng nhập thất bại');
}