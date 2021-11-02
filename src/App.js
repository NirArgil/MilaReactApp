import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import BlogPage from './components/pages/BlogPage';

function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/blogarticlepage" component={BlogPage} />
      </Switch>
    </Router>

  </>
  );
}

export default App;
