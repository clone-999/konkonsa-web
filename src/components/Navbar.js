import React from 'react';

function Navbar() {
  return (
    <nav className="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src="/imgs/logo.png" alt="Konkosa Logo" />
               <strong style={{fontSize: 28}}>KONKONSA</strong>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar