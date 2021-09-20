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
        data.forEach((obj) => {
          posts += `<li>${obj.title}, ${obj.userId}</li>`
        }))
        
setTimeout(function(){(document.getElementById('titles').innerHTML = posts)}, 500)
