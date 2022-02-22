import PropTypes from 'prop-types';
import {
  FriendsItem,
  FriendsAvatar,
  FriendsName,
  FriendsStatus,
} from '../FriendList_task-3/FriendListItem.styled';

export default function FriendsListItem(props) {
  const { avatar, isOnline, name } = props;
  return (
    <FriendsItem>
      <FriendsStatus bool={isOnline}>{isOnline}</FriendsStatus>
      <FriendsAvatar src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsItem>
  );
}

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
