import './App.css';
import Stay from './components/Stay'

function App() {
  return (
    <div className="App">
    
      <Stay city="Turku" country="Finland" superhost="true"
        title="Nice apartment in center of Helsinski"
        rating="4.2" maxGuests="5" type="Entire apartment"
        beds={3}
        photo="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
      />
    </div>
  );
}

export default App;
