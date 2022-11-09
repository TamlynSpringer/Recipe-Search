import React, { useEffect, useState } from 'react';
import Search from './Components/Search';

const App = () => {
  
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch('./api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <main>
      <section>
        <Search />
      </section>
      <section>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => (
            <p key={i}>
              {user}
            </p>
          ))
        )}
      </section>
    </main>
  )
}

export default App;