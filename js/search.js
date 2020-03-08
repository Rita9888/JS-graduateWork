document.getElementById('search').addEventListener('click', function(){
  document.getElementById('inputSearch').style.display = 'block';
});

document.addEventListener('click', function(event) {
  let isClickInside = document.getElementById('search').contains(event.target);

  if (!isClickInside) {
    document.getElementById('inputSearch').style.display = 'none';
  }
});

