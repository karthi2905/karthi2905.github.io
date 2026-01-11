import './Contact.css'

const Contact = () => {
    const contactInfo = [
        {
            label: 'Email',
            value: 'karthikeyan29.5.2006@gmail.com',
            link: 'mailto:karthikeyan29.5.2006@gmail.com',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            )
        },
        {
            label: 'Phone',
            value: '+91 8072174309',
            link: 'tel:+918072174309',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            )
        },
        {
            label: 'LinkedIn',
            value: 'karthikeyan-r',
            link: 'https://linkedin.com/in/karthikeyan-r-linkedin',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            )
        },
        {
            label: 'GitHub',
            value: 'karthi2905',
            link: 'https://github.com/karthi2905',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            )
        }
    ]

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">
                    <span className="title-number"></span> Get In Touch
                </h2>
                <div className="contact-content">
                    <div className="contact-intro">
                        <h3 className="contact-heading">Let's Connect</h3>
                        <p className="contact-description">
                            I'm currently seeking new opportunities and exciting collaborations.
                            Whether you have a project in mind, want to discuss technology, or just
                            want to connect, I'd love to hear from you.
                        </p>
                    </div>

                    <div className="contact-grid">
                        {contactInfo.map((contact, index) => (
                            <a
                                key={index}
                                href={contact.link}
                                className="contact-card"
                                target={contact.link.startsWith('http') ? '_blank' : undefined}
                                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="contact-icon-wrapper">
                                    <div className="contact-icon">
                                        {contact.icon}
                                    </div>
                                </div>
                                <div className="contact-details">
                                    <div className="contact-label">{contact.label}</div>
                                    <div className="contact-value">{contact.value}</div>
                                </div>
                                <div className="contact-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="contact-cta">
                        <p className="cta-text">
                            Open to full-time opportunities, internships, and freelance projects
                        </p>
                        <div className="availability-badge">
                            <span className="status-dot"></span>
                            Available for Work
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
