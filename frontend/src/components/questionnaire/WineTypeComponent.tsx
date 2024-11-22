// src/components/questionnaire/WineTypeComponent.tsx
import React from 'react';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WineTypeComponent: React.FC<Props> = ({ onChange }) => {
    return (
        <div>
            <label htmlFor="wineType">What type of wine are you looking for?</label>
            <select id="wineType" name="wineType" onChange={onChange}>
                <option value="RED">Red</option>
                <option value="WHITE">White</option>
                <option value="ROSE">Rosé</option>
            </select>
        </div>
    );
};

export default WineTypeComponent;