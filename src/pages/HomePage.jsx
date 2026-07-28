import { Link } from "react-router-dom";

function HomePage() {

    return (

        <main className="home-page">

            <section className="hero">

                <h1>Welcome to JamesTech</h1>

                <h2>Learn. Build. Secure.</h2>

                <p>
                    A modern technology blog focused on cybersecurity,
                    programming, networking, and software development.
                    Explore tutorials, articles, and projects while
                    learning technologies used throughout today's IT industry.
                </p>

                <div className="hero-buttons">

                    <Link
                        to="/blog"
                        className="primary-btn"
                    >
                        Explore Blog
                    </Link>

                    <Link
                        to="/login"
                        className="secondary-btn"
                    >
                        Login
                    </Link>

                </div>

            </section>

            <section className="featured-section">

                <h2>Featured Topics</h2>

                <div className="featured-grid">

                    <div className="topic-card">

                        <h3>🔒 Cybersecurity</h3>

                        <p>
                            Learn security fundamentals,
                            ethical hacking concepts,
                            and defensive strategies.
                        </p>

                    </div>

                    <div className="topic-card">

                        <h3>💻 Programming</h3>

                        <p>
                            Articles covering Java,
                            Python, JavaScript,
                            React, and software development.
                        </p>

                    </div>

                    <div className="topic-card">

                        <h3>🌐 Networking</h3>

                        <p>
                            Explore networking concepts,
                            routing, protocols,
                            cloud computing,
                            and enterprise technologies.
                        </p>

                    </div>

                </div>

            </section>

        </main>

    );

}

export default HomePage;