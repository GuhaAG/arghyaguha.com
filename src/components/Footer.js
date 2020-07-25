import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.twitter.com/CodingBourbon" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/GuhaAG" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://www.linkedin.com/in/arghya-guha-2a318253/" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>                        
                        <li><a href="mailto:contact@arghyaguha.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>                    
                </div>
            </div>
        )
    }
}

export default Footer
