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

    return (
        <>
        <form>
            <h4>Informations de l'annonce</h4>

            <div>
                <h4>Plus de détails</h4>
                <p>Ajoutez des précisions</p>

                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Jantes aluminium" type="button"
                            borderColor={selectedButtons[0] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Airbags" type="button"
                            borderColor={selectedButtons[1] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Climatisation" type="button"
                            borderColor={selectedButtons[2] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Système de navigation" type="button"
                            borderColor={selectedButtons[3] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Toit ouvrant" type="button"
                            borderColor={selectedButtons[4] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Sièges cuir" type="button"
                            borderColor={selectedButtons[5] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Radar de recul" type="button"
                            borderColor={selectedButtons[6] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Caméra de recul" type="button"
                            borderColor={selectedButtons[7] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="Vitres électriques" type="button"
                            borderColor={selectedButtons[8] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="ABS" type="button"
                            borderColor={selectedButtons[9] ? "#89d8e0" : "black"}/>
                    <ButtonComp onClick={() => handleButtonSelected(0)} label="ESP" type="button"
                            borderColor={selectedButtons[10] ? "#89d8e0" : "black"}/>   
                </div>
            </div>
        </form>
        </>
    );
};

export default InformationsField;