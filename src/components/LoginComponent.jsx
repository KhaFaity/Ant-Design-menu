import React, { useState } from 'react';
import "./form.scss" 
function LoginComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kiểm tra tên đăng nhập và mật khẩu
    if (username === 'admin' && password === 'admin') {
      // Đăng nhập thành công
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không chính xác');
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
      <h2>Đăng nhập tài khoản của bạn</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Đăng nhập</button>
        {error && <div className="error">{error}</div>}
      </form>
      </div>
    </div>
  );
}

export default LoginComponent;
