import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './components/Routes';
import { firebaseApp } from './firebase';

// Importing Componenting Component

firebaseApp.auth().onAuthStateChanged((user) => {
  if (user) {
    browserHistory.push('/dashboard');
  } else {
    // browserHistory.replace('/signin');
  }
});

ReactDOM.render(Routes(), document.getElementById('root'));
