class AllProducts{
  constructor(containerProducts, catalogCounter , catalogProduct){
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

      let item = createOneProduct.getProductItem({
        tagName: 'div',
        className: 'item'
      })

      let name = createOneProduct.getProductItem({
        tagName: 'div',
        className: 'name',
        textName: this.catalogProduct[i].name
      })

      let img = createOneProduct.getProductItem({
        tagName: 'img',
        className: 'img',
        backgroundImg: `${this.catalogProduct[i].img}`
      })

      let price = createOneProduct.getProductItem({
        tagName: 'div',
        className: 'price',
        textName: this.catalogProduct[i].price + '$'
      })

      let btn = createOneProduct.getProductItem({
        tagName: 'button',
        className: 'btn',
        textName: activeText,
        id: this.catalogProduct[i].id
      });
      btn.addEventListener('click', function(){
        let id = this.getAttribute('id');
        let result = cardStore.putProduct(id);

        allProducts.catalogCounter.innerHTML = result.products.length;
        if(result.statusProduct){
          this.innerHTML = 'Delete';
        }else{
          this.innerHTML = 'Add';
        }
      })

      let btnInfo = createOneProduct.getProductItem({
        tagName: 'button',
        className: 'btnInfo',
        textName: 'detail',
        id: this.catalogProduct[i].id
      });
       btnInfo.addEventListener('click', function(){
        let id = this.getAttribute('id');
        let result = cardStore.putProduct(id);
      }) 

      
      item.appendChild(img);
      item.appendChild(name);
      item.appendChild(price);
      item.appendChild(btn);
      item.appendChild(btnInfo);
      wrapper.appendChild(item);
    }

    this.containerProducts.appendChild(wrapper);
  }

  
}

function checkProduct(id){
  for(let i=0; i<catalogProduct.length; i++){
    if(catalogProduct[i].id == id){
      console.log(catalogProduct)
    }   
  }
}

let allProducts = new AllProducts('.container-product', '.container-counter', catalogProduct);


  btnInfo = document.getElementsByClassName('btnInfo');
  for(let i=0; i<btnInfo.length; i++){
    btnInfo[i].addEventListener('click', function(){
      let id = this.getAttribute('id');
      const [product] = catalogProduct.filter(p => p.id == id);
      const postParameters =  {
        containerImage: '.imageProduct',
        containerDescription: '.descriptionProduct',
        catalogProduct: product
      };
      sessionStorage.setItem('catalogForInfoPage', JSON.stringify(postParameters));
      window.location.href = '../html/detailedInfo.html';
    })
  }
