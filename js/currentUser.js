const curUser = JSON.parse(localStorage.getItem(currentUserKey));

if(curUser != undefined){
  document.getElementById('dropdown').style.display = 'none';
  const userContainer = document.getElementById('userAccount');;
  userContainer.style.display = 'flex';

  const user = document.createElement('p');
  user.innerHTML = curUser.firsname;
  userContainer.appendChild(user);
}

//////////////Mobile/////////////////////
if(curUser != undefined){
  document.getElementById('dropdownMobile').style.display = 'none';
  const userContainer = document.getElementById('userAccountMobile');;
  userContainer.style.display = 'flex';

  const user = document.createElement('p');
  user.innerHTML = curUser.firsname;
  userContainer.appendChild(user);
}