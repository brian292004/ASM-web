let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Nice yeeze shoes',
        image: '5.jpg',
        price: 350000 
    },
    {
        id: 2,
        name: 'Brown leather men shoes',
        image: 'giay-da-nam-mau-nau-GNTA1652-N-1.jpg',
        price: 375000
    },
    {
        id: 3,
        name: 'High quality cowhide men loafers',
        image: 'giay-luoi-nam-da-bo-cao-cap-gnta5501-d..jpg',
        price: 399000
    },
    {
        id: 4,
        name: 'High quality crocodile leather shoes',
        image: 'GNTA06825-CF.jpg',
        price: 520000
    },
    {
        id: 5,
        name: 'Obito custom sneakers',
        image: '8.jpg',
        price: 400000
    },
    {
        id: 6,
        name: 'Beautiful boots for men and women ',
        image: '9.jpg',
        price: 450000
    },
    {
        id: 7,
        name: 'Beautiful women high heels ',
        image: '11.jpeg',
        price: 300000
    },
    {
        id: 8,
        name: 'Beautiful leather shoes ',
        image: 'ava-giay-da-GNTA6801-1-D.jpg',
        price: 390000
    },
    {
        id: 9,
        name: 'Adidas shoes ',
        image: '4.jpg',
        price: 200000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="uploads/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="uploads/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
