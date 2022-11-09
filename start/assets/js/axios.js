axios.get('https://fakestoreapi.com/products').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function (error) {
    console.log(error);
})

axios.delete('https://fakestoreapi.com/products/14').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function (error) {
    console.log(error);
})

axios.get('https://fakestoreapi.com/products/3').then(function (response) {
    console.log(response);
    console.table(response.data);
}).catch(function (error) {
    console.log(error);
})

axios.post('https://fakestoreapi.com/products', { title: 'il mio oggetto', price: 200 }).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
})

