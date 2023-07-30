//Arrow function : 
// cú pháp : const (tên hàm) = () => {}
function sum(a, b) {
    return a + b
}
console.log("function thuong", sum(1, 2));
//khi mà muốn trả về giá trị chỉ tính toán 1 lần
// thì không cần thiết phải thêm chữ return và k cần phải có { }
const suma = (a, b) => {
    let c = a * 2
    return c + b
}
console.log("function ", suma(1, 2));

//Block Scoped: phạm vi hoạt động của biến

// các cách khai báo 1 biến : let , const , var

//var là cách khai báo biến toàn cục
// khuyên dùng chỉ sử dụng let và const vì phạm vi hoạt động của let và const nhỏ hơn và dễ kiểm soát hơn
// if(1<2) {
//     const i = 10
// } 
// console.log(i); //10
//Template String : ``

let a = 10;

// app.innerHTML = "<h3>hello"+a+"</h3><p>xin chào các bạn mình tên là Cường</p><input type='text'><button>Gửi</button>"
// app.innerHTML = `     
//         <h3>hello ${a}</h3>
//         <p>xin chào các bạn mình tên là Cường</p>
//         <input type="text">
//         <button>Gửi</button>
//         `
//cho phép viết theo cú pháp của html trong file js
//để chuyền được 1 biến vào trong template thì ta sử dụng cú pháp ${tên biên} vào vị trí muốn thay đổi



//Render
//tạo 1 bảng data chứ thông tin của sản phẩm

const data = [
    {
        id: 1,
        image: "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        name: "product 3",
        detail: "thông tin chi tiết"
    },
    {
        id: 2,
        image: "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        name: "cuong",
        detail: "thông tin chi tiết"
    },
    {
        id: 3,
        image: "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        name: "hahaha",
        detail: "thông tin chi tiết"
    }
    ,
    {
        id: 4,
        image: "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
        name: "product 3",
        detail: "thông tin chi tiết"
    }
]
// tạo hàm Render

const Render = () => {
    //hiện thị ra ở đâu
    let app = document.querySelector("#app");
    //duyệt qua mảng để hiện thị qua từng phần tử
    for (let item of data) {
        app.innerHTML += `
            <div class="post-item">
                <img src=${item.image} alt="">
                <h3>${item.name}</h3>
                <p>t${item.detail}</p>
            </div>
        `
    }
}
Render()

//hàm push trong array
//hàm push giúp thêm 1 phần tử nữa vào mảng, giá trị phần tử phụ thuộc vào giá trị truyền vào trong hàm push
let test = {
    name: 'cuong',
    age: 24
}
let arr = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(test)
console.log("array new ", arr);



// local stroge
// localStorage.setItem() //truyền vào 2 tham số , dùng để tạo ra giá trị trên local
// localStorage.getItem()  // truyền vào 1 tham số là key , dùng để lấy giá trị từ local xuông
// localStorage.removeItem() // truyền vào 1 tham số là key , dùng để xóa dữ liệu đó đi
// localStorage.clear()    // xóa toàn bộ local

//giá trị của local không nhận 1 obj 
// sử dụng JSON.stringify để dịch ngược chuỗi trên
// chuyển đổi từ kiểu obj sang string
localStorage.setItem("product", JSON.stringify(test))


//sử dụng JSON.parse để chuyển đổi từ string qua obj
let product = JSON.parse(localStorage.getItem("product"))
console.log(product);

localStorage.removeItem("product")

localStorage.clear() //dùng để xóa tất cả trong local