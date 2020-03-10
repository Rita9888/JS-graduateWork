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

///////////////Mobile///////////////
document.getElementById('searchMobile').addEventListener('click', function(){
  document.getElementById('inputSearchMobile').style.display = 'block';
});


document.addEventListener('click', function(event) {
  let isClickInside = document.getElementById('searchMobile').contains(event.target);

  if (!isClickInside) {
    document.getElementById('inputSearchMobile').style.display = 'none';
  }
});

document.getElementById('productSearchMobile').addEventListener('keydown', function(e) {
  e.preventDefault();
  e.stopPropagation();
  if(e.key !== 'Enter')
  return;
  const input = document.getElementById('productSearchMobile').value;
  
  sessionStorage.setItem(searchKey, JSON.stringify(input));
  window.location.href = '../html/catalog.html';
 });