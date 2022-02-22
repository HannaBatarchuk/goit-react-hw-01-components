import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

import { FriensdListContainer } from './FriendList.styled';

export default function FriendsList({ friends }) {
  return (
    <FriensdListContainer>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriensdListContainer>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
