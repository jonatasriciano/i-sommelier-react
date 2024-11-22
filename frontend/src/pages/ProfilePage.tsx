// /Users/jonatas/Documents/Projects/i-sommelier-react/frontend/src/pages/ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<{ email: string } | null>(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            try {
                const response = await axios.get('http://localhost:4000/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data.user);
            } catch (error) {
                console.error('Failed to fetch profile:', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div>
            <h1>Profile Page</h1>
            {user ? (
                <div>
                    <p>Email: {user.email}</p>
                    <button onClick={() => localStorage.removeItem('token')}>
                        Logout
                    </button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProfilePage;