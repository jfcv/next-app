import React from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
  }

interface Props {
  sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
  /**
   * this means is gonna refresh data from the backend every 10 seconds
   * this just works for fetch()
   * but DOESN'T WORK for axios()
   */
  const res = await fetch('https://jsonplaceholder.typicode.com/xusers', {
      next: {
        revalidate: 10
      }
    })
  const users: User[] = await res.json();

  const sortedUsers: User[] = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name);

  return (
    <table className='table table-border'>

        <thead>
          <tr>
            <th>
              <Link href='/users?sortOrder=name'>Name</Link>
            </th>
            
            <th>
              <Link href='/users?sortOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers.map(user => 
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
            )}
        </tbody>

      </table>
  )
}

export default UserTable