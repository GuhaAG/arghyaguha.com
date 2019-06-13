import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.facebook.com/arghyaG" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="https://github.com/GuhaAG" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.instagram.com/thetylerinme/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="mailto:guha.agt@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>                    
                </div>
            </div>
        )
    }
}

export default Footer
