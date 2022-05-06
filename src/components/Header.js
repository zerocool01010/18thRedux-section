import { useState } from 'react';
import {useSelector, useDispatch, connect} from 'react-redux'
import { authActions } from '../store/indexStore';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch()
  const logged = useSelector(state => state.authRed.logged)

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {logged && <button onClick={logoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
