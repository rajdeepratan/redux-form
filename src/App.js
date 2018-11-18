import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { FormPage1, FormPage2, Result} from 'components';
import './App.css';

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)


class App extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.submit = this.submit.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      page: 1,
      result: null,
    };
  }

  nextPage(fields) {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage(fields) {
    this.setState({ page: this.state.page - 1 });
  }

  submit(vals) {
    this.setState({result: vals});
    this.setState({ page: this.state.page + 1 });
  }

  close(vals) {
    this.setState({ page: 1 });
  }

  render() {
    const { page } = this.state;
    
    return (
      <Provider store={store}>
        <div className="App">
          <div className="circle">
            { page === 1 ? <FontAwesomeIcon icon={faCircle} className="active circlefa" /> : <FontAwesomeIcon icon={faCircle} className="circlefa" /> }
            { page === 2 ? <FontAwesomeIcon icon={faCircle} className="active circlefa" /> : <FontAwesomeIcon icon={faCircle} className="circlefa" /> }
            { page === 3 ? <FontAwesomeIcon icon={faCircle} className="active circlefa" /> : <FontAwesomeIcon icon={faCircle} className="circlefa" /> }
          </div>
          {page === 1 && <FormPage1 onSubmit={this.nextPage} />}
          {page === 2 &&
                  <FormPage2
                    previousPage={this.previousPage}                  
                    onSubmit={this.submit}
                  />}
          {page === 3 && 
                  <Result 
                    close={this.close}
                    result={this.state.result} 
                    />}
        </div>
      </Provider>
    );
  }
}

export default App;
