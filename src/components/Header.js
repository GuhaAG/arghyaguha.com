import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Hi, I am Arghya</strong>, coder, gamer, writer, thinker and world traveler.<br />
                    Home is wherever i am but these days Tokyo city, in the land of the rising sun, is where i hang my hat.<br />
                    Reach out to me for a chat about anything technology or just to hangout with a cold pint of Guinness.<br />
                    Take a look at my  <a href="https://drive.google.com/open?id=1lv-LAU339PrYEccK12BSWaMZTQ4mImSb">resume</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
