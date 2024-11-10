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
          At Grovix lab, we push the boundaries of technology through internal research and development in robotics, artificial intelligence, and custom software solutions.
          Our mission is to create groundbreaking products that advance industries and contribute to technological innovation.
        </p>

        <div className="service-block">
          <div className="service-text">
            <h3 className="service-title">Robotics Solutions</h3>
            <p className="service-description">
              Our robotics division is committed to developing intelligent robotic systems designed for specific research applications and product implementations.
              From automating complex tasks to engineering custom robotics for advanced technology solutions, we are constantly innovating and testing new prototypes to explore the possibilities of robotics in diverse fields.
            </p>
          </div>
          <div className="service-image">
            <img src="/img/pictures/robotics.webp" alt="Robotics Research & Development" />
          </div>
        </div>

        <div className="service-block">
          <div className="service-text">
            <h3 className="service-title">Artificial Intelligence</h3>
            <p className="service-description">
              Our AI initiatives focus on leveraging artificial intelligence to drive forward-thinking research projects and create proprietary products.
              We explore innovative solutions to solve complex challenges, optimize processes, and enable smarter decision-making, with a focus on AI technologies that can be integrated into our own products and systems.
            </p>
          </div>
          <div className="service-image">
            <img src="/img/pictures/circuit.webp" alt="Artificial Intelligence Research" />
          </div>
        </div>

        <div className="service-block">
          <div className="service-text">
            <h3 className="service-title">Custom Software Development</h3>
            <p className="service-description">
              We also provide custom software solutions, developing web platforms and mobile applications that meet evolving business requirements.
              Our software solutions are designed to support growth, scalability, and adaptability, helping businesses to optimize their operations and create seamless user experiences.
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
