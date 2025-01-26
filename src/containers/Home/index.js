import React, { useState, useEffect } from 'react'
import ProfileCard from '../../components/ProfileCards'
import api from '../../services/api'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await api.getAllUsers()
        setUsers(users)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}
    >
      {users.length > 0 ? (
        users.map(user => <ProfileCard key={user.id} user={user} />)
      ) : (
        <p>Carregando usuários...</p>
      )}
    </div>
  )
}

export default Home
