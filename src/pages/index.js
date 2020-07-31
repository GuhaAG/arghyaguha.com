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

                    <section id="aboutme">
                        <header className="major">
                            <h2>About</h2>
                        </header>
                        I am Arghya Guha. I write code and sometimes i <a href="https://dev.to/guha">write</a> about writing code.

                        <br></br>
                        <br></br>

                        I'm a full-stack software engineer with over 8 years of experience building enterprise web applications, currently coding backends and APIs for the data science division of one of Japan's top tech giants.

                        <br></br>
                        <br></br>

                        I am available for part-time freelance work. Feel free to reach out to me via <a href="mailto:contact@arghyaguha.com">email</a> or one of my socials.
                    </section>

                    <section id="skills">
                        <header className="major">
                            <h2>Skills & Expertise</h2>
                        </header>
                        <h3>Top Skills</h3>
                        <ul>
                            <li>Java</li>
                            <li>Scala</li>
                            <li>Javascript</li>
                            <li>SQL</li>
                        </ul>
                        <h3>Top Tools & Frameworks</h3>
                        <ul>
                            <li>Spring Boot</li>
                            <li>Node</li>
                            <li>React</li>
                        </ul>
                        <h3>Learning</h3>
                        <ul>
                            <li>Flutter</li>
                        </ul>
                        <p>Here's my <strong><a href="https://drive.google.com/file/d/1QfZ5IwYYpU-Vs7e0-iJ8lHTCZQMpY7BU/view?usp=sharing">resume</a></strong> with more details</p>
                    </section>

                    <section id="experiences">
                        <header className="major">
                            <h2>Work Experience</h2>
                        </header>
                        <b>Nov2019-present</b>: Rakuten Inc., <i> developing APIs connecting GIS dashboards and mobile SDKs to data engineering pipelines.</i><br />
                        <b>Jan2019-Oct2019</b>: Sapiat Pte. Ltd., <i> developing a proprietary fintech dashboard.</i><br />
                        <b>2017-2018</b>: Takeover Holdings Co. Ltd., <i> developing a vacation rental web application for the Japanese market.</i><br />
                        <b>2012-2017</b>: Works Applications Co. Ltd., <i> developing an enterprise e-commerce software package suite.</i>
                    </section>

                    <section id="education">
                        <header className="major">
                            <h2>Education</h2>
                        </header>
                        <p>
                            <b>University of Calcutta, India</b><br />
                           Master of Science in Computer and Information Sciences (M.Sc.)<br />
                            <i>First Class with Honours</i><br />
                           2010-2012
                        </p>
                        <p>
                            <b>University of Calcutta, India</b><br />
                           St. Xavier’s College, Calcutta<br />
                           Bachelor of Science with Computer Science major (B.Sc.)<br />
                            <i>First Class with Honours</i><br />
                           2007-2010
                        </p>
                    </section>

                    <section id="misc">
                        <header className="major">
                            <h2>All work and no play</h2>
                        </header>
                        I enjoy reading, travelling, and grabbing a cold beer or two with friends.<br />
                        I am a gaijin living the Tokyo life, feel free to reach out to just hang.
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
