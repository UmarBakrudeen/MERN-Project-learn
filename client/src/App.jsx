import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:8000/comments')
      console.log(response)

      const data = await response.json()
      setComments(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="App">
        <h1>Comments</h1>
        <div className="loading">Loading comments...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="App">
        <h1>Comments</h1>
        <div className="error">Error: {error}</div>
        <button onClick={fetchComments}>Try Again</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Comments ({comments.length})</h1>
      <div className="comments-container">
        {comments.map(comment => (
          <div key={comment._id} className="comment-card">
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-email">
              <strong>Email:</strong> {comment.email}
            </p>
            <p className="comment-body">{comment.body}</p>
            <div className="comment-id">
              <small>ID: {comment._id}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App