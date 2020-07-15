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
                        Arghya Guha is a software engineer building backends and APIs for a living for the last 8 years, currently based in Japan.<br/>
                        He was born and raised in India where he went to college and earned a Bachelors and a Masters degree majoring in Computer Science.
                    </section>

                    <section id="experiences">
                        <header className="major">
                            <h2>Work Experience</h2>
                        </header>
                        <b>2012-2017</b>: Works Applications Co. Ltd., <i>developing an e-commerce software package suite</i><br/>
                        <b>2017-2018</b>: Takeover Holdings Co. Ltd., <i>developing a new web service providing vacation rentals</i><br/>
                        <b>2019-Oct2019</b>: Sapiat Pte. Ltd., <i>developing a proprietary fintech dashboard</i><br/>
                        <b>Nov2019-present</b>: Rakuten Inc., <i>developing APIs connecting GIS dashboards and mobile SDKs to data engineering pipelines</i>
                    </section>

                    <section id="education">
                        <header className="major">
                            <h2>Education</h2>
                        </header>
                        <p>
                           <b>University of Calcutta, India</b><br/>
                           Master of Science in Computer and Information Sciences (M.Sc.)<br/>
                           <i>First Class with Honours</i><br/>
                           2010-2012
                        </p>
                        <p>
                        <b>University of Calcutta, India</b><br/>
                           St. Xavier’s College, Calcutta<br/>
                           Bachelor of Science with Computer Science major (B.Sc.)<br/>
                           <i>First Class with Honours</i><br/>
                           2007-2010
                        </p>
                    </section>

                    <section id="skills">                        
                        <header className="major">
                            <h2>Skills & Expertise</h2>
                        </header>
                        <img src={skills} alt="" />
                        <p>Here's my <a href="https://drive.google.com/file/d/1QfZ5IwYYpU-Vs7e0-iJ8lHTCZQMpY7BU/view?usp=sharing">resume</a> for more details</p>
                    </section>

                    <section id="misc">                        
                        <header className="major">
                            <h2>All work and no play</h2>
                        </header>
                        Arghya enjoys reading, travelling, and grabbing a cold beer or two with friends.<br/>
                        In his free time you can also find him adventuring in Tamriel, or battling evil in Eorzea.
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
