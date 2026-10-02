import { Navigate, Route, Routes }  from 'react-router';

import MainLayout                   from '@/layouts/MainLayout';
import PlaceholderPage              from '@/pages/PlaceholderPage';
import { NAVIGATION_ITEMS }         from '@/configs/constants';

/**
 * Define as rotas e associa as páginas ao layout principal.
 * @returns Árvore de navegação da aplicação.
 */
function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route
                    index
                    element={<Navigate to="/dashboard" replace />}
                />

                {NAVIGATION_ITEMS.map((item) => (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={<PlaceholderPage title={item.label} />}
                    />
                ))}

                <Route
                    path="*"
                    element={<PlaceholderPage title="Página não encontrada" />}
                />
            </Route>
        </Routes>
    );
}

export default AppRoutes;