
function filterCategory(category){

    let filterProduct = catalogProduct.filter(function(catalogProduct){
      return catalogProduct.category == category;
    });
    document.getElementsByClassName('container-product')[0].innerHTML = '';
    let filterProducts = new AllProducts('.container-product', '.container-counter', filterProduct);
      console.log(filterProduct)
      return filterProducts;

}


function All(){
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  let priceFilter = catalogProduct.filter(function(catalogProduct){
    return catalogProduct.price > from && catalogProduct.price < to
  });
    document.getElementsByClassName('container-product')[0].innerHTML = '';
    let allProducts = new AllProducts('.container-product', '.container-counter', priceFilter);
}



function filterPrice(){
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;

  const newArrayProducts = filterCategory(category);
  console.log(newArrayProducts)

  let priceFilter = newArrayProducts.filter(function(newArrayProducts){
    return newArrayProducts.price > from && newArrayProducts.price < to;
  }); 
  console.log(priceFilter)

  document.getElementsByClassName('container-product')[0].innerHTML = '';
  let filterProducts = new AllProducts('.container-product', '.container-counter', priceFilter);
}



