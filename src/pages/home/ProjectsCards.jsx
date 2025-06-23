import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import '../../styles/Projects.css';

const projectCards = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, cart functionality, and secure payments.',
      imageUrl: 'https://placehold.co/600x400/a2bdaf/ffffff?text=E-commerce',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool to help teams organize and track their work effectively.',
      imageUrl: 'https://placehold.co/600x400/dcd9d4/ffffff?text=Task+App',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets with various chart types and filters.',
      imageUrl: 'https://placehold.co/600x400/7d9aaa/ffffff?text=Dashboard',
      tech: ['Angular', 'D3.js', 'Express.js', 'PostgreSQL'],
      liveUrl: '#',
    },
    {
        title: 'Project Four',
        description: 'Description for project four.',
        imageUrl: 'https://placehold.co/600x400/a2bdaf/ffffff?text=Project+Four',
        tech: ['React', 'Next.js'],
        liveUrl: '#',
    },
    {
        title: 'Project Five',
        description: 'Description for project five.',
        imageUrl: 'https://placehold.co/600x400/dcd9d4/ffffff?text=Project+Five',
        tech: ['Svelte', 'GraphQL'],
        liveUrl: '#',
    },
  ];

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};

// Helper function to chunk projects into groups
const chunkProjects = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const ProjectsCards = () => {
    const width = useWindowWidth();
    const isMediumScreen = width < 1230;
    const isMobile = width < 768;

  if (isMediumScreen) {
    return (
        <section id="projectCards" className="projects-section">
          <Container>
            <h2 className='text-black'>My Projects</h2>
            <Carousel 
              indicators={false}
              prevIcon={<span aria-hidden="true" className="bi bi-caret-left-fill" />}
              nextIcon={<span aria-hidden="true" className="bi bi-caret-right-fill" />}
            >
              {projectCards.map((project, idx) => (
                <Carousel.Item key={idx}>
                  <Row className="g-4 d-flex justify-content-center">
                    <Col xs={10} md={8} lg={6}>
                        <Card className="project-card h-100">
                          <Card.Img variant="top" src={project.imageUrl} />
                          <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            {!isMobile && (
                                <Card.Text>
                                  {project.description}
                                </Card.Text>
                            )}
                            <ul className="tech-stack">
                              {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                            <a href={project.liveUrl} className="view-project-link" target="_blank" rel="noopener noreferrer">
                              View Project
                            </a>
                          </Card.Body>
                        </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </section>
      );
  }

  const projectChunks = chunkProjects(projectCards, 3); // Group projects by 3

  return (
    <section id="projectCards" className="projects-section">
      <Container>
        <h2 className='text-black'>My Projects</h2>
        <Carousel 
          indicators={false}
          prevIcon={<span aria-hidden="true" className="bi bi-caret-left-fill" />}
          nextIcon={<span aria-hidden="true" className="bi bi-caret-right-fill" />}
        >
          {projectChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row xs={1} md={2} lg={3} className="g-4">
                {chunk.map((project, idx) => (
                  <Col key={idx}>
                    <Card className="project-card h-100">
                      <Card.Img variant="top" src={project.imageUrl} />
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>
                          {project.description}
                        </Card.Text>
                        <ul className="tech-stack">
                          {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                        </ul>
                        <a href={project.liveUrl} className="view-project-link" target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default ProjectsCards;
