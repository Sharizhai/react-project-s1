import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
import DropdownComp from "./DropdownComp";

const OfferDetails = () => {
    const [selectedButtons, setSelectedButtons] = useState(Array(15).fill(false));
    const [selectedOption, setSelectedOption] = useState(null);

    const handleButtonSelected = (index) => {
        setSelectedButtons((prevSelectedButtons) => {
            const newSelectedButtons = [...prevSelectedButtons];
            newSelectedButtons[index] = !newSelectedButtons[index];

        return newSelectedButtons;
    });
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const brandOptions = [
    { value: "0", label: "" },
    { value: "1", label: "Mustang" },
    { value: "2", label: "Cadillac" },
    { value: "3", label: "Chevrolet" },
  ];

  const modelYear = [
    { value: "0", label: "" },
    { value: "1", label: "1950" },
    { value: "2", label: "1960" },
    { value: "3", label: "1970" },
    { value: "4", label: "1980" },
    { value: "5", label: "1990" },
    { value: "6", label: "2000" },
  ];

  const mileage =[
    { value: "0", label: "" },
    { value: "1", label: "0" },
    { value: "2", label: "de 0 à 5 000" },
    { value: "3", label: "de 5 000 à 10 000" },
    { value: "4", label: "de 10 000 à 20 000" },
    { value: "5", label: "de 20 000 à 50 000" },
    { value: "6", label: "plus de 50 000" },
  ]

  const horsePower = [
    { value: "0", label: "" },
    { value: "1", label: "4 CV" },
    { value: "2", label: "5 CV" },
    { value: "3", label: "6 CV" },
    { value: "4", label: "7 CV" },
    { value: "5", label: "8 CV" },
    { value: "6", label: "9 CV" },
    { value: "7", label: "10 CV" },
  ];

  return (
    <>
      <form>
        <div>
            <h3>Détails de l'annonce</h3>
            <p>Ajoutez plus de détails sur votre annonce pour un maximum de visibilité</p>
        </div>

        <div style={{display: "flex", flexDirection: "row"}}>
        <DropdownComp title="Marque" options={brandOptions} 
                  onChange={handleDropdownChange} value={selectedOption} />
        <DropdownComp title="Année-Modèle" options={modelYear} 
                  onChange={handleDropdownChange} value={selectedOption} />                    
        </div>

        <div style={{display: "flex", flexDirection: "row"}}>
        <DropdownComp title="Kilométrage" options={mileage} 
                  onChange={handleDropdownChange} value={selectedOption} />  
        <DropdownComp title="Puissance fiscale" options={horsePower} 
                  onChange={handleDropdownChange} value={selectedOption} />  
        </div>

        <div>
            <h4>Type de carburant</h4>
                <ButtonComp onClick={() => handleButtonSelected(0)} label="Diesel" type="button"
                            borderColor={selectedButtons[0] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(1)} label="Essence" type="button"
                            borderColor={selectedButtons[1] ? "#89d8e0" : "black"}/>
                <ButtonComp  onClick={() => handleButtonSelected(2)} label="Electrique" type="button"
                            borderColor={selectedButtons[2] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(3)} label="LPG" type="button"
                            borderColor={selectedButtons[3] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(4)} label="Hybride" type="button"
                            borderColor={selectedButtons[4] ? "#89d8e0" : "black"}/>
        <p style={{color: "red", fontSize: "10px"}}>Champ requis</p>                    
        </div>

        <div>
            <h4>Boîte de vitesse</h4>
                <ButtonComp onClick={() => handleButtonSelected(5)} label="Automatique" type="button"
                            borderColor={selectedButtons[5] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(6)} label="Manuelle" type="button"
                            borderColor={selectedButtons[6] ? "#89d8e0" : "black"}/>
        <p style={{color: "red", fontSize: "10px"}}>Champ requis</p>
        </div>

        <div>
            <h4>Etat</h4>
                <ButtonComp onClick={() => handleButtonSelected(7)} label="Neuf" type="button"
                            borderColor={selectedButtons[7] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(8)} label="Excellent" type="button"
                            borderColor={selectedButtons[8] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(9)} label="Très bon" type="button"
                            borderColor={selectedButtons[9] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(10)} label="Bon" type="button"
                            borderColor={selectedButtons[10] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(11)} label="Correct" type="button"
                            borderColor={selectedButtons[11] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(12)} label="Endommagé" type="button"
                            borderColor={selectedButtons[12] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(13)} label="Pour pièces" type="button"
                            borderColor={selectedButtons[13] ? "#89d8e0" : "black"}/>
        <p style={{color: "red", fontSize: "10px"}}>Champ requis</p>
        </div>

        <div>
            <h4>Origine</h4>
                <ButtonComp onClick={() => handleButtonSelected(14)} label="Dédouanée" type="button"
                            borderColor={selectedButtons[14] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(15)} label="Pas encore dédouanée" type="button"
                            borderColor={selectedButtons[15] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(16)} label="WW au Maroc" type="button"
                            borderColor={selectedButtons[16] ? "#89d8e0" : "black"}/>
                <ButtonComp onClick={() => handleButtonSelected(17)} label="Importée neuve" type="button"
                            borderColor={selectedButtons[17] ? "#89d8e0" : "black"}/>
        <p style={{color: "red", fontSize: "10px"}}>Champ requis</p>
        </div>
      </form>
    </>
  );
};

export default OfferDetails;
