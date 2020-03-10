let currentCategory = 'All';
function filter(){
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  let filterProducts = catalogProduct.filter((p) => p.price > from && p.price < to);
  document.getElementsByClassName('container-product')[0].innerHTML = '';
  if(currentCategory !== 'All'){
    filterProducts = filterProducts.filter(p => p.category.toUpperCase() === currentCategory.toUpperCase());
  }
  new AllProducts('.container-product', '.container-counter', filterProducts);
}

function filterCategory(category){
  currentCategory = category;
  filter();
}


if(sessionStorage.getItem(searchKey)){
  const searchProduct = JSON.parse(sessionStorage.getItem(searchKey));
  filterCategory(searchProduct);
  sessionStorage.clear(searchKey);
}



