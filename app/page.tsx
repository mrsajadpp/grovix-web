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
        <div className="container">
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
      </div>

      {/* Meet the Team */}
      <div className="meet-the-team">
        <div className="container">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-description">
            Our team at Grovix Lab is composed of passionate innovators and experts in robotics, AI, and software development. Together, we work towards creating cutting-edge solutions.
          </p>

          <div className="team-members">
            <div className="team-member">
              <Image src="https://dqy38fnwh4fqs.cloudfront.net/UHJKRP7QBPKLLMNFAKOK697NMLLB/hjkrp7qbpkllmnfakok697nmllb-profile.webp" alt="Team Member 1" width={200} height={200} className="team-image" />
              <h3 className="team-name">Muhammed Sajad PP</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">
                Sajad is the visionary behind Grovix lab, leading the company with a passion for robotics, AI, and technological innovations.
              </p>
            </div>

            <div className="team-member">
              <Image src="https://dqy38fnwh4fqs.cloudfront.net/UHMQLP9NDDQPAM7FBPON9GE87GEA/hmqlp9nddqpam7fbpon9ge87gea-profile.webp" alt="Team Member 2" width={200} height={200} className="team-image" />
              <h3 className="team-name">Adil Nasar KC</h3>
              <p className="team-role">Co-Founder & CTO</p>
              <p className="team-bio">
                Adil oversees the technical direction at Grovix lab, ensuring the cutting-edge technology behind our products.
              </p>
            </div>

            <div className="team-member">
              <Image src="https://dqy38fnwh4fqs.cloudfront.net/UHBAB8EJAGG77AM1PG67RLJOG9DK/hbab8ejagg77am1pg67rljog9dk-profile.webp" alt="Team Member 3" width={200} height={200} className="team-image" />
              <h3 className="team-name">Noshin Naved</h3>
              <p className="team-role">Co-Founder & Head of Research</p>
              <p className="team-bio">
                Noshin leads our research efforts, pushing the boundaries of AI and robotics to develop innovative products.
              </p>
            </div>

            <div className="team-member">
              <Image src="https://dqy38fnwh4fqs.cloudfront.net/UHBAB8E7EOAMGBL1PG67RLJA7Q9P/hbab8e7eoamgbl1pg67rlja7q9p-profile.webp" alt="Team Member 4" width={200} height={200} className="team-image" />
              <h3 className="team-name">Midhilaj Nasar KP</h3>
              <p className="team-role">Co-Founder & Head of Product Development</p>
              <p className="team-bio">
                Midhilaj is dedicated to transforming research into tangible products, ensuring the highest quality in every release.
              </p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default App;
