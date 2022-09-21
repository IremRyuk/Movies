import './App.css';
import Nav from './components/Nav';
import {Route,Routes} from 'react-router-dom'
import News from './pages/News'
import Home from './pages/Home';
import MiniMenu from './components/MiniMenu';
import Up from './components/Up';
import CotnactAdds from './pages/ContactAdds'
import RequestMovie from './pages/RequestMovie';
import SelectedMovie from './pages/SelectedMovie';

function App() {
  return (
    <div className="App">
<Nav />
<MiniMenu />
<Up />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/news' element={<News />} />
  <Route path='/contacts' element={<CotnactAdds />} />
  <Route path='/request' element={<RequestMovie />} />
  <Route path='/selected/:Id' element={<SelectedMovie />} />
</Routes>
    </div>
  );
}
export default App;
