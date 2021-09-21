/*
 * Challenge:
 *
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 *
 * Documentation: https://jsonplaceholder.typicode.com/
 */

let posts = ``;
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then(response => response.json())
  .then(data => {
    data.slice(0, 5).forEach((obj) => {
      posts += `<li class="post-title">${obj.title}
                      <ul>
                        <li class="post-body">${obj.body}</li>
                      </ul>
                    </li>`;
                    document.getElementById('titles').innerHTML = posts;
    });
  });

  document.getElementById('new-post').addEventListener('submit', function(e) {
    e.preventDefault()
    const postTitle = document.getElementById('post-title').value
    const postBody = document.getElementById('post-body').value
    const postData = {
      title: postTitle,
      body: postBody
    }
    console.log(postData.title, postData.body, postData)

    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((post) => {
        posts =
          `<li class="post-title">${post.title}
            <ul>
              <li class="post-body">${post.body}</li>
            </ul>
          </li>` + posts;

        document.getElementById('titles').innerHTML = posts;
      });
  })
