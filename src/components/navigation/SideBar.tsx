
import { NavLink }                                  from 'react-router';

import { Box, List, ListItemButton, Typography }    from '@mui/material';

import styles                                       from '@/styles/navigation.styles';
import { NAVIGATION_ITEMS }                         from '@/configs/constants';

type SidebarProps = {
    onNavigate?: () => void;
};

/**
 * Renderiza a marca e os links de navegação da aplicação.
 * @param props - Callback opcional executado ao selecionar um link.
 * @returns Menu lateral com indicação da rota ativa.
 */
function Sidebar(props: SidebarProps) {

    return (
        <Box sx={styles.container}>
            <Box sx={styles.brand}>
                <Typography sx={styles.brandName}>
                Thaisla
                </Typography>

                <Typography sx={styles.brandSubtitle}>
                BAKES
                </Typography>
            </Box>

            <Box
                component="nav"
                aria-label="Menu principal"
                sx={styles.navigation}
            >
                <List sx={styles.list}>
                {NAVIGATION_ITEMS.map((item) => (
                    <ListItemButton
                        key={item.path}
                        component={NavLink}
                        to={item.path}
                        onClick={props.onNavigate}
                        sx={styles.link}
                    >
                    <Typography>{item.label}</Typography>
                    </ListItemButton>
                ))}
                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;