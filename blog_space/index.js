/**
 * Challenge:
 * 
 * Send a request to the JSON Placeholder API using `fetch`
 * URL: https://apis.scrimba.com/jsonplaceholder/posts
 * 
 * Documentation: https://jsonplaceholder.typicode.com/
 * 
 * Log the response data to the console
 */

let posts = ``

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => 
        data.slice(0,5).forEach((obj) => {
          posts += `<li>${obj.title}
                      <ul>
                        <li>${obj.body}</li>
                      </ul>
                    </li>`
        }))
        
setTimeout(function(){(document.getElementById('titles').innerHTML = posts)}, 500)
