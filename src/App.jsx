import { Outlet } from 'react-router-dom';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContextCopy2';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Outlet />
    </div>
  );
};

export default App;
