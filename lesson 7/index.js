


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