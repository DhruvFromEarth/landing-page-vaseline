const Hero = () =>{
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>Recovering Your Healthy Skin</h1>
                <div className="hero-content-info">
                <p>Healthy skin is essential to living your best life.<br></br>Take care of your skin so you can look and feel your best.</p>
                <h5>Benefits :</h5>
                <p>
                    <ul>
                        <li>Locks in moisture to help lips recover and feel ease.</li>
                        <li>Melts into the skin making it soft, smooth and healthy.</li>
                        <li>petroleum jelly is effective in healing dry skin and protecting minor cuts.</li>
                    </ul>
                </p>
                </div>
                <div className="hero-btn">
                    <button>Purchase</button>
                    <button className="second-btn">What's in?</button> 
                    {//Mineral oil, Paraffin,microcrystalline wax, tocopheryl acetate,fragrance
                    }
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/vaseline-new.png" alt="vaseline-new-image"></img>
            </div>
        </main>
    );
};

export default Hero;