import React from 'react';

export default class CreateBook extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    let elements = event.target.elements;
    let formData = {
      title: elements.title.value,
      description: elements.description.value,
      email: elements.email.value,
    }
    console.log(formData);

    this.props.onSave(formData);
  }
  render() {
    return (
      <form method="post" onSubmit="{this.handleSubmit}">
        <imput placeholder="title" name="title" />
        <input placeholder="description" name="description" />
        <input placeholder="email" name="email" />
        <button type="submit">
          Save
        </button>
      </form>
    )
  }
}