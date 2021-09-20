/*
 * Challenge:
 *
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 *
 * Documentation: https://jsonplaceholder.typicode.com/
 */

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
  .then((response) => response.json())
  .then((data) => {
    let posts = ``;
    data.slice(0, 5).forEach((obj) => {
      posts += `<li class="title">${obj.title}
                      <ul>
                        <li class="body">${obj.body}</li>
                      </ul>
                    </li>`;
      setTimeout(function () {
        document.getElementById('titles').innerHTML = posts;
      }, 500);
    });
  });
