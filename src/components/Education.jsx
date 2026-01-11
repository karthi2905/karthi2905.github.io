import './Education.css'

const Education = () => {
    const education = [
        {
            degree: 'B.Tech in Artificial Intelligence and Data Science',
            institution: 'Bannari Amman Institute of Technology',
            location: 'Sathyamangalam, Tamil Nadu',
            period: '2023 - 2027',
            grade: 'CGPA: 8.25/10 (up to 4th semester)',
            highlights: [
                'Specialized in AI, Machine Learning, and Data Science',
                'Strong foundation in algorithms and data structures',
                'Hands-on experience with real-world projects',
                'Active participant in hackathons and coding competitions'
            ]
        },
        {
            degree: 'Higher Secondary Education (12th)',
            institution: 'Chellamal Matric Higher Secondary School',
            location: 'Erode, Tamil Nadu',
            period: '2022 - 2023',
            grade: 'Percentage: 92%',
            highlights: [
                'Focused on Mathematics and Computer Science',
                'Excellent academic performance',
                'Foundation in programming and logical thinking'
            ]
        }
    ]

    return (
        <section id="education" className="section education">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number"></span> Education
                </h2>
                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="education-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="education-marker">
                                <div className="marker-dot"></div>
                            </div>
                            <div className="education-content">
                                <div className="education-header">
                                    <div>
                                        <h3 className="education-degree">{edu.degree}</h3>
                                        <div className="education-institution">{edu.institution}</div>
                                        <div className="education-location">{edu.location}</div>
                                    </div>
                                    <div className="education-meta">
                                        <div className="education-period">{edu.period}</div>
                                        <div className="education-grade">{edu.grade}</div>
                                    </div>
                                </div>
                                <ul className="education-highlights">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
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

export default Education
