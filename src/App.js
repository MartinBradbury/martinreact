import styles from './App.module.css'
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
