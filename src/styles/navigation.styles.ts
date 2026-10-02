const navigationStyles = {
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
    },
    brand: {
        px: 3,
        py: 4,
        textAlign: 'center',
    },
    brandName: {
        fontFamily: 'Georgia, serif',
        fontSize: '2.5rem',
        color: 'primary.main',
    },
    brandSubtitle: {
        letterSpacing: '0.45em',
        pl: '0.45em',
        fontSize: '0.75rem',
        color: 'primary.main',
    },
    navigation: {
        flex: 1,
        px: 2,
        overflowY: 'auto',
    },
    list: {
        p: 0,
    },
    link: {
        mb: 1,
        px: 2,
        py: 1.5,
        borderRadius: '8px',
        color: 'text.primary',
        '&.active': {
            bgcolor: 'action.selected',
            color: 'primary.main',
            '& .MuiTypography-root': {
                fontWeight: 700,
            },
        },
        '&:hover': {
            bgcolor: 'action.hover',
        },
    },
};

export default navigationStyles;