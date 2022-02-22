import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsLable,
  UserStatsQuantity,
} from './Profile.styled';

export default function Profile(props) {
  const {
    username,
    avatar,
    tag,
    location,
    stats: { followers = 0, views = 0, likes = 0 },
  } = props;
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <UserStats>
        <li>
          <UserStatsLable>Followers</UserStatsLable>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLable>Views</UserStatsLable>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLable>Likes</UserStatsLable>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </li>
      </UserStats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

// ReactDOM.render(
//   <Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
//   />,
//   document.querySelector('#root'),
// );

// не компонент, не можна перевикористати, проте працює - як приклад))
// const Profile = (
//   <div class="profile">
//   <div class="description">
//     <img src={user.avatar} alt={user.username} class="avatar"/>
//     <p class="name">{user.username}</p>
//     <p class="tag">@{user.tag}</p>
//     <p class="location">{user.location}</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">{user.stats.followers}</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">{user.stats.views}</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">{user.stats.likes}</span>
//     </li>
//   </ul>
// </div>
// );

// ReactDOM.render(Profile, document.querySelector('#root'));
