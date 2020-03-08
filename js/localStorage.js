const allUsersKey = 'allUsersKey';
if(!localStorage.getItem(allUsersKey)){
  const allUsers =[];
  const allUserJson = JSON.stringify(allUsers);
  localStorage.setItem(allUsersKey,allUserJson);
}

const currentUserKey = 'currentUser';

const cartKey = 'cartKey';
if(!localStorage.getItem(cartKey)){
  const productCart = [];
  const productCartJson = JSON.stringify(productCart);
  localStorage.setItem(cartKey,productCartJson);
}