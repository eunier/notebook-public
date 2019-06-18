// object to mimick a database
const db = {
  posts: [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 }
  ],
  authors: [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    {
      name: 'Chris Coyier',
      twitter: '@chirscoyier',
      bio: 'CSS Trick and CodePen'
    },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' }
  ]
};

const getPostById = id => {
  // create a new promise
  return new Promise((resolve, reject) => {
    // using setTimerout() to mimick a database
    setTimeout(() => {
      // find post
      const post = db.posts.find(post => post.id === id);

      if (post) {
        resolve(post); // set post back
      } else {
        reject(Error('no post found'));
      }
    }, 1000);
  });
};

const getAuthorDetails = post => {
  // create a new promise
  return new Promise((resolve, reject) => {
    // using setTimerout() to mimick a database
    setTimeout(() => {
      // find author
      const authorDetails = db.authors.find(
        person => person.name === post.author
      );

      if (authorDetails) {
        post.author = authorDetails;
        resolve(post);
      } else {
        reject(Error('no author details found'));
      }
    }, 1000);
  });
};

getPostById(2)
  .then(post => {
    console.log(post);
    return Object.assign({}, db, getAuthorDetails(post));
  })
  .then(post => {
    console.log(post);
  })
  .catch(err => {
    console.log(err);
  });

// this will catch the error, id 4 doesn't exit
getPostById(4)
  .then(post => {
    console.log(post);
    return Object.assign({}, db, getAuthorDetails(post));
  })
  .then(post => {
    console.log(post);
  })
  .catch(err => {
    console.log(err);
  });
