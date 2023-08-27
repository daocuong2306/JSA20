//ADMIN

// READ 
// b1  : tạo data  

const dataProduct = [
    {
        id: 1,
        name: 'Product 1',
        price: 10000
    },
    {
        id: 2,
        name: 'Product 1',
        price: 10000
    },
    {
        id: 3,
        name: 'Product 1',
        price: 10000
    }
];
// b2 : lấy dữ liệu  lên local
const dataProducts = JSON.parse(localStorage.getItem('dataProduct'));
// b3 : kiểm tra dữ liệ xem trên local đã có chưa
//   + có rồi : bỏ qua
//   + chưa có : thì đẩy dữ liệu lên
if (dataProducts == null) localStorage.setItem('dataProduct', JSON.stringify(dataProduct));
console.log(dataProducts);
// b4 : làm tính năng read 

//truyền vào hàm show 1 tham số là dữ liệu muốn show ra
const showProducts = (data) => {
    // liên kết đến html
    let show = document.querySelector('.show');
    // thêm dữ liệ vào show
    let index = 0;

    if (show) {
        //clear màn hình
        show.innerHTML = '';
        for (let product of data) {
            show.innerHTML += `
                <tr>
                    <th scope="row">${index++}</th>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <button type="button" onClick="removeProduct(${product.id})" class="btn btn-danger">DELETE</button>
                        <a href='update.html?id=${product.id}'><button type="button"  class="btn btn-primary">UPDATE</button></a>
                    </td>
                </tr>
            `
        }
    }
}
showProducts(dataProducts);

// ADD PRODUCT

const addProduct = (e) => {
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    //tạo ra 1 obj mới
    let newObj = {
        price,
        name,
        id: dataProducts.length + 1
    }
    console.log(newObj);
    dataProducts.push(newObj);
    //đẩy mảng mới thêm lên local
    localStorage.setItem('dataProduct', JSON.stringify(dataProducts));
    window.location.href = 'index.html';
}

//DELETE

const removeProduct = (id) => {
    //comfirm dữ liệu
    let check = window.confirm('Bạn có muốn xóa');
    if (check) { // kiểm tra check có bằng true hay k 
        //lấy dữ liệu từ local lại 1 lần nữa
        let data = JSON.parse(localStorage.getItem('dataProduct'))
        let dataFilter = data.filter((item) => item.id !== id)
        localStorage.setItem('dataProduct', JSON.stringify(dataFilter));
        showProducts(dataFilter);
        alert("Đã xóa thành công")
    }
}



//UPDATE Products
const updateProducts = () => {
    //lấy được id từ url
    let id = new URLSearchParams(window.location.search).get('id');
    let update = document.querySelector('.update');
    if (update) {
        let name = document.querySelector('.name').value;
        let price = document.querySelector('.price').value;
        //tạo ra 1 obj mới sau khi điền lại thông tin
        let newObj = {
            price,
            name,
            id
        }
        // thay đổi obj đã cập nhật trong mảng 
        updataData = dataProducts.map((item) => item.id == newObj.id ? newObj : item)
        localStorage.setItem('dataProduct', JSON.stringify(updataData));
        window.location.href = 'index.html';
    }
}
const showUpdate = () => {
    let id = new URLSearchParams(window.location.search).get('id');
    let update = document.querySelector('.update');
    if (update) {
        let name = document.querySelector('.name');
        let price = document.querySelector('.price');
        //Lọc ra 1 obj có trùng id với id đã truyền lên url
        let data = dataProducts.find((item) => item.id == id);
        //hiển thị giá trị ra màn hình
        name.value = data.name;
        price.value = data.price
    }
}
showUpdate()