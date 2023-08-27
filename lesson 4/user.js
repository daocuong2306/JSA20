//USER 

// read 
//lấy dữ liệu từ local
const dataProducts = JSON.parse(localStorage.getItem('dataProduct'));
console.log(dataProducts);
const showProducts = (data) => {
    //liên với html
    let products = document.querySelector('.itemProducts');
    //Kiêm tra 
    if (products) {
        for (let item of data) {
            products.innerHTML +=
                `
             <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="https://mabustudio.com/?attachment_id=3204" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.price}</p>
                            <a href="#" class="btn btn-primary" onClick="addCart(${item.id})">Add to cart</a>
                        </div>
                    </div>
                </div>
                `

        }

    }
}


//add cart 
// để lọc ra 1 sản phẩm trùng với id đã chon
// dataProducts.map() // từ 1 mảng và duyệt qua các phần tử của mảng và dữ nguyên giá trị của nó
// dataProducts.filter() // từ 1 mảng cũ tạo ra 1 mảng mới có các phần tử được trả về giá trị là true
// dataProducts.find() // từ 1 mảng cũ tạo ra 1 phần tử mới có các phần tử được trả về giá trị là true
//tạo ra 1 mảng data cart trên local
const data = [];
const dataCart = JSON.parse(localStorage.getItem('cart'));
if (dataCart == null) {
    localStorage.setItem('cart', JSON.stringify(data));
}
const addCart = (id) => {
    //sử dụng find để lọc ra sản phẩm mà mình vừa click vào
    let product = dataProducts.find((item) => item.id == id);
    console.log(product);

    //tạo 1 mảng mới
    let products = JSON.parse(localStorage.getItem('cart'));
    // findIndex
    let check = products.findIndex((item) => item.id == id);
    console.log(check);
    if (check == -1) {
        products.push({ ...product, index: 1 });
        //đấy dữ liệu lên localStorage
        localStorage.setItem('cart', JSON.stringify(products));
    } else {
        products[check].index++;
        localStorage.setItem('cart', JSON.stringify(products));
    }

}
showProducts(dataProducts)
const showCart = (data) => {
    //liên với html
    let cart = document.querySelector('.cart-item');
    //Kiêm tra 
    if (cart) {
        for (let item of data) {
            cart.innerHTML +=
                `
                <tr>
                <th scope="row">${item.id}</th>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.index}</td>
            </tr>
          
                `

        }

    }
}
showCart(dataCart)