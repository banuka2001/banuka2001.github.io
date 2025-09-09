import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import ProjectsCards from "./ProjectsCards";
import SkillsBanner from "./SkillsBanner";
import GetInTouch from "./GetInTouch";


const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <SkillsBanner />
            <ProjectsCards />
            <GetInTouch />        
        </>
    );
}

export default Home;