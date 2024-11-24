import React, { useState, useEffect } from "react";

function App() {
  // State for storing posts and error
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posts
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch posts. Please try again later.");
        }

        const data = await response.json();
        setPosts(data); // Save posts in state
        setError(null); // Reset error state
      } catch (err) {
        setError(err.message); // Save error message in state
        setPosts([]); // Clear posts in case of error
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p> // Display error message
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
