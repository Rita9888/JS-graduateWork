document.getElementById('search').addEventListener('click', function(){
  document.getElementById('inputSearch').style.display = 'block';
});

document.addEventListener('click', function(event) {
  let isClickInside = document.getElementById('search').contains(event.target);

  if (!isClickInside) {
    document.getElementById('inputSearch').style.display = 'none';
  }
});

const searchKey = 'searchKey';

 document.getElementById('productSearch').addEventListener('keydown', function(e) {
  e.preventDefault();
  e.stopPropagation();
  if(e.key !== 'Enter')
  return;
  const input = document.getElementById('productSearch').value;
  
  sessionStorage.setItem(searchKey, JSON.stringify(input));
  window.location.href = '../html/catalog.html';
 });

    /* console.log(input)
    if(input == 'Sofa' || input == 'sofa'){
      (window.location.href = '../html/catalog.html')
        alert('Страница загружена');
        filterCategory('Sofa');
      
    }else if(input == 'Chair' || input == 'chair'){
      //window.location.href = '../html/catalog.html';
      filterCategory('Chair');
    }else{
      alert('Nothing found');
    }  */


