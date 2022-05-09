import Profile from '../components/Profile_task-1/Profile';
import user from '../components/data/user.json';

import Statistics from '../components/Statistics_task-2/Statistics';
import data from '../components/data/data.json';

import FriendsList from '../components/FriendList_task-3/FriendList';
import friends from '../components/data/friends.json';

import TransactionHistory from '../components/TransactionHistory_task-4/TransactionHistory';
import transactions from '../components/data/transactions.json';

import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

// Початкові налаштування js при створенні проекту
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
