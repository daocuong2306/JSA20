const show = () => {
    let app = document.querySelector('.item');
    if (app) {
        fetch('http://localhost:3000/product')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                for (let item of data) {
                    app.innerHTML += `
                    <tr>
                        <th scope="row">1</th>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td><button onClick="deleteProduct(${item.id})">Xoa</button></td>
                        <td><a href="update.html?id=${item.id}"><button >UPDATE</button></a></td>
                    </tr>
            `
                }
            })
    }

}
show()
const deleteProduct = (id) => {
    let check = window.confirm("bạn có muốn xóa");
    if (check) {
        fetch(`http://localhost:3000/product/${id}`, {
            method: 'DELETE'
        });
        alert("đã xóa thành công")
    }
}
const addProduct = () => {
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    fetch('http://localhost:3000/product', {
        method: 'POST',
        body: JSON.stringify({
            'name': `${name}`,
            'price': `${price}`
        })

    });
}


const showProductById = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) {
        let app = document.querySelector('.app');
        fetch(`http://localhost:3000/product/${id}`)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                app.innerHTML = `
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control name" id="exampleInputEmail1" aria-describedby="emailHelp" value=${data.name}>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Price</label>
                    <input type="number" class="form-control price" id="exampleInputPassword1" value=${data.price}>
                </div>
                <button type="submit" class="btn btn-primary" onClick='updateProduct()'>Update</button>

                `
            })
    }
}
showProductById()

const updateProduct = () => {
    const id = new URLSearchParams(window.location.search).get('id');
    const name = document.querySelector('.name').value;
    const price = document.querySelector('.price').value;
    fetch(`http://localhost:3000/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ name: name, price: price })
    })
    window.location.href = 'index.html'
}