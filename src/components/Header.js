import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="wrapper">
        <div className="navbar">
        <Link to="/" className="navbar-item">luck.us</Link>
          <Link to="/" className="navbar-item">
            new
          </Link>
          <div className="navbar"></div>
          <Link to="/top" className="navbar-item">
            top
          </Link>
          <div className="navbar"></div>
          <Link to="/search" className="navbar-item">
            search
          </Link>
          {authToken && (
            <div className="navbar">
              <div className="navbar"></div>
              <Link to="/create" className="navbar-item">
                submit
              </Link>
            </div>
          )}
        
        <div className="navbar-end">
          {authToken ? (
            <div
              className="navbar-item dim"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
              <Link to="/login" className="navbar-item dim">
                login
            </Link>
            )}
            </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)