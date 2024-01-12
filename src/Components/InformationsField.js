import React, { useState } from "react";
import ButtonComp from "./ButtonComp";

const InformationsField = () => {

    const [selectedButtons, setSelectedButtons] = useState(Array(11).fill(false));

    const handleButtonSelected = (index) => {
        setSelectedButtons((prevSelectedButtons) => {
            const newSelectedButtons = [...prevSelectedButtons];
            newSelectedButtons[index] = !newSelectedButtons[index];

            return newSelectedButtons;
        });
    };

    const [informationsData, setInformationsData] = useState({
        price: "", 
        offerTitle: "", 
        offerPrecisions: "",
    });

    const handlePriceChange = (e) => {
        const inputValue = e.target.value;

        if (!/^\d+$/.test(inputValue)) {
            alert("Seuls les chiffres sont autorisés");
            return;
        }

        const sanitizedValue = inputValue.replace(/\D/g, '');
        setInformationsData((prevState) => ({
            ...prevState,
            price: sanitizedValue,
        }));
    };

    const handleInformationsData = e => {
        setInformationsData(prevState => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
        <form>
            <div>
                <label>Prix</label>
                <br />
                <input name="price" 
                       value={informationsData.price} 
                       onChange={handlePriceChange}/>
            <p style={{color: "red", fontSize: "10px"}}>Champ requis</p> 
            <br />
            </div>

            <div>
                <label>Titre de votre annonce</label>
                <br />
                <input name="offerTitle" 
                       value={informationsData.offerTitle} 
                       onChange={handleInformationsData}
                       style={{width: "400px"}}/> 
            <p style={{color: "red", fontSize: "10px"}}>Champ requis</p> 
            <br />
            </div>

            <div>
                <label>Description</label>
                <br />
                <textarea name="offerPrecisions" 
                          value={informationsData.offerPrecisions} 
                          onChange={handleInformationsData}
                          placeholder="Donnez des précisions sur votre voiture"
                          rows={20}
                          style={{width: "400px"}}/>
            <p style={{color: "red", fontSize: "10px"}}>Champ requis</p> 
            <br />
            </div>

            <br />
            <div>
                <h4>Plus de détails</h4>

                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Jantes aluminium" type="button"
                            borderColor={selectedButtons[0] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(1)} label="Airbags" type="button"
                            borderColor={selectedButtons[1] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(2)} label="Climatisation" type="button"
                            borderColor={selectedButtons[2] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(3)} label="Système de navigation" type="button"
                            borderColor={selectedButtons[3] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(4)} label="Toit ouvrant" type="button"
                            borderColor={selectedButtons[4] ? "#89d8e0" : "black"}/>
                </div>
                <div>
                    <ButtonComp onClick={() => handleButtonSelected(5)} label="Sièges cuir" type="button"
                            borderColor={selectedButtons[5] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(6)} label="Radar de recul" type="button"
                            borderColor={selectedButtons[6] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(7)} label="Caméra de recul" type="button"
                            borderColor={selectedButtons[7] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(8)} label="Vitres électriques" type="button"
                            borderColor={selectedButtons[8] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(9)} label="ABS" type="button"
                            borderColor={selectedButtons[9] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(10)} label="ESP" type="button"
                            borderColor={selectedButtons[10] ? "#89d8e0" : "black"}/>   

                </div>
                <p style={{color: "red", fontSize: "10px"}}>Champ requis</p> 
            </div> 
        </form>
        </>
    );
};

export default InformationsField; 