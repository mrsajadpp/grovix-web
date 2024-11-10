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


    </>
  );
};

export default App;
