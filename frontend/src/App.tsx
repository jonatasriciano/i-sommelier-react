// /Users/jonatas/Documents/Projects/i-sommelier-react/frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/users/LoginForm';
import RegisterForm from './components/users/RegisterForm';
import ProfilePage from './pages/ProfilePage';
import QuestionnairePage from './pages/QuestionnairePage';
import Layout from './components/common/Layout';

const App: React.FC = () => {
    const isAuthenticated = !!localStorage.getItem('token'); // Verifica se o usuário está autenticado

    return (
        <Router>
            <Layout>
                <Routes>
                    {/* Redirecionar para login se não autenticado */}
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route
                        path="/profile"
                        element={
                            isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />
                        }
                    />
                    <Route
                        path="/questionnaire"
                        element={
                            isAuthenticated ? (
                                <QuestionnairePage />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;