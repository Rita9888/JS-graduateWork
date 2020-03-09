const commentContainer = document.getElementById('productComments');
const button = document.getElementById('btnComment');
const input = document.getElementById('inputComment');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text, id) => {
  const comment = document.createElement('div')
  comment.className = 'newComment';
  comment.innerHTML = text;
  comment.id = id;
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteComment';
  deleteBtn.innerHTML = 'Delete';
  console.log(comment.id)
  deleteBtn.addEventListener('click',() => {
    const commentStorage = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items', JSON.stringify(commentStorage.filter(comment => comment.id !== id )));
      deleteBtn.remove();
      comment.remove();
    })
  
  commentContainer.appendChild(comment)
  commentContainer.appendChild(deleteBtn)
}

button.addEventListener('click', function(e) {
  e.preventDefault()
  const text = input.value;
  const comments = JSON.parse(localStorage.getItem('items'));
  const productId = currentProduct.catalogProduct.id;

  const comment = createComment(text, productId, comments);
  comments.push(comment);
  localStorage.setItem('items', JSON.stringify(comments));
  liMaker(text, comment.id);
})

data.filter(comments => comments.productId === currentProduct.catalogProduct.id).forEach(comment => {
  liMaker(comment.text, comment.id);
});


function createComment(text, productId, comments){
    let id;
    if(comments.length === 0){
      id = 0;
    }else{
      id = comments.reduce((max, comment) => comment.id > max ? comment.id : max, 0)+1; 
      }
     return {
       id,
       text,
       productId
     }; 
}

