import ReactDOM from 'react-dom';
// import EventComponent from './events/EventComponent';
// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';

const users = [{ name: 'Blaise', age: 28 }, { name: 'Alex', age: 28 }];

const App = () => {
  return <div>
    {/* <GuestList />/ */}
    <UserSearch />
    {/* <EventComponent/> */}
    {/* <UserSearch users={users} /> */}
  </div>
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
