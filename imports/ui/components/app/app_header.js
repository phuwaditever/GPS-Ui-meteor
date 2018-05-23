import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppHeaderNotificationMenu from './header_menus/app_header_notification_menu';
import AppHeaderUserMenu from './header_menus/app_header_user_menu';

const AppHeader = ({ user, history }) => (
  <header className="main-header">

    <a href="#" className="logo">
      <span className="logo-mini"><b>J</b>S</span>
      <span className="logo-lg"><b>JS</b>iam</span>
    </a>

    <nav className="navbar navbar-static-top">
      {/* <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a> */}

      <ul class="nav navbar-nav">
            <li><a href="/dashboard">Home <span class="sr-only">(current)</span></a></li>
            <li><a href="/tracking">Tracking</a></li>
            <li>
              <Link to='/history'>
              <i className="fa fa-history" /> <span>History </span>
              </Link>
            </li>
            <li><a href="">Route</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Setting <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="/setting">User</a></li>
                <li><a href="#">Permission</a></li>
                <li class="divider"></li>
                <li><a href="#">Truck</a></li>
                <li><a href="#">Group Truck</a></li>
                <li class="divider"></li>
                <li><a href="#">Driver</a></li>
                <li><a href="#">Group Driver</a></li>
                <li class="divider"></li>
                <li><a href="#">Statiion</a></li>
                <li><a href="#">Group Station</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Report <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="">Summary</a></li>
                <li><a href="#">Trips</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Geofences</a></li>
                <li><a href="#">Chart Report</a></li>
                <li><a href="#">Fleet Summary</a></li>
                <li><a href="#">Stops</a></li>
                <li><a href="#">RPM</a></li>
                <li><a href="#">PTO</a></li>
                <li><a href="#">Idling</a></li>
              </ul>
            </li>
          </ul>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <AppHeaderNotificationMenu />
          <AppHeaderUserMenu user={user} history={history} />

        </ul>
      </div>

    </nav>

  </header>
);

AppHeader.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};

export default AppHeader;
