//Cách lấy dữ liệu từ API: (2 kiểu)
//1 : lấy toàn bộ dữ liệu
//2 : lấy từng cái 1

// vd : GET ALL API
fetch('http://localhost:3000/product')
    .then((response) => response.json())
    .then((data) => {
        console.log("data All", data);
    })
// vd : GET ID API
fetch(`http://localhost:3000/product/1`)
    .then((response) => response.json())
    .then((data) => {
        console.log("data", data);
    })
//POST | Thêm dữ liệu vào API
const data1 = {
    name: "product post"
}
const add = () => {
    fetch('http://localhost:3000/product', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data1)
    })
}
//PUT | PATCH - SỬA - UPDATE
const dataUpdate = {
    name: 'product update'
}
const update = () => {
    fetch('http://localhost:3000/product/1', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUpdate)
    })
}
//DELETE | Xóa
const deleteP = () => {
    fetch('http://localhost:3000/product/1', {
        method: 'DELETE',
    })
}