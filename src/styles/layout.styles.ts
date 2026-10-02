import { SIDEBAR_WIDTH } from '@/configs/constants';

const layoutStyles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    desktopDrawer: {
        display: { xs: 'none', md: 'block' },
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
            borderRight: '1px solid',
            borderColor: 'divider',
        },
    },
    mobileDrawer: {
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
            width: SIDEBAR_WIDTH,
            boxSizing: 'border-box',
        },
    },
    content: {
        flex: 1,
        minWidth: 0,
    },
    mobileHeader: {
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
        gap: 1,
        px: 2,
        py: 1,
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
    },
    mobileHeaderTitle: {
        fontWeight: 600,
    },
    main: {
        p: { xs: 2, md: 4 },
    },
};

export default layoutStyles;