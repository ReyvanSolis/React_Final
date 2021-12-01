import Fade from "react-reveal/Fade";

export default function Hero() {
    return (
      <Fade bottom delay={1500}>
 <section className="hero section center-content illustration-section-01">
        <div className="container-sm">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay={200}>
                Reyvan Solis
              </h1>
              <div className="container-xs">
                <p className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay={400}>
                  Welcome to my website. i must say this subject is very hard to the point
                  where i can only follow the video from my Lecturer and still encounter Problems.
                  how shamefull of me :")
            
                  
                </p>
              </div>
            </div>
            <div className="
                            hero-figure
                            reveal-from-bottom
                            illustration-element-01
                        " data-reveal-value="20px" data-reveal-delay={800}>
              <img className="has-shadow" src="images/mihoyo.jpg" alt="Hero image" width={896} height={504} />
            </div>
          </div>
        </div>
      </section>
      </Fade>

       
    )
}
