import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  padding: 20px;
`;

export const Name = styled.h2`
  font-size: 22px;
  margin: 0;
  color: #333;
`;

export const Bio = styled.p`
  font-size: 16px;
  color: #777;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  ${(props) => props.type === 'dislike' && `
    background: #ff4d4d;
    color: white;
  `}

  ${(props) => props.type === 'like' && `
    background: #4caf50;
    color: white;
  `}

  ${(props) => props.type === 'superlike' && `
    background: #1e90ff;
    color: white;
  `}
`;