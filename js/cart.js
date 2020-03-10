class Cart{
    constructor(catalogCounter, containerCart, catalogProduct){
        this.catalogCounter = document.querySelector(catalogCounter);
        this.containerCart = document.querySelector(containerCart);
        this.catalogProduct = catalogProduct;
        this.create();
    }

    create(){
        document.getElementById('basket').addEventListener('click', function(){
            cart.containerCart.style.display = 'block';
            let productsCart = cart.getProductCart();
            let wrapper = document.createElement('div');
            wrapper.className = 'slot';
            const view = document.createElement('button');
            view.className = 'viewCart';
            view.innerHTML = 'View Cart';
            view.addEventListener('click', () => {
                window.location.href = '../html/basket.html';
            })

            for( let i = 0; i < productsCart.length; i++){
                let item = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'item'
                });
                let img = createOneProduct.getProductItem({
                    tagName: 'img',
                    className: 'img',
                    backgroundImg: `${productsCart[i].img}` 
                });
                let productInfo = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'productInfo',
                });
                let name = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'name',
                    textName: productsCart[i].name   //Обращение уже к полученному массиву товаров
                });
                let price = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'price',
                    textName: productsCart[i].price + '$' //Обращение уже к полученному массиву товаров
                });
                const remove = createOneProduct.getProductItem({
                    tagName: 'div',
                    className: 'removeProduct',
                });
                const deleteBtn = createOneProduct.getProductItem({
                    tagName: 'a',
                    id: productsCart[i].id,
                    href: 'javascript:void(0);'
                });
                const deleteIcon = createOneProduct.getProductItem({
                    tagName: 'i',
                    className: 'fas fa-times',

                });
                deleteBtn.addEventListener('click', () => {

                    const productLocalStorage = JSON.parse(localStorage.getItem('CardStore'));
                    localStorage.setItem('CardStore', JSON.stringify(productLocalStorage.filter(p => p !== deleteBtn.id)));
                    item.remove();
                  })
                

                deleteBtn.appendChild(deleteIcon);
                remove.appendChild(deleteBtn);
                productInfo.appendChild(name);
                productInfo.appendChild(price);
                item.appendChild(img);
                item.appendChild(productInfo);
                item.appendChild(remove);
                wrapper.appendChild(item);
                
            }
    
            let close = createOneProduct.getProductItem({
                tagName: 'div',
                className: 'close',
                textName: 'x'
            })

            close.addEventListener('click', function(){
                cart.containerCart.style.display = 'none';
                cart.containerCart.innerHTML = '';
            })

            cart.containerCart.appendChild(wrapper);
            cart.containerCart.appendChild(close);
            cart.containerCart.appendChild(view);
        });

        /////////////Mobile//////////////////////////

        document.getElementById('basketMobile').addEventListener('click', function(){
            window.location.href = '../html/basket.html';
        });
    }

    getProductCart(){
        let products = cardStore.getProduct();
        let productsCart = [];
        for( let i = 0; i < this.catalogProduct.length; i++){
            if(products.indexOf(this.catalogProduct[i].id) !== -1){
                productsCart.push(this.catalogProduct[i]);
            }
        }
        return productsCart;
    }

}

let cart = new Cart('.container-counter', '.container-cart', catalogProduct);