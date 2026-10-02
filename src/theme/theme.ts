import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode:               'light',
        primary: {
            main:           '#51372B',
            contrastText:   '#FFFFFF',
        },
        secondary: {
            main:           '#B9825A',
            contrastText:   '#241810',
        },
        background: {
            default:        '#F7F2EB',
            paper:          '#FFFFFF',
        },
        text: {
            primary:        '#51372B',
            secondary:      '#77665C',
        },
        divider:            '#E8DED4',
            success: {
                main:       '#52734D',
            },
        warning: {
            main:           '#9A5B16',
        },
        error: {
            main:           '#B43C2E',
        },
    },

    typography: {
        fontFamily:         'Arial, Helvetica, sans-serif',
        h1: {
            fontFamily:     'Georgia, serif',
            fontSize:       '2.5rem',
            fontWeight:     600,
        },
        h2: {
            fontFamily:     'Georgia, serif',
            fontSize:       '2rem',
            fontWeight:     600,
        },
        h3: {
            fontFamily:     'Georgia, serif',
            fontSize:       '1.5rem',
            fontWeight:     600,
        },
        h4: {
            fontFamily:     'Georgia, serif',
            fontSize:       '1.25rem',
            fontWeight:     600,
        },
        button: {
            textTransform:  'none',
            fontWeight:     600,
        },
        body1: {
            fontSize:       '1rem',
            lineHeight:     1.6,
        },
        body2: {
            fontSize:       '0.875rem',
            lineHeight:     1.5,
        },
    },

    spacing: 8,

    shape: {
        borderRadius:       12,
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius:   8,
                    padding:        '10px 20px',
                },  
            },
        },

        MuiPaper: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid #E8DED4',
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius:    8,
                    backgroundColor: '#FFFFFF',
                },
            },
        },

        MuiTableCell: {
            styleOverrides: {
                head: {
                    backgroundColor: '#F3ECE5',
                    color:           '#51372B',
                    fontWeight:      600,
                },
            },
        },

        MuiCssBaseline: {
            styleOverrides: {
                '#root': {
                    minHeight: '100vh',
                },
            },
        },
    },
});