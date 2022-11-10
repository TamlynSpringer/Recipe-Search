import React from 'react';
import React, { useEffect, useState } from 'react';

const Board = () => {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch('./api').then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);

  return (
    <div>
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
  </div>
  )
}

export default Board;
