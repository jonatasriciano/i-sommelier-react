// /Users/jonatas/Documents/Projects/i-sommelier-react/frontend/src/components/Layout.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            {/* Barra de navegação */}
            <AppBar position="static">
                <Toolbar>
                    {/* Exibe o logo ao lado do título */}
                    <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div">
                            I-Sommelier
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Conteúdo principal */}
            <Box flex={1} mt={2} mb={2}>
                {children}
            </Box>

            {/* Rodapé */}
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