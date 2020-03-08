
function filter(category){
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
    let filterProduct = catalogProduct.filter(function(catalogProduct){
      return catalogProduct.category == category && catalogProduct.price > from && catalogProduct.price < to;
    });
    document.getElementsByClassName('container-product')[0].innerHTML = '';
    let filterProducts = new AllProducts('.container-product', '.container-counter', filterProduct);
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
  
  let priceFilter = catalogProduct.filter(function(catalogProduct){
    return catalogProduct.price > from && catalogProduct.price < to
  });
  console.log(priceFilter)
}
filterPrice() 



/* let resultFilter = [];
  let result;
  for(let i=0 ; i<catalogProduct.length; i++){
    if(catalogProduct[i].price > from && catalogProduct[i].price < to){
      resultFilter.push(document.getElementsByClassName('item')[i])
    }
  }
  //alert(resultFilter)
  let filterPriceProducts = new AllProducts('.container-product','.container-counter', resultFilter); */