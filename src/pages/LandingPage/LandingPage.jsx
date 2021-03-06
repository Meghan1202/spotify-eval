import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = ({ getSongs }) => (
  <div className="Landing-Body">
    <div className="Landing-Page">
      <p>
        :(
        {' '}
        <br />
        Seems a bit empty in here...
        <br />
      </p>
      <Link to="/allSongs" className="Sync-Buton" onClick={() => { getSongs(); }}>Sync</Link>
    </div>
  </div>
);
LandingPage.propTypes = {
  getSongs: PropTypes.func.isRequired,
};

export default LandingPage;
