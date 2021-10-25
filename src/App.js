import Header from './components/Header';
import { PlayListsProvider } from './context/PlayListsContext';
import Playlists from './components/Playlists';
import style from './styles/index.css'

function App() {
	return (
      <PlayListsProvider>
        <Header />
        <Playlists />
      </PlayListsProvider>
  );
}

export default App;
