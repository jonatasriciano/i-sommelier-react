// src/components/questionnaire/BudgetComponent.tsx
import React from 'react';

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const BudgetComponent: React.FC<Props> = ({ onChange }) => {
    return (
        <div>
            <label htmlFor="budget">What's your budget for the bottle?</label>
            <input type="range" id="budget" name="budget" min="10" max="500" onChange={onChange} />
        </div>
    );
};

export default BudgetComponent;