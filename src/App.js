import { Outlet } from 'react-router-dom';
import SearchHeader from './SearchHeader/SearchHeader';

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
