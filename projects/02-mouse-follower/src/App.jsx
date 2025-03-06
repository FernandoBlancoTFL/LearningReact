import { useState } from 'react';
import { FollowOnMouse } from './components/FollowOnMouse';
import './css/App.css'

function App() {
  const [mounted, setMounted] = useState(false);

  return (
    <main>
      {mounted && <FollowOnMouse/>}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowOnMouse Component</button>
    </main>
  )
}

export default App
