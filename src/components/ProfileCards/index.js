import React from "react";
import {Card, ProfileImage, ProfileInfo, Name, Bio, Actions, Button} from './styles'

const ProfileCard = ({ user }) => {
  return (
    <Card>
      <ProfileImage src={user.image} alt={user.name} />
      <ProfileInfo>
        <Name>{user.name}, {user.age}</Name>
        <Bio>{user.bio}</Bio>
      </ProfileInfo>
      <Actions>
        <Button type="dislike">❌</Button>
        <Button type="like">❤️</Button>
        <Button type="superlike">⚡</Button>
      </Actions>
    </Card>
  );
};


export default ProfileCard;
