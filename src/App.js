import './App.css';
import Feed from './components/feeds/Feed';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Widgets from './components/widget/Widgets';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue()

  return (
    //BEM naming convention
    <div className="app">
      {!user ?(
        <Login/>
        ):(
          <>
      <Header/>

      <div className="app__body">
        <Sidebar/>
        <Feed />
        <Widgets />
      </div>
      </>
        )
      }
    </div>
  );
}

export default App;
