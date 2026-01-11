import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const roles = [
        'Full Stack Developer',
        'AI Enthusiast',
        'Problem Solver',
        'Tech Innovator'
    ]
    const [roleIndex, setRoleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setDisplayText(currentRole.substring(0, charIndex + 1))
                    setCharIndex(charIndex + 1)
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (charIndex > 0) {
                    setDisplayText(currentRole.substring(0, charIndex - 1))
                    setCharIndex(charIndex - 1)
                } else {
                    setIsDeleting(false)
                    setRoleIndex((roleIndex + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, roleIndex])

    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-greeting animate-fade-in-up">
                            Hi, I'm
                        </div>
                        <h1 className="hero-name animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Karthikeyan R
                        </h1>
                        <div className="hero-role-container animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <h2 className="hero-role">
                                <span className="gradient-text">{displayText}</span>
                                <span className="cursor-blink">|</span>
                            </h2>
                        </div>
                        <p className="hero-description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            B.Tech AI & Data Science student passionate about building intelligent systems
                            and scalable web applications. Specializing in full-stack development, machine
                            learning, and creating innovative solutions to complex problems.
                        </p>
                        <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="stat-item">
                                <div className="stat-number">8.25</div>
                                <div className="stat-label">CGPA</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">10+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">2</div>
                                <div className="stat-label">Hackathons</div>
                            </div>
                        </div>
                        <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <button className="btn btn-primary" onClick={() => scrollToSection('#projects')}>
                                View My Work
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection('#contact')}>
                                Get In Touch
                            </button>
                        </div>
                    </div>
                    <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="avatar-container">
                            <div className="avatar-ring ring-1"></div>
                            <div className="avatar-ring ring-2"></div>
                            <div className="avatar-ring ring-3"></div>
                            <div className="avatar-circle">
                                <span className="avatar-initial">K</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-line"></div>
                    <span>Scroll Down</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
