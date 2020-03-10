class CartPage{
 constructor(containerBasket, catalogProduct){
   this.containerBasket = document.querySelector(containerBasket);
   this.catalogProduct = catalogProduct;
   this.create();
 } 
/*  <div class="container">
      <div class=" row">
        <div class="delete-product col-xl-1 col-lg-1 col-md-1 col-sm-1">
          <i class="fas fa-times"></i>
        </div>
        <div class="image-product col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <img>
        </div> 
        <div class="name-product col-xl-3 col-lg-3 col-md-3 col-sm-3"></div> 
        <div class="price-product col-xl-2 col-lg-2 col-md-2 col-sm-2"></div> 
        <div class="quantity-product col-xl-2 col-lg-2 col-md-2 col-sm-2"></div> 
        <div class="total col-xl-2 col-lg-2 col-md-2 col-sm-2"></div> 
      </div>
    </div> */
 createRow({id, img, name, price}){
  const row = document.createElement('div');
  row.className = 'row';

  const deleteContainer = document.createElement('div');
  deleteContainer.className = 'delete-product col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1';
  const deleteBtn = document.createElement('a');
  deleteBtn.href = 'javascript:void(0);';
  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-times';
  deleteBtn.appendChild(deleteIcon);
  deleteContainer.appendChild(deleteBtn);

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-product col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2';
  const image = document.createElement('img');
  image.src = img;
  imageContainer.appendChild(image);

  const nameContainer = document.createElement('div');
  nameContainer.className = 'name-product col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3';
  nameContainer.innerHTML = name;

  const priceContainer = document.createElement('div');
  priceContainer.className = 'price-product col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2';
  priceContainer.innerHTML = price + '$';

  const quantityContainer = document.createElement('div');
  quantityContainer.className = 'quantity-product col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2';
  quantityContainer.innerHTML = 'Qty: ';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = '1';
  quantityInput.min = 1;
  quantityContainer.appendChild(quantityInput);

  const totalContainer = document.createElement('div');
  totalContainer.className = 'total col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2';
  totalContainer.innerHTML = 'Total: ' + price + '$';

  const totalCart = document.getElementById('totalCart');
  totalCart.innerHTML = 0;

  deleteBtn.addEventListener('click', () => {

    const productLocalStorage = JSON.parse(localStorage.getItem('CardStore'));
    localStorage.setItem('CardStore', JSON.stringify(productLocalStorage.filter(p => p !== id)));
    row.remove();
  })

  quantityInput.addEventListener('keyup', (e) => {
    const count = e.target.value;
    const total = (count * price);
    totalContainer.innerHTML = 'Total: ' + total + '$';
    totalCart.innerHTML =  Array.from(document.getElementsByClassName('total')).reduce((result, element) => parseInt(element.innerHTML.match(/\d+/)) + result, 0)
   
    console.log(total)
  })

  row.appendChild(deleteContainer);
  row.appendChild(imageContainer);
  row.appendChild(nameContainer);
  row.appendChild(priceContainer);
  row.appendChild(quantityContainer);
  row.appendChild(totalContainer);


  return row; 
 }

 getProductById(id) {
   const [temp] = catalogProduct.filter(p => p.id === id);
   return temp;
 }
 
 create(){
  const rows = this.catalogProduct.map(p => this.createRow(this.getProductById(p)));
  rows.forEach(element => this.containerBasket.appendChild(element));
  document.getElementById('totalCart').innerHTML = 'Total Cart: ' + Array.from(document.getElementsByClassName('total')).reduce((result, element) => parseInt(element.innerHTML.match(/\d+/)) + result, 0) + '$';
   
 }
}

const cartProducts = JSON.parse(localStorage.getItem('CardStore'));
const cartPage = new CartPage('.basket-container', cartProducts);