// src/components/questionnaire/SocialPsychologicalFactorsComponent.tsx
import React from 'react';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SocialPsychologicalFactorsComponent: React.FC<Props> = ({ onChange }) => {
    return (
        <div>
            <label htmlFor="socialFactors">Social and Psychological Factors</label>
            <select id="socialFactors" name="socialFactors" onChange={onChange}>
                <option value="celebration">Celebration</option>
                <option value="relaxation">Relaxation</option>
                <option value="socializing">Socializing</option>
                <option value="other">Other</option>
            </select>
        </div>
    );
};

export default SocialPsychologicalFactorsComponent;