function fetchPosts() {
    // Use the fetch API to get data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Select the container where the posts will be displayed
            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML = ''; // Clear any existing content

            // Loop through the data (array of posts) and create HTML for each post
            data.forEach(post => {
                // Create a div element for each post
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');

                // Populate the post div with title and body
                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;

                // Append each post div to the container
                postContainer.appendChild(postDiv);
            });
        })
        .catch(error => {
            console.log('Error fetching posts:', error);
        });
}
