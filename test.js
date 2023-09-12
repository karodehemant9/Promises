
let lastActivityTime;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Post: ${post}`);
      resolve(post);
    }, 1000);
  });
}

function updateUserLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date().getTime();
      console.log(`Updated lastActivityTime: ${lastActivityTime}`);
      resolve(lastActivityTime);
    }, 1000); 
  });
}

function deletePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Post: ${post}`);
      resolve(post);
    }, 1000); 
  });
}



  promise1 = createPost('Post 1');
  promise2 = updateUserLastActivityTime();

  Promise.all([promise1,promise2])
  .then((post,currentTime) => {
  console.log(post);
  console.log(currentTime);
  return deletePost('Post 3');
 })
.then(() => {
    // Post deletion completed; log the new set of posts
    console.log('New set of posts:');
    return Promise.all([
      createPost('Post 4'),
      createPost('Post 5'),
      createPost('Post 6'),
    ]);
  })
  .catch((error) => {
    console.error('Error:', error);
  });