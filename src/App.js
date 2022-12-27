import React, { Component } from 'react';

import ListComponent from './ListComponent';

import initialItems from './mock.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: initialItems,
      moreItemsLoading: false,
      hasNextPage: true
    };
    
    this.loadMore = this.loadMore.bind(this);
  }
  
  loadMore() {
    this.setState({ moreItemsLoading: true }, () => {
    
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(res => res.json())
      .then(({ message: newItems }) => this.setState({ 
        moreItemsLoading: false,
        items: [...this.state.items, ...newItems] 
      }));
    });
  }

  render() {
    const { items, moreItemsLoading, hasNextPage } = this.state;

    return (
      <>
      <div className="title">
          <h1>virtualized list component</h1>
        </div>
        <ListComponent 
          items={items} 
          moreItemsLoading={moreItemsLoading} 
          loadMore={this.loadMore}
          hasNextPage={hasNextPage}
        />
        
      </>
    );
  }
}

export default App;
