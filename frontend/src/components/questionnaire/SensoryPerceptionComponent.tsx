// src/components/questionnaire/SensoryPerceptionComponent.tsx
import React from 'react';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SensoryPerceptionComponent: React.FC<Props> = ({ onChange }) => {
    return (
        <div>
            <h3>Wine Sensory Perception</h3>
            <label>
                <input type="checkbox" name="sensory" value="taste" onChange={onChange} /> Taste
            </label>
            <label>
                <input type="checkbox" name="sensory" value="aroma" onChange={onChange} /> Aroma
            </label>
            <label>
                <input type="checkbox" name="sensory" value="appearance" onChange={onChange} /> Appearance
            </label>
            <label>
                <input type="checkbox" name="sensory" value="body" onChange={onChange} /> Body
            </label>
        </div>
    );
};

export default SensoryPerceptionComponent;