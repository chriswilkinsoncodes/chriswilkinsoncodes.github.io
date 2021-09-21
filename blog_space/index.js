//
// @scrimba
// URLs, REST, & BlogSpace
//

let postsArr = []

function renderPosts() {
  let posts = ``;
  postsArr.forEach(post => {
    posts += `<li class="post-title">${post.title}
                <ul>
                  <li class="post-body">${post.body}</li>
                </ul>
              </li>`;
      document.getElementById('titles').innerHTML = posts;
  });
}


fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    postsArr = data.slice(0, 5)
    renderPosts()
  });


document.getElementById('new-post').addEventListener('submit', function(e) {
  e.preventDefault()
  const postTitle = document.getElementById('post-title').value
  const postBody = document.getElementById('post-body').value
  const postData = {
    title: postTitle,
    body: postBody
  }

  fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((post) => {
      postsArr.unshift(post)
      postsArr.pop()
      renderPosts()
    });
})
