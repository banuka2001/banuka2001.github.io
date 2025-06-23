import bannerImage from "../../assets/images/HeroBackground.svg";
import "../../styles/HeroSection.css";

const HeroSection = () => {
    return (
        <main className="site-main">
            <section className="site-banner">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
                    
                        <h3 className="title-text"> Hey </h3>
                        <h1 className="title-text text-uppercase"> I am Banuka </h1>
                        <h4 className="title-text text-uppercase"> Fullstack developer </h4>
                    
                        <div className="site-button mt-5">
                            <div className="d-flex flex-row flex-wrap">
                                <button type="button" className="btn button primary-button text-uppercase me-4"> hire me </button>
                                <button type="button" className="btn button secondary-button text-uppercase"> get cv </button>
                            </div>
                        </div>

                    </div>  
                    
                    <div className="col-lg-6 col-md-12 banner-image">
                        <img src={bannerImage} alt="banner-image" className="img-fluid"/>
                    </div>                      
                </div>
                </div>
            </section>
        </main>
    )
}

export default HeroSection;