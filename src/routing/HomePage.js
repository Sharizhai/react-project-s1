import ButtonComp from "../Components/ButtonComp";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{textAlign: "center", color:"#cf9d41"}}>Vendez votre voiture</h1>
                <img src="https://cdn.classic-trader.com/I/images/1920_1920_inset/vehicle_ad_standard_image_920b017d48159c721a577d032e1d6ac0.jpg" width="900px"/>
                <Link to="/creation-annonce">
                    <ButtonComp label="Créer mon annonce" type="button" borderColor="#89e08d"
                                width="200px" height="50px" color="white" backgroundColor="#89e08d"
                                fontSize="20px"/>
                </Link>
            </div>
        </> 
    );
};

export default HomePage;