class AllProducts{
  constructor(containerProducts, catalogCounter, catalogProduct){
    this.containerProducts = document.querySelector(containerProducts);
    this.catalogCounter = document.querySelector(catalogCounter);
    this.catalogProduct = catalogProduct;
    this.createProduct();
  }

/* <div class="item">
    <div class="name">Product1</div>
    <div class="img"></div>
    <div class="price">100$</div>
    <button class="btn">Купить</button>
</div> */

  createProduct(){
    let wrapper = document.createElement('slot');
    let products = cardStore.getProduct();
    this.catalogCounter.innerHTML = products.length;
    for(let i=0; i<this.catalogProduct.length; i++){

      let index = products.indexOf(this.catalogProduct[i].id);
      let activeText;

      if(index === -1){
        activeText = 'Add';
      }else{
        activeText = 'Delete';
      }

      let item = this.getProductItem({
        tagName: 'div',
        className: 'item'
      })

      let name = this.getProductItem({
        tagName: 'div',
        className: 'name',
        textName: this.catalogProduct[i].name
      })

      let img = this.getProductItem({
        tagName: 'img',
        className: 'img',
        backgroundImg: `${this.catalogProduct[i].img}`
      })

      let price = this.getProductItem({
        tagName: 'div',
        className: 'price',
        textName: this.catalogProduct[i].price + '$'
      })

      let btn = this.getProductItem({
        tagName: 'button',
        className: 'btn',
        textName: activeText,
        id: this.catalogProduct[i].id
      });
      btn.addEventListener('click', function(){
        let id = this.getAttribute('id');
        let result = cardStore.putProduct(id);
        if(result.statusProduct){
          this.innerHTML = 'Delete';
        }else{
          this.innerHTML = 'Add';
        }
      })

      
      item.appendChild(img);
      item.appendChild(name);
      item.appendChild(price);
      item.appendChild(btn);
      wrapper.appendChild(item);
    }

    this.containerProducts.appendChild(wrapper);
  }

  getProductItem(card){
    let element = document.createElement(card.tagName);
    if('className' in card){
      element.setAttribute('class', card.className)
    }
    if('textName' in card){
      element.innerHTML = card.textName;
    }
    if('backgroundImg' in card){
      element.setAttribute('src',card.backgroundImg);
    }
    if('id' in card){
      element.setAttribute('id', card.id);
    }
    return element;
  }
}

let allProducts = new AllProducts('.container-product', '.container-counter', catalogProduct);