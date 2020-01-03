import React from 'react';
import './App.css';
import Field from './components/Field'
import { connect } from 'react-redux'

function App() {
  return (
    <Field/>
  );
}



export default connect()(App);
