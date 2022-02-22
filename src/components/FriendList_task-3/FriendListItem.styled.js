import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  bacground-color: white;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 8px;
  paddind: 8px 16px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const FriendsAvatar = styled.img`
  margin: 0 15px;
`;

export const FriendsName = styled.p`
  font-weight: 400;
  font-size: 18px;
`;

export const FriendsStatus = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 5px;
  background-color: ${props => {
    switch (props.bool) {
      case true:
        return 'yellowgreen';
      case false:
        return 'red';
      default:
        return 'black';
    }
  }};
`;
