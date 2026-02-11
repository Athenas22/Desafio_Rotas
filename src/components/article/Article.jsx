import React from 'react'

const Article = ({ className, h3, texto }) => {
  return (
    <article className={className}>
      <h3>{h3}</h3>
      <p>{texto}</p>
    </article>
  )
}

export default Article
