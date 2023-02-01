import './App.css';
import MobileLayout from './Card';
import Attribution from './Attribution';
import DesktopLayout from './DesktopLayout';

function App() {

  return (
    <div className="App">
      <MobileLayout />
      <DesktopLayout />
      <Attribution />
    </div>
  )
}

export default App;
