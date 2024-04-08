// import Infographic from "../../assets/Infographic.png"
import DietNutritionImage from "../../assets/DietNutritionImage.jpg"
import "./Home.scss"

//This component is for the home/landing page
function Home() {
    return(
        <div className="home-container">
            <div className="row">
                <div className="overlay">
                    <h1>SOIL</h1>
                    <p>
                        At SOIL, we’re passionate about offering
                        premium, organic, and fresh food. At SOIL,
                        we’re passionate about offering premium,
                        organic, and fresh food.
                    </p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>

            {/* <div className="infographic-container">
                <img src={Infographic} alt="Organic Foods Infographic"></img>
            </div> */}

            <div className="diet-nutrition-container">
                <img src={DietNutritionImage} alt="Diet Nutrition Image" className="diet-nutrition-img"></img>
                <div className="diet-nutrition-info">
                    <h1>Diet & Nutrition</h1>
                    <p>
                        Balance Macronutrients: Offer guidance on balancing
                        macronutrients(carbohydrates, proteins, and fats) in
                        meals to support overall health and energy levels.
                        Emphasize the importance of incorporating a variety
                        of nutrient-dense foods into their diet.
                    </p>
                    <button>Read More</button>
                </div>
            </div>
{/* 
            <div className="community-row">
                <div className="community-container">
                    <div className="community-info-container">
                        <h1>Community</h1>
                        <p>
                            At Soil, we’re passionate about offering premium, organic,
                            and fresh food. At Soil, we’re passionate about offering
                            premium, organic, and fresh food.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Home