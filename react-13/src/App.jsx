import React from 'react';
import Contacts from './components/Contacts'
import Filters from './components/Filters'
import Topbar from './components/Topbar'

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts />
      </React.Fragment>
    )
  }
}

export default App;
