import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const BookList = () => {
  // return React.createElement('h1', {}, 'hellow world')
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/91PpDVWjhLL._AC_UL200_SR200,200_.jpg'
      alt=''
    />
  )
}

const Title = () => {
  return <h1>Will</h1>
}

const Author = () => {
  return <h1>Will Smith</h1>
}

ReactDOM.render(<BookList />, document.getElementById('root'))
