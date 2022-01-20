import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-body">
      <header className="intro-body__header">
        <h1>PIZZA TIME</h1>
      </header>
      <nav>
        <ul className="intro-nav__list">
          <a href="#about-us-id" className="intro-nav__list-item">
            <li>About Us</li>
          </a>
          <a href="#" className="intro-nav__list-item">
            <li>Menu</li>
          </a>
          <a href="#" className="intro-nav__list-item">
            <li>Cart</li>
          </a>
          <a href="#" className="intro-nav__list-item">
            <li>Contact Us</li>
          </a>
        </ul>
      </nav>
      <div className="about-us" id="about-us-id">
        <h3>
          We make Pizzas so delicious you'll faint just thinking about them!
        </h3>
        <h3>
          Our Pizzas are the HEALTHIEST because they are YOUR IMAGINATION!
        </h3>
        <h3>We give a 29-MINUTE Fainting Guarantee!*</h3>
      </div>
    </div>
  );
};

export default Intro;
