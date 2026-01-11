import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'JavaScript', level: 85 },
                { name: 'C', level: 80 },
                { name: 'TypeScript', level: 75 },
                { name: 'Java', level: 70 }
            ]
        },
        {
            title: 'Frontend Development',
            skills: [
                { name: 'React.js', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'Tailwind CSS', level: 85 },
                { name: 'JavaScript ES6+', level: 90 }
            ]
        },
        {
            title: 'Backend Development',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express.js', level: 80 },
                { name: 'MongoDB', level: 80 },
                { name: 'MySQL', level: 75 },
                { name: 'REST APIs', level: 85 }
            ]
        },
        {
            title: 'AI & Machine Learning',
            skills: [
                { name: 'Machine Learning', level: 80 },
                { name: 'Computer Vision', level: 75 },
                { name: 'OpenCV', level: 75 },
                { name: 'TensorFlow', level: 70 },
                { name: 'Data Analysis', level: 80 }
            ]
        },
        {
            title: 'Tools & Technologies',
            skills: [
                { name: 'Git & GitHub', level: 90 },
                { name: 'VS Code', level: 95 },
                { name: 'Postman', level: 85 },
                { name: 'Docker', level: 65 },
                { name: 'Linux', level: 75 }
            ]
        },
        {
            title: 'Other Skills',
            skills: [
                { name: 'Problem Solving', level: 90 },
                { name: 'Algorithm Design', level: 85 },
                { name: 'Team Collaboration', level: 85 },
                { name: 'Agile Methodology', level: 75 },
                { name: 'Technical Writing', level: 80 }
            ]
        }
    ]

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number"></span> Skills & Technologies
                </h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-category"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="category-header">
                                <h3 className="category-title">{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
