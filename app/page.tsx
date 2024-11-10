import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const metadata = {
  title: "Grovix lab: Pioneering Robotics & AI Innovations for a Smarter Future",
  description: "Grovix lab is a robotics, artificial intelligence, and software company delivering innovative solutions to drive industry transformation and community empowerment.",
  openGraph: {
    images: ['/opengraph/image.jpg'],
  }
};

const App = async () => {
  return (
    <>
      <div className="main">
        <div className="hero">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            src="/clip/efr.mp4"
          />

          <div className="hero-title">
            <h2>It's not a <span>bug</span> it's an undocumented <span>feature</span></h2>
          </div>
          <p className="hero-description">
            Join us as we drive technology innovation forward, turning challenges into opportunities.
          </p>
        </div>
      </div>

      {/* About us */}
      <div className="about-us">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">About Grovix Lab</h2>
              <p className="about-description">
                Grovix lab. is at the forefront of robotics, artificial intelligence, and software innovation, providing
                cutting-edge solutions to transform industries and empower communities.
              </p>
            </div>
          </div>
          <div className="about-image">
            <img src="/img/pictures/robot.webp" alt="Robot" />
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="what-we-do">
        <h2 className="section-title">What We Do</h2>
        <p className="section-description">
          At Grovix lab, we are dedicated to pushing the boundaries of technology through robotics, AI, and custom software
          solutions. Our team crafts solutions that empower industries and communities alike.
        </p>

        <div className="service-block">
          <div className="service-text">
            <h3 className="service-title">Robotics Solutions</h3>
            <p className="service-description">
              Our robotics team develops intelligent robots tailored to meet specific industry needs, from automation to
              custom robotics engineering.
            </p>
          </div>
          <div className="service-image">
            <img src="/img/pictures/robotics.webp" alt="Robotics Solutions" />
          </div>
        </div>

        <div className="service-block">
          <div className="service-text">
            <h3 className="service-title">Artificial Intelligence</h3>
            <p className="service-description">
              Utilizing AI to solve real-world challenges, we provide innovative solutions that enhance decision-making,
              efficiency, and performance.
            </p>
          </div>
          <div className="service-image">
            <img src="/img/pictures/cirfcuit.webp" alt="Artificial Intelligence" />
          </div>
        </div>

        <div className="service-block">
          <div className="service-text">
            <h3 className="service-title">Custom Software Development</h3>
            <p className="service-description">
              From web platforms to mobile apps, our software solutions are designed to scale and adapt to meet evolving
              business requirements.
            </p>
          </div>
          <div className="service-image">
            <img src="/img/pictures/software-developer.webp" alt="Custom Software Development" />
          </div>
        </div>
      </div>

    </>
  );
};

export default App;
