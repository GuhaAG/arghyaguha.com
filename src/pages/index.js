import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import skills from '../assets/images/skills-wordcloud.png';

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

                    <section id="aboutme">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        I am Arghya Guha, software developer by profession working for a fintech startup based out of Tokyo, Japan.<br/>
                        I was born and raised in India where I went to college to earn a Bachelors as well as a Masters degree majoring in Computer Science, before moving to Singapore for work for three years and then finally to Tokyo where I currently reside.
                    </section>

                    <section id="experiences">
                        <header className="major">
                            <h2>Experience</h2>
                        </header>
                        <b>2012-2017</b>: Works Applications Co. Ltd., <i>developing an e-commerce software package suite</i><br/>
                        <b>2017-2018</b>: Takeover Holdings Co. Ltd., <i>developing a web service providing vacation rentals</i><br/>
                        <b>2019-current</b>: Sapiat Pte. Ltd., <i>developing fintech software</i>
                    </section>

                    <section id="education">
                        <header className="major">
                            <h2>Education</h2>
                        </header>
                        <p>
                           <b>University of Calcutta, India</b><br/>
                           Master of Science in Computer and Information Sciences (M.Sc.)<br/>
                           <i>First Class with Honours</i><br/>
                           2011-2012
                        </p>
                        <p>
                        <b>University of Calcutta, India</b><br/>
                           St. Xavier’s College, Calcutta<br/>
                           Bachelor of Science with Computer Science major (B.Sc.)<br/>
                           <i>First Class with Honours</i><br/>
                           2007-2010
                        </p>
                    </section>

                    <section id="Tech Stack">                        
                        <header className="major">
                            <h2>Skills & Expertise</h2>
                        </header>
                        <img src={skills} alt="" />
                        <p>Here's my <a href="https://drive.google.com/open?id=0B2pKk-odH8VjTkhqU18wYjlucGtQSk44TmF5eGxqVFBoSDBj">resume</a> for details</p>
                    </section>

                    <section id="Tech Stack">                        
                        <header className="major">
                            <h2>All work and no play</h2>
                        </header>
                        I enjoy reading, travelling, and grabbing a cold beer or two with friends.<br/>
                        In my free time you can also find me adventuring in Tamriel, on the PC NA server of ESO @L0rd_Sn0w
                    </section>


                </div>

            </Layout>
        )
    }
}

export default HomeIndex
