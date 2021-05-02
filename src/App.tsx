import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import { store } from './redux/store';
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
