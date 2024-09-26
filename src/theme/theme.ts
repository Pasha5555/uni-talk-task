import { Palette, createTheme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
    interface Theme {
        palette: Palette;
    }

    interface TypographyVariants {
        tableHeader: React.CSSProperties;
        focusedTableCell: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        tableHeader?: React.CSSProperties;
        focusedTableCell?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        tableHeader: true;
        focusedTableCell: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#f04259',
            light: 'lightgrey'
        },
        secondary: {
            light: '#cae0ed',
            main: '#668099'
        }
    },
    typography: {
        tableHeader: {
            fontWeight: 600,
            color: '#668099',
        },
        focusedTableCell: {
            fontSize: 15
        }
    },
});

export default theme;