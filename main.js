const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {

    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add("inactive");
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const isMobileMenuOpenClosed = mobileMenu.classList.contains("inactive");

    // aside.classList.toggle('inactive');

    if (!isMobileMenuOpenClosed) {
        mobileMenu.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle('inactive');

}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Cajonera',
    price: 1120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Bike',
    price: 1205,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


/* <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./Artesanias/icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> */

function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');


        const productInfoDiv = document.createElement('div');


        const productPrice = document.createElement('div');
        productPrice.innerHTML = '$' + product.price;
        const productName = document.createElement('div');
        productName.innerHTML = product.name;

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_added_to_cart.svg');


        productInfoFigure.appendChild(productImgCard)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

        //product = {name,price,image} --> product.image

    }

}


renderProducts(productList);