import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ItemList from 'components/ItemList';
import ItemDetail from 'components/ItemDetail';
import Header from 'components/Header';
import TopPage from 'components/TopPage';
import ConfirmationPage from 'components/ConfirmationPage';

import { loadItems } from 'actions';

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route exact path="/success" component={ConfirmationPage} />
            <Route exact path="/items" component={ItemList} />
            <Route path="/item/:itemId" component={ItemDetail} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = {
  handleLoad: loadItems,
};
const App = connect(null, mapDispatchToProps)(AppComponent);
export default App;
