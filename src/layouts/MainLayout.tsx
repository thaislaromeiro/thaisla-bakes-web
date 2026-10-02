import { Outlet }       from 'react-router';
import { useState }     from 'react';

import { 
    Box,    Typography,
    Drawer, IconButton,  
}                       from '@mui/material';
import MenuOutlined     from '@mui/icons-material/MenuOutlined';

import styles           from '@/styles/layout.styles';
import Sidebar          from '@/components/navigation/SideBar';

/**
 * Organiza a navegação lateral e a área das páginas.
 * @returns Layout com menu fixo no desktop e temporário no celular.
 */
function MainLayout() {
    const [mobileOpen, setMobileOpen] = useState(false);

    /**
     * Abre a navegação temporária.
     * @returns Nenhum valor.
     */
    function openMobileMenu(): void {
        setMobileOpen(true);
    }

    /**
     * Fecha a navegação temporária.
     * @returns Nenhum valor.
     */
    function closeMobileMenu(): void {
        setMobileOpen(false);
    }

    return (
        <Box sx={styles.root}>
            <Drawer variant="permanent" sx={styles.desktopDrawer}>
                <Sidebar />
            </Drawer>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={closeMobileMenu}
                sx={styles.mobileDrawer}
            >
                <Sidebar onNavigate={closeMobileMenu} />
            </Drawer>

            <Box sx={styles.content}>
                <Box component="header" sx={styles.mobileHeader}>
                    <IconButton
                        aria-label="Abrir menu principal"
                        onClick={openMobileMenu}
                    >
                        <MenuOutlined />
                    </IconButton>

                    <Typography sx={styles.mobileHeaderTitle}>
                        Thaisla Bakes
                    </Typography>
                </Box>

                <Box component="main" sx={styles.main}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default MainLayout;