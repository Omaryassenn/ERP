import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/Home.png'
const Header = () => {
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
            <Link to="/login" className='btn primary'>Sign In</Link>
          </div>
        </nav>
      </header>
      <div className='main-image'>
            <img src={image} alt="" />
            <div className='txt'>
                <p>Unlock Your Potential with</p><br/>
                <p className='scnd'>SkillSync Connect</p>
            </div>
        </div>

    </Fragment>
  );
};

export default Header;
