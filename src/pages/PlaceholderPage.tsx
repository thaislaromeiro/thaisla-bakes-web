import styles                   from '@/styles/shared.styles';
import { Box, Typography }      from '@mui/material';

type PlaceholderPageProps = {
    title: string;
};

/**
 * Exibe o título de uma tela ainda em implementação.
 * @param props - Título da página.
 * @returns Conteúdo provisório para validar a navegação.
 */
function PlaceholderPage(props: PlaceholderPageProps) {

    return (
        <Box sx={styles.section}>
            <Typography variant="h2" component="h1">
                {props.title}
            </Typography>

            <Typography sx={styles.mutedText}>
                Esta tela será implementada nas próximas etapas.
            </Typography>
        </Box>
    );
}

export default PlaceholderPage;