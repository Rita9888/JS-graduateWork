function accordion(){
  let heading = document.getElementsByClassName('accordion');
  for(let i = 0; i<heading.length; i++){
    heading[i].addEventListener('click', function(){
      this.classList.toggle("active");
      //document.getElementsByClassName('content')[i].style.display = 'block';
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
}

accordion()

  