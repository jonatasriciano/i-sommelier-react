// /Users/jonatas/Documents/Projects/i-sommelier-react/frontend/src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#8B0000', // Cor vinho
        },
        secondary: {
            main: '#FFD700', // Dourado
        },
        background: {
            default: '#F5F5F5', // Fundo claro
            paper: '#FFFFFF', // Fundo para cartões e painéis
        },
        text: {
            primary: '#333333', // Preto suave
            secondary: '#8B0000', // Cor vinho para textos secundários
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default theme;