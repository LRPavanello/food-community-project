import Header from "../components/Header";
 
const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="./img/header.png" className="hero-image" alt="" />
        <div className="inner-hero-container">
          <h1 className="hero-title">Foodary</h1>
          <p className="hero-content-paragraph">What would you do if you have a thousand receipes just right in your pocket?</p>
          <div className="hero-button-container">
            <button className="hero-button">Learn More</button>
            <button className="hero-button">Foodary Community</button>
          </div>
        </div>
      </div>
 
      <div className="container">
        <div className="inner-container">
          <div className="element-items">
            <img src="./img/Index1.png" className="element-image" alt="" />
            <p className="element-paragraph">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
          </div>
          <div className="element-items">
            <p className="element-paragraph">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
            <img src="./img/Index2.png" className="element-image" alt="" />
          </div>
          <div className="element-items">
            <img src="./img/Index3.png" className="element-image" alt="" />
            <p className="element-paragraph">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
          </div>
        </div>
 
      </div>
    </div>
  );
}
 
export default IndexPage;