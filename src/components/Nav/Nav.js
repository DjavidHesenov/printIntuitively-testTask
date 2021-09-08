import React from 'react'
import './Nav.css'

const Nav = () => {

    return (
        <nav className="fixed-top nav-top">
            <div className="inner-box">
                <div className="inner-box__logo">Print Intuitively</div>
                <div className="inner-box__links">
                    <div className="right-box">
                        <div className="right-box__links">
                            <a>How it works</a>
                            <a>Company</a>
                            <a>Prices</a>
                        </div>
                        <div className="right-box__contact">
                            <button>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav