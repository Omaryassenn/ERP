import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <header>
        <nav>
          <Link to='/' className='logo'>
            Skill<span className='sub-logo'>-Sync</span>
          </Link>
          <div className='btns'>
            <button className='basic btn'>Contact us</button>
            <button className='basic btn'>About</button>
            <Link to='/login' className='primary btn'>Sign in</Link>
          </div>
        </nav>
      </header>

    </Fragment>
  );
};

export default Nav;
