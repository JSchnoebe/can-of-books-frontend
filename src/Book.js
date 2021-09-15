import React from 'react';

export default class Book extends React.Component {
  render() {

    const { book, onDelete } = this.props;

    return (
      <p>
        <button onClick={() => onDelete(book._id)}>&times;</button>
        {book.title} is {book.description}
      </p>
    )
  }
}