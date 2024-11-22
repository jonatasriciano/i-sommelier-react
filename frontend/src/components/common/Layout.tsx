// Import necessary modules from React and Material-UI
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

// Import the logo image
import logo from '../../assets/images/logo.png';

// Define the props type for the Layout component
interface LayoutProps {
    children: React.ReactNode;
}

// Create and export the Layout component
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            {/* Navigation bar */}
            <AppBar position="static">
                <Toolbar>
                    {/* Display the logo alongside the title */}
                    <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                        <Typography variant="h6" component="div">
                            I-Sommelier
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Box flex={1} mt={2} mb={2}>
                {children}
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    py: 2,
                    mt: 'auto',
                }}
            >
                <Typography variant="body2" align="center">
                    © {new Date().getFullYear()} I-Sommelier. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Layout;