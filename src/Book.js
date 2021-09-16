import React from 'react';
import UpdateBook from './UpdateBook';

export default class Book extends React.Component {
  state = { update: false };

  handleUpdate = async (id, bookInfo) => {
    await this.props.onUpdate(id, bookInfo);

    this.setState({ update: false });
  }

  render() {

    const { book, onDelete } = this.props;

    return (
      <div>
        <button onClick={() => onDelete(book._id)}>&times;</button>
        {this.state.update
          ? (
          <>
            <UpdateBook book={book} onUpdate={this.props.onUpdate}/>
            <button onClick={() => this.setState({ update: false })}>Cancel</button>
          </>
          )
          : (
            <>
          
              {book.title} is {book.description}
              <button onClick={() => this.setState({ update: true })}>Edit</button>
            </>
          )
        }
      </div>
    )
  }
}