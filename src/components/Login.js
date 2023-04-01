import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../features/user/userSlice';

export default function Login() {
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    // Do something to validate username and password
    dispatch(
      login({
        username,
        password,
      }),
    );
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameRef} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
