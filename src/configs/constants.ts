import INavigationItem from "@/interfaces/navigation/INavigationItem";

export const SIDEBAR_WIDTH = 260;

export const NAVIGATION_ITEMS: readonly INavigationItem[] = [
  { label: 'Dashboard',     path: '/dashboard'      },
  { label: 'Vendas',        path: '/vendas'         },
  { label: 'Produção',      path: '/producao'       },
  { label: 'Produtos',      path: '/produtos'       },
  { label: 'Receitas',      path: '/receitas'       },
  { label: 'Estoque',       path: '/estoque'        },
  { label: 'Compras',       path: '/compras'        },
  { label: 'Financeiro',    path: '/financeiro'     },
  { label: 'Investimentos', path: '/investimentos'  },
];