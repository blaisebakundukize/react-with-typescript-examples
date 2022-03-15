import { useState, useRef, useEffect } from "react";

const users = [{ name: 'Blaise', age: 28 }, { name: 'Alex', age: 28 }];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string, age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);
    setUser(foundUser);
  }

  return <div>
    <h3>User Search</h3>
    <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
    <button onClick={onClick}>Find User</button>
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>
};

export default UserSearch;
