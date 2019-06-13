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
                    <h1><strong>Hi, I am Arghya</strong>, a web developer living in Tokyo city.<br />                    
                    Reach out to me for a chat about anything technology or just to hangout with a cold pint of Guinness.<br />
                    Take a look at my  <a href="https://drive.google.com/open?id=1lv-LAU339PrYEccK12BSWaMZTQ4mImSb">resume</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
