import React from 'react'
import data from './data.json'

import Card from './components/Card'

const App = () => {
  return (
    <main>
      {data.comments.map((comment) => (
        <Card key={comment.id} 
        user={comment.user} 
        content={comment.content} 
        createdAt={comment.createdAt}
        score={comment.score} 
        />

      ))}
    </main>
  )
}

export default App