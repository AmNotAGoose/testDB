import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <nav>
        <ul>
          <li>
            <a href="/">
              <img className="logo react" alt="testDB" />
            </a>
          </li>
          <li><a href="/search">Search</a></li>
          <li><a href="/register">Sign up / log in</a></li>
        </ul>
      </nav>
      

    </body>
  )
}

export default App
