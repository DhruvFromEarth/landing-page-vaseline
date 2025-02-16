const Navigation = () => {
return(
    <nav className="container">
        <div className="logo">
          <img src= "/images/vaseline-logo.png" alt = "logo" />
        </div>

        <ul>
          <li href = "#">Menu</li>
          <li href = "#">Location</li>
          <li href = "#">About</li>
          <li href = "#">Contract</li>
        </ul>

        <button>login</button>
      </nav>
    );
};

export default Navigation;