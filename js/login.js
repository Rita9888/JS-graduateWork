document.getElementById('loginBtn').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const allUsers = JSON.parse(localStorage.getItem(allUsersKey));

  const user = allUsers.filter(u => u.email === email && u.password === password);
  if(user.length === 1){
    const [currentUser] = user;
    localStorage.setItem(currentUserKey, JSON.stringify(currentUser));
    alert("hello")
    window.location.href = '../main.html';
  }else{alert('bye')}
  
})
