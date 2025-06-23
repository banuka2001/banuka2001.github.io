import { useState, useEffect, useRef } from "react";
import "../../styles/AboutMe.css";
import AboutMeImage from "../../assets/images/AboutMe-Img.jpg";
// import AboutMeImage from "../../assets/images/AboutMe.svg";
import ScrollControlledTyping from "../../components/ScrollControlledTyping";

const AboutMe = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const pinContainerRef = useRef(null);
  const contentWrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pinContainerRef.current || !contentWrapperRef.current) return;

      const pinContainer = pinContainerRef.current;
      const contentWrapper = contentWrapperRef.current;

      const pinStart = pinContainer.offsetTop;
      const pinDuration = pinContainer.offsetHeight - contentWrapper.offsetHeight;

      if (pinDuration <= 0) {
        setScrollProgress(1);
        return;
      }

      const pinEnd = pinStart + pinDuration;
      const scrollY = window.scrollY;

      if (scrollY >= pinStart && scrollY < pinEnd) {
        const progress = (scrollY - pinStart) / pinDuration;
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      } else if (scrollY >= pinEnd) {
        setScrollProgress(1);
      } else {
        setScrollProgress(0);
      }
    };

    const setupListeners = () => {
      if (window.matchMedia("(max-width: 767px)").matches) {
        setScrollProgress(1);
        window.removeEventListener("scroll", handleScroll);
      } else {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
      }
    };

    setupListeners();
    window.addEventListener("resize", setupListeners);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setupListeners);
    };
  }, []);

  return (
    <>
      <div id="aboutMe" className="about-me">
      <div className="container py-5 about-me-container about-me-background">
        <div ref={pinContainerRef} className="about-me-pin-container">
          <div ref={contentWrapperRef} className="about-me-content-wrapper">
            <h2 className="text-center mb-4 about-me-title">About Me</h2>
            <div className="row align-items-center">
              <div className="col-md-5 text-center about-me-image-container">
                <img
                  src={AboutMeImage}
                  alt="Banuka"
                  className="img-fluid about-me-image"
                  style={{ maxHeight: "600px" }}
                />
              </div>
              <div className="col-md-7 about-me-content mt-4 mt-md-0">
                <ScrollControlledTyping scrollProgress={scrollProgress}>
                  <p>
                    <span className="intro-greeting">
                      Hi, I'm <strong>Banuka Dilshan</strong>
                    </span>
                    <br />— a passionate and driven{" "}
                    <strong>
                      Computer Science undergraduate at Uva Wellassa University
                    </strong>{" "}
                    with a strong focus on backend development and scalable
                    software solutions.
                  </p>
                  <p className="text-center intro-skills">
                    I specialize in <strong>Java</strong> and{" "}
                    <strong>Spring Boot</strong> <br />
                    I have built full-stack applications using{" "}
                    <strong>React</strong> and <strong>Node.js</strong>. <br />
                    I focus on writing clean, efficient, and maintainable code.
                  </p>
                  <p>
                    I have a solid understanding of{" "}
                    <strong>Database Management Systems (DBMS)</strong> and
                    hands-on experience working with <strong>MySQL</strong> and{" "}
                    <strong>PostgreSQL</strong>. I'm confident in designing
                    efficient relational schemas, writing optimized SQL queries,
                    and managing data in real-world applications.
                  </p>
                  <p>
                    I'm currently diving deeper into tools like{" "}
                    <strong>Firebase</strong>, <strong>AWS</strong>, and{" "}
                    <strong>Docker</strong> to enhance my development workflow
                    and deployment strategies.
                  </p>
                  <p>
                    One of my recent projects, <em>Safe Drive</em>, is a
                    collaborative effort to prevent drunk driving — a real-world
                    solution built with purpose.
                  </p>
                  <p>
                    My long-term vision is to become a skilled{" "}
                    <strong>Software Engineer</strong>, gain valuable industry
                    experience through internships. <br />
                    I'm always open to new challenges, collaborations, and
                    learning opportunities.
                  </p>
                </ScrollControlledTyping>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AboutMe;
