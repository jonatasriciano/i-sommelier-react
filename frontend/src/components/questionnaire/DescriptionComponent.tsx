// src/components/questionnaire/DescriptionComponent.tsx
import React from 'react';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const DescriptionComponent: React.FC<Props> = ({ onChange }) => {
    return (
        <div>
            <label htmlFor="description">Describe your preferences:</label>
            <textarea id="description" name="description" onChange={onChange}></textarea>
        </div>
    );
};

export default DescriptionComponent;