import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                </div>
                <div className="inner">
                    <h1><strong>Hi, I am Arghya</strong>, a software engineer living in Tokyo, JP.
                    <br></br>
                    Reach out to me for a chat about anything technology or just to hang out with a cold pint of Guinness.
                    <br></br>
                    Take a look at my <strong><a href="https://drive.google.com/file/d/1QfZ5IwYYpU-Vs7e0-iJ8lHTCZQMpY7BU/view?usp=sharing">resume</a></strong> or connect on one of my socials down below.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
