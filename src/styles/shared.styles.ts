const sharedStyles = {
    page: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
    },
    pageHeader: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: 2,
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    },
    mutedText: {
        color: 'text.secondary',
    },
    cardContent: {
        p: 3,
        '&:last-child': {
            pb: 3,
        },
    },
};

export default sharedStyles;