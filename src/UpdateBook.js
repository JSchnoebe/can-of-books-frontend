import React from 'react';


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
      <form method="post" onSubmit={this.handleSubmit}>
        <input placeholder="title" name="title" defaultValue={book.title} />
        <input placeholder="description" name="description" defaultValue ={book.description}/>
        <input placeholder="email" name="email" defaultValue={book.email} />
        <button type="submit">
          Save
        </button>
      </form>
    )
  }
}