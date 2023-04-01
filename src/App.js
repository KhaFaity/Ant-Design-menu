import {Provider} from 'react-redux';
import "./App.css"
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Login from './components/Login';
import LoginComponent from './components/LoginComponent';
import HomePage from './components/HomePage';
import { Menu } from 'antd';
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
