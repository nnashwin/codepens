import React, {Component} from 'react'

const createItem = (text, author) => {
  return ({text, author});
}

class ExpandableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: '',
      items: [
        createItem("test", "author1"),
        createItem("test2", "author2"),
        createItem("test3", "author3"),
        createItem("test4", "author4"),
        createItem("test5", "author5"),
        createItem("test6", "author5"),
        createItem("test7", "author5"),
        createItem("test8", "author5"),
        createItem("test9", "author5"),
      ]
    };
    this.addItem = this.addItem.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addItem(item) {
    this.setState({
      // create a new array from the item and concat the current state
      // do it this way in order to treat the adding of the item as adding to a queue instead of a stack
      items: [item].concat(this.state.items)
    });
  }

  handleChangeAuthor(e) {
    this.setState({author: e.target.value});
  }

  handleChangeText(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.addItem(createItem(this.state.text, this.state.author));
    this.setState({
      author: '',
      text: ''
    });
  }

  render() {
    const itemList = this.state.items.map((item) => 
      <div className={item.author}>{ item.text} </div>
    );

    const footerStyles = {
      alignItems: 'center',
      backgroundColor: 'gainsboro',
      display: 'flex',
      height: '2rem',
      justifyContent: 'center'
    };

    const headerStyles = {
      alignItems: 'center',
      backgroundColor: 'gainsboro',
      display: 'flex',
      height: '2rem',
      justifyContent: 'center'
    }

    const mainStyles = {
      height: '20vh'
    };

    const textDisplayStyles = {
      display: 'flex',
      flexDirection: 'column-reverse',
      height: '16.5vh',
      overflowY: 'scroll',
      padding: '0 1rem'
    }

    return (
      <div>
        <label>
          Item Text:
          <input type="text" value={this.state.text} onChange={this.handleChangeText} />
        </label>
        <label>
          Item Author:
          <input type="text" value={this.state.author} onChange={this.handleChangeAuthor} />
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />

        <main style={mainStyles}>
          <header style={headerStyles}>The header</header>
          <section id="text-display" style={textDisplayStyles}>
            { itemList }
          </section>
          <div style={footerStyles}>The footer</div>
        </main>
      </div>
    );
  }
}

export default class extends Component {
  render() {
    return <div>
      <h2>Welcome to React components</h2>
      <ExpandableList />
    </div>
  }
}
