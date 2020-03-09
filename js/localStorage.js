const allUsersKey = 'allUsersKey';
if(!localStorage.getItem(allUsersKey)){
  const allUsers =[];
  const allUserJson = JSON.stringify(allUsers);
  localStorage.setItem(allUsersKey,allUserJson);
}

const currentUserKey = 'currentUser';

/* const commentKey = 'commentKey';
if(!localStorage.getItem(commentKey)){
  const commentProduct = [];
  const commentProductJson = JSON.stringify(commentProduct);
  localStorage.setItem(commentKey,commentProductJson);
} */

