import React from 'react';
import Contacts from './components/Contacts'
import Filters from './components/Filters'
import Topbar from './components/Topbar'

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filters: { search: '', orderBy: '' } };
  }

  onFilterChange = filters => {
    this.setState({ filters: filters })
  }

  render() {
    return (
      <div data-testid="app" class="app">
        <Topbar />
        <Filters onChange={this.onFilterChange} />
        <Contacts
          filter={this.state.filters.search}
          orderBy={this.state.filters.orderBy}
        />
      </div>
    )
  }
}

export default App;
