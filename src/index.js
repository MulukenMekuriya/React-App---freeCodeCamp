import React from 'react'
import ReactDOM from 'react-dom'
// CSS
import './index.css'

const firstBook = {
  title: 'Will',
  author: 'Will Smith',
  img: 'https://images-na.ssl-images-amazon.com/images/I/91PpDVWjhLL._AC_UL200_SR200,200_.jpg',
}

const secondBook = {
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
}
const BookList = () => {
  // return React.createElement('h1', {}, 'hellow world')
  return (
    <section className='bookList'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          soluta reiciendis aliquid atque error? Id sunt consequuntur molestias
          exercitationem placeat consectetur animi autem sint tenetur cum ut
          quo, facilis recusandae?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
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
      <Book />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
