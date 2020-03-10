class DetailedProduct{
  constructor({containerImage, containerDescription, catalogProduct}){
    this.containerImage = document.querySelector(containerImage);
    this.containerDescription = document.querySelector(containerDescription);
    this.catalogProduct = catalogProduct;
    this.createProduct();
  }

/* <div class="imageProduct col-xl-5 col-lg-5 col-md-5"></div>
      <div class="descriptionProduct col-xl-7 col-lg-7 col-md-7">
        <div class="name"></div>
        <div class="price"></div>
        <div class="description"></div>
        <button class="addBtn"></button>
        <input type="input">
        <div class="comments"></div>
      </div> */

      createProduct(){
          let item = this.getProductItem({
            tagName: 'div',
            className: 'item'
          })

          let imgProduct = this.getProductItem({
            tagName: 'div',
            className: 'imgProduct'
          })
    
          let name = this.getProductItem({
            tagName: 'div',
            className: 'name',
            textName: this.catalogProduct.name
          })
    
          let img = this.getProductItem({
            tagName: 'img',
            className: 'img',
            backgroundImg: `${this.catalogProduct.img}`
          })
    
          let price = this.getProductItem({
            tagName: 'div',
            className: 'price',
            textName: this.catalogProduct.price + '$'
          })

          let descr = this.getProductItem({
            tagName: 'p',
            className: 'descr',
            textName: this.catalogProduct.description
          })
    
          let btn = this.getProductItem({
            tagName: 'button',
            className: 'btn',
            textName: 'add',
            id: this.catalogProduct.id,
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

          let br = this.getProductItem({
            tagName: 'br'
          })

    
          
          imgProduct.appendChild(img);
          item.appendChild(name);
          item.appendChild(price);
          item.appendChild(descr);
          item.appendChild(btn);
        
        this.containerImage.appendChild(imgProduct);
        this.containerDescription.appendChild(item);
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

//alert(catalogProduct[1])
//let detailedProduct = new DetailedProduct('.imageProduct','.descriptionProduct', catalogProduct[1])
//console.log(detailedProduct)
if(!sessionStorage.getItem('catalogForInfoPage'))
  //window.location.href = '../html/catalog.html';

const currentProduct = JSON.parse(sessionStorage.getItem('catalogForInfoPage'));
new DetailedProduct(currentProduct);