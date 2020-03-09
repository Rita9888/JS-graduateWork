document.getElementById('search').addEventListener('click', function(){
  document.getElementById('inputSearch').style.display = 'block';
});

document.addEventListener('click', function(event) {
  let isClickInside = document.getElementById('search').contains(event.target);

  if (!isClickInside) {
    document.getElementById('inputSearch').style.display = 'none';
  }
});

document.getElementById('productSearch').addEventListener('change', function(e) {
  e.preventDefault()
  const input = document.getElementById('productSearch').value;
  console.log(input)
  if(input == 'Sofa' || input == 'sofa'){
    (window.location.href = '../html/catalog.html').addEventListener('load',function() {
      alert('Страница загружена');
      filterCategory('Sofa');
    }) 
  }else if(input == 'Chair' || input == 'chair'){
    //window.location.href = '../html/catalog.html';
    filterCategory('Chair');
  }else{
    alert('Nothing found');
  } 
})

