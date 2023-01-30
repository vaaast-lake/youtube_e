import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader/SearchHeader';

export default function App() {
  return (
    <div className='h-screen w-screen bg-neutral-700'>
      <SearchHeader />
      <Outlet />
    </div>
  );
}