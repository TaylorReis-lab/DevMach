import React from 'react'

export function ProfileCards({ user, onLike, onDislike }) {
  return (
    <div className="profile-card">
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button onClick={() => onLike(user.id)}>Like</button>
      <button onClick={() => onDislike(user.id)}>Dislike</button>
    </div>
  )
}
