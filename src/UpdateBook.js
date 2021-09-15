import React from 'react';
import Book from './Book';

export default class UpdateBook extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      title: elements.title.value,
      description: elements.description.value,
      email: elements.email.value,
    }
    console.log(formData);

    let id = this.props.book._id

    this.props.onUpdate(id, formData);

    event.target.reset();
    elements.title.focus();
  }
  render() {

    let { book } = this.props;

    if (!book) return null;

    return (
      <form method="post" onSubmit="{this.handleSubmit}">
        <imput placeholder="title" name="title" defaultvalue={book.title} />
        <input placeholder="description" name="description" defaultvalue ={book.description}/>
        <input placeholder="email" name="email" defaultvalue={book.email} />
        <button type="submit">
          Save
        </button>
      </form>
    )
  }
}