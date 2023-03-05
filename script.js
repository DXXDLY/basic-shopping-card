const cart = [];
const cartContainer = document.querySelector('.shop-stuff');
const addToCartButtons = document.querySelectorAll('.btn-buy');
const cardTotal = document.querySelector('.card-total');
const cardCount = document.querySelector('.card-count');
const addToCard = (name, price) => {
    cart.push({ name, price })
    renderCard()
}
const renderCard = () => {  
    cartContainer.innerHTML = '';
    let count = 0
    let total = 0
    for (const item of cart) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('shop-item')
        itemElement.innerHTML = `
        <div class="item-name">${item.name}</div>
        <div class="item-price">${item.price} руб.</div>
        `
        cartContainer.appendChild(itemElement)
        count++
        total += item.price
    }
    cardTotal.textContent = total
    cardCount.textContent = count
}
for (const buttonItem of addToCartButtons) {
    buttonItem.addEventListener('click', () => {
        const name = buttonItem.dataset.name
        const price = +buttonItem.dataset.price
        addToCard(name,price)

    })
}