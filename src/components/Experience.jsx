import './Experience.css'

const Experience = () => {
    const experiences = [
        {
            title: 'Hackathon Participant',
            organization: 'Zoho Creator Hackathon',
            period: '2024',
            type: 'Competition',
            description: 'Participated in Zoho Creator Hackathon, developing innovative solutions using low-code platform.',
            achievements: [
                'Built functional prototype within time constraints',
                'Collaborated with team members effectively',
                'Gained experience with Zoho Creator platform'
            ]
        },
        {
            title: 'Hackathon Participant',
            organization: 'Smart India Hackathon (SIH) 2025',
            period: '2025',
            type: 'Competition',
            description: 'Cleared internal hackathon round for Smart India Hackathon 2025, demonstrating problem-solving skills.',
            achievements: [
                'Successfully cleared internal selection round',
                'Developed innovative solution for real-world problem',
                'Demonstrated technical and presentation skills'
            ]
        }
    ]

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number"></span> Experience & Achievements
                </h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="experience-marker"></div>
                            <div className="experience-content">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-title">{exp.title}</h3>
                                        <div className="experience-organization">{exp.organization}</div>
                                    </div>
                                    <div className="experience-meta">
                                        <span className="experience-period">{exp.period}</span>
                                        <span className="experience-type">{exp.type}</span>
                                    </div>
                                </div>
                                <p className="experience-description">{exp.description}</p>
                                <ul className="experience-achievements">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
