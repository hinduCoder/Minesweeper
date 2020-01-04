import React from 'react';
import './App.css';
import Field from './components/Field';
import Stats from './components/Stats';
import { connect } from 'react-redux';

function App() {
  return (
    <div>
      <Field/>
      <Stats/>
    </div>
  );
}



export default connect()(App);
