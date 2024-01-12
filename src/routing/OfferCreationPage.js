import OfferDetails from "../Components/OfferDetails";
import InformationsField from "../Components/InformationsField";
import { Link } from 'react-router-dom';
import ButtonComp from "../Components/ButtonComp";

const OfferCreationPage = () => {
    return (
        <>
            <Link to="/">
                <ButtonComp label="Retour à l'accueil" type="button" borderColor="#89e08d"
                            width="180px" height="40px" color="white" backgroundColor="#89e08d"
                            fontSize="20px"/>
            </Link>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                    <OfferDetails />
                    <InformationsField />
                </div>
            </div>

            <br/>
            <br/>

            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Link to="/creation-annonce">
                    <ButtonComp label="Créer mon annonce" type="button" borderColor="#89e08d"
                                width="200px" height="50px" color="white" backgroundColor="#89e08d"
                                fontSize="20px"/>
                </Link>
            </div>
        </>
    )
};

export default OfferCreationPage;