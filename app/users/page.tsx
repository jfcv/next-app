import React from 'react'

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  /**
   * this means is gonna fresh data from the backend every 10 seconds
   * this just works for fetch()
   * but DOESN'T WORK for axios()
   */
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: {
      revalidate: 10
    }
  })
  const users: User[] = await res.json()

  return (
    <>
      <h1>Users</h1>

      {/* this is treat as static data */}
      <p style={{fontWeight: 'bold'}}>{new Date().toLocaleTimeString()}</p>

      <ul>
        {users.map(user => 
          <li key={user.id}>{user.name}</li>
          )}
      </ul>
    </>
  )
}

export default UsersPage