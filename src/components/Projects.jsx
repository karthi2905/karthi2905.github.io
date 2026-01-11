import { useState } from 'react'
import './Projects.css'

const Projects = () => {
    const [filter, setFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'E-Room',
            subtitle: 'AI-Powered Video Conferencing Platform',
            description: 'Built an intelligent video conferencing platform with real-time communication and AI-powered meeting analytics. Features include instant meeting creation, scheduled meetings, personal room, and AI-generated summaries using Google Gemini.',
            tech: ['Next.js 15', 'TypeScript', 'Stream.io SDK', 'Clerk Auth', 'Google Gemini AI', 'Tailwind CSS'],
            category: 'fullstack',
            featured: true,
            github: '#',
            demo: '#'
        },
        {
            id: 2,
            title: 'MarineScope',
            subtitle: 'AI-Driven Oceanographic Platform',
            description: 'Developed an AI-driven oceanographic platform for marine research and scientific studies. Built a comprehensive web application providing real-time marine data visualization and analysis tools with responsive user interface.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'AI/ML', 'Data Visualization'],
            category: 'fullstack',
            featured: true,
            github: '#',
            demo: '#'
        },
        {
            id: 3,
            title: 'CineMax',
            subtitle: 'Movie Recommendation Platform',
            description: 'Built an intelligent movie recommendation system using collaborative filtering algorithms. Implemented user-based and item-based collaborative filtering to provide personalized movie suggestions with interactive web interface.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'Collaborative Filtering', 'Machine Learning'],
            category: 'ai',
            featured: true,
            github: '#',
            demo: '#'
        },
        {
            id: 4,
            title: 'Student Grade Management System',
            subtitle: 'Academic Performance Tracking',
            description: 'Comprehensive student grade management system with robust backend architecture for efficient data management. Features include grade tracking, performance analytics, and user-friendly interface for students and administrators.',
            tech: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
            category: 'backend',
            featured: false,
            github: '#',
            demo: '#'
        },
        {
            id: 5,
            title: 'SmartAttend',
            subtitle: 'AI-Powered Attendance System',
            description: 'Intelligent attendance management system leveraging computer vision and facial recognition. Automates attendance tracking with high accuracy and provides real-time analytics for educational institutions.',
            tech: ['Python', 'Computer Vision', 'Face Recognition', 'OpenCV', 'Deep Learning'],
            category: 'ai',
            featured: true,
            github: '#',
            demo: '#'
        },
        {
            id: 6,
            title: 'MockPrep',
            subtitle: 'Interview Preparation Platform',
            description: 'Interactive platform for interview preparation with mock tests, coding challenges, and performance tracking. Helps students and professionals prepare for technical interviews with AI-driven feedback.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'AI Analytics'],
            category: 'fullstack',
            featured: false,
            github: '#',
            demo: '#'
        }
    ]

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'ai', label: 'AI/ML' },
        { id: 'backend', label: 'Backend' }
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter)

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number"></span> Featured Projects
                </h2>

                <div className="project-filters">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                            onClick={() => setFilter(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {project.featured && <div className="featured-badge">Featured</div>}
                            <div className="project-number">{String(project.id).padStart(2, '0')}</div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-subtitle">{project.subtitle}</p>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.demo} className="project-link">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                        Live Demo
                                    </a>
                                    <a href={project.github} className="project-link">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
