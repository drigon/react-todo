import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {

  const params = useParams();

  return (
    <div>
      <div className="container">
        THIS IS BLOG POST {params.id}
      </div>
    </div>
  )
}
