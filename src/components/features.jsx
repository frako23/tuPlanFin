import "../styles/style.css"

export function Features() {
    return (
        <section id="why" className="features_area pt-100 pb-100 blue-bg">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section_title text-center pb-10">
                        <h4 className="sub_title">Why Choose Us?</h4>
                        <h3 className="title">We Provide Professional Financial Services For Business</h3>
                    </div> 
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features text-center mt-25 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="features_icon">
                            <i className="lni lni-certificate"></i>
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#">Certified</a></h4>
                            <p>Lorem ipsum dolor aconsetet dorem ipsum dolor aconsetetur sadipscing  sed diamn numy eirmod </p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features text-center mt-25 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.5s">
                        <div className="features_icon">
                            <i className="lni lni-rocket"></i>
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#">Fast</a></h4>
                            <p>Lorem ipsum dolor aconsetet dorem ipsum dolor aconsetetur sadipscing  sed diamn numy eirmod </p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features text-center mt-25 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="0.8s">
                        <div className="features_icon">
                            <i className="lni lni-briefcase"></i>
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#">Experienced</a></h4>
                            <p>Lorem ipsum dolor aconsetet dorem ipsum dolor aconsetetur sadipscing  sed diamn numy eirmod </p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_features text-center mt-25 wow fadeInUpBig" data-wow-duration="2s" data-wow-delay="1.1s">
                        <div className="features_icon">
                            <i className="lni lni-headphone-alt"></i>
                        </div>
                        <div className="features_content">
                            <h4 className="features_title"><a href="#">Dedicated</a></h4>
                            <p>Lorem ipsum dolor aconsetet dorem ipsum dolor aconsetetur sadipscing  sed diamn numy eirmod </p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>  
    )
    
}