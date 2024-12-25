import React, { useState, useEffect } from 'react'
import { ProfileCards } from '../compornents'
import { getUsers, likeUser, dislikeUser } from '../services/api'

function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await getUsers()
      setUsers(response.data)
    }
    fetchUsers()
  }, [])

  const handleLike = async userId => {
    await likeUser(userId)
    setUsers(users.filter(user => user.id !== userId))
  }

  const handleDislike = async userId => {
    await dislikeUser(userId)
    setUsers(users.filter(user => user.id !== userId))
  }

  return (
    <div>
      {users.map(user => (
        <ProfileCards
          key={user.id}
          user={user}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ))}
    </div>
  )
}

export default Home
