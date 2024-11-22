// src/pages/QuestionnairePage.tsx
import React, { useState } from 'react';
import WineTypeComponent from '../components/questionnaire/WineTypeComponent';
import BudgetComponent from '../components/questionnaire/BudgetComponent';
import DescriptionComponent from '../components/questionnaire/DescriptionComponent';
import SensoryPerceptionComponent from '../components/questionnaire/SensoryPerceptionComponent';
import SocialPsychologicalFactorsComponent from '../components/questionnaire/SocialPsychologicalFactorsComponent';

const QuestionnairePage: React.FC = () => {
    const [formData, setFormData] = useState({
        wineType: '',
        budget: 0,
        description: '',
        sensory: [] as string[],
        socialFactors: ''
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form data:', formData);
        // Send formData to backend
    };

    return (
        <div>
            <h1>Wine Preference Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                <WineTypeComponent onChange={(e) => setFormData({ ...formData, wineType: e.target.value })} />
                <BudgetComponent onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })} />
                <DescriptionComponent onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                <SensoryPerceptionComponent onChange={(e) => {
                    const value = e.target.value;
                    setFormData((prev) => ({
                        ...prev,
                        sensory: prev.sensory.includes(value)
                            ? prev.sensory.filter((item) => item !== value)
                            : [...prev.sensory, value]
                    }));
                }} />
                <SocialPsychologicalFactorsComponent onChange={(e) => setFormData({ ...formData, socialFactors: e.target.value })} />
                <button type="submit">Submit Preferences</button>
            </form>
        </div>
    );
};

export default QuestionnairePage;