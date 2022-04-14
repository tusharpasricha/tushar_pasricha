import { Route} from 'react-router-dom';
import Main from './components/main/main';
import Post from './components/post';
import Suggestions from './components/suggestion';

function App() {
  return (
    <div className="App">
     
      <Route path=''>
      <Main/>
      </Route>
      <Route path="/post">
      <Post/>
      </Route>
      <Route path="/suggestions">
      <Suggestions/>
      </Route>
    </div>
  );
}

export default App;
