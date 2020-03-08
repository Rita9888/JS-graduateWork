

let btn = document.getElementById('registrBtn');
btn.addEventListener('click',function (){
  let formElement = document.querySelector('form');
        let formData = toTree(serializeForm(formElement));
        const allUsers = JSON.parse(localStorage.getItem(allUsersKey));
        allUsers.push(formData);
        localStorage.setItem(allUsersKey,JSON.stringify(allUsers));
        setTimeout(function(){
          alert('Welcome!');
        }, 1 * 1000); 
        setTimeout(function(){
          window.location.href = '../main.html';
        }, 3 * 1000); 
});

function serializeForm(form) {
  return Array.apply(null, form).reduce(function(fields, field) {
      fields[field.name] = field.value;
      
      return fields;
  }, {});
  
}

function toTree(object) {
  var root = {};
  for (var key in object) {
      var subtree = root;
      var path = key.split('.');
      for (var i = 0; i < path.length - 1; i++) {
          subtree = subtree[path[i]] || (subtree[path[i]] = {});
      }
      subtree[path[i]] = object[key];
  }
  return root;
}