import './About.css'

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number"></span> About Me
                </h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-paragraph">
                            I'm a passionate <span className="highlight">B.Tech AI and Data Science student</span> at
                            Bannari Amman Institute of Technology with a strong foundation in programming and a keen
                            interest in building innovative solutions.
                        </p>
                        <p className="about-paragraph">
                            My journey in tech has been driven by curiosity and a desire to solve real-world problems.
                            I specialize in <span className="highlight">full-stack development</span>, creating intelligent
                            systems with <span className="highlight">AI/ML</span>, and building scalable applications that
                            make a difference.
                        </p>
                        <p className="about-paragraph">
                            With hands-on experience in modern web technologies like <span className="highlight">React.js,
                                Node.js, Next.js</span>, and expertise in <span className="highlight">Python, JavaScript, and C</span>,
                            I'm constantly learning and pushing the boundaries of what's possible.
                        </p>
                        <p className="about-paragraph">
                            Currently seeking opportunities to contribute to innovative projects in
                            <span className="highlight"> AI-driven automation, computer vision, and enterprise applications</span>.
                        </p>
                    </div>
                    <div className="about-highlights">
                        <div className="highlight-card">
                            <h3 className="highlight-title">Focus Areas</h3>
                            <ul className="highlight-list">
                                <li>Full Stack Development</li>
                                <li>AI & Machine Learning</li>
                                <li>Computer Vision</li>
                                <li>Cloud Solutions</li>
                            </ul>
                        </div>
                        <div className="highlight-card">
                            <h3 className="highlight-title">Interests</h3>
                            <ul className="highlight-list">
                                <li>Intelligent Automation</li>
                                <li>Web Technologies</li>
                                <li>Algorithm Design</li>
                                <li>Problem Solving</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
