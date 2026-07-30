import './App.css'
import Books from './components/Books'
import { useState } from 'react'

const App = () => {
  const initialBooks = [
   {
      id: 1,
     name: 'It Ends With Us',
      img: 'src/assets/itends.jpeg',
      imgAlt: 'Pink book cover',
      published: '2016',
      genre: 'Romance',
      author: 'Colleen Hoover',
      summary:
        'Lily falls in love with a neurosurgeon while struggling with difficult choices and patterns from her past.',
    },
    {
      id: 2,
      name: 'Reminders Of Him',
      img: 'src/assets/remi.jpeg',
      imgAlt: 'Yellow book cover',
      published: '2022',
      genre: 'Fiction',
      author: 'Colleen Hoover',
      summary:
        'After serving time in prison, Kenna returns to the town where everything went wrong and tries to reconnect with her daughter.',
    },
    {
      id: 3,
      name: 'Ugly Love',
      img: 'src/assets/ugly.jpeg',
      imgAlt: 'Blue book cover',
      published: '2014',
      genre: 'Fiction and Romance',
      author: 'Colleen Hoover',
      summary:
        'Tate and Miles begin a complicated relationship with rules that become harder to follow as their feelings grow.',
    },
  ]

  
  const [books, setBooks] = useState(initialBooks)

  
  const [selectedBook, setSelectedBook] = useState(null)

  
  const [newBook, setNewBook] = useState({
    name: '',
    published: '',
    genre: '',
    author: '',
    summary: '',
    
  })

  const handleShowDetails = (book) => {
    // Clicking the same book again hides its summary.
    if (selectedBook?.id === book.id) {
      setSelectedBook(null)
    } else {
      setSelectedBook(book)
    }
  }

  const handleChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const bookToAdd = {
      ...newBook,
      id: Date.now(),
      
    }

    setBooks([...books, bookToAdd])

    // Clear the form after adding the book.
    setNewBook({
      name: '',
      published: '',
      genre: '',
      author: '',
      summary: '',
      
    })
  }

  return (
    <main className="app">
      {/* Inline styling */}
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Personal Media Library
      </h1>

      <section className="books-container">
        {books.map((book) => (
          <div className="card" key={book.id}>
            <Books
              name={book.name}
              published={book.published}
              img={book.img}
              imgAlt={book.imgAlt}
              genre={book.genre}
            author={book.author}
            />

            <button
              className="summary-button"
              onClick={() => handleShowDetails(book)}
            >
              {selectedBook?.id === book.id
                ? 'Hide Summary'
                : 'Show Summary'}
            </button>

            {selectedBook?.id === book.id && (
              <div className="summary">
                <h4>Summary</h4>
                <p>{book.summary}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="form-section">
        <h2>Add a New Book</h2>

        <form onSubmit={handleSubmit}>
          Book Name:
          <input
            id="name"
            type="text"
            name="name"
            value={newBook.name}
            onChange={handleChange}
            required
          />

          Author:
          <input
            id="author"
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            required
          />

          Published Year:
          <input
            id="published"
            type="number"
            name="published"
            value={newBook.published}
            onChange={handleChange}
            required
          />

          Genre:
          <input
            id="genre"
            type="text"
            name="genre"
            value={newBook.genre}
            onChange={handleChange}
            required
          />

          Summary:
          <textarea
            id="summary"
            name="summary"
            value={newBook.summary}
            onChange={handleChange}
            rows="4"
            required
          />

          <button className="add-button" type="submit">
            Add Book
          </button>
        </form>
      </section>
    </main>
  )
}

export default App

