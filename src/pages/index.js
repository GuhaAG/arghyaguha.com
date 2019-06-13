import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {            
        };        
    }    

    render() {
        const siteTitle = "arghyaguha.com"
        const siteDescription = "My personal site"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hello there<br />
                            This is my personal webpage. It is still a work in progress.</h2>
                        </header>
                        <p>Please come back later when the site is ready.</p>                        
                    </section>
                    
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
