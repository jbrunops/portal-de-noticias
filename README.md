# Portal Cachoeirinha

Portal de notícias local para Cachoeirinha e região metropolitana, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Tecnologias

- Next.js 14 com App Router
- TypeScript para tipagem estática
- Tailwind CSS para estilização
- Lucide React para ícones
- Design responsivo mobile-first

## Funcionalidades

- Header responsivo com navegação e menu mobile
- Breaking News com rotação automática
- Seção principal com notícia em destaque e itens relacionados
- Notícia secundária com indicadores de galeria
- Grid de três colunas para notícias principais
- Grid de notícias menores em layout responsivo
- Seção de blogs e colunas com perfis de colunistas
- Sistema de categorias com badges coloridas
- Efeitos hover e transições suaves

## Estrutura de Componentes

```
components/
├── Header.tsx              # Navegação principal
├── Layout.tsx              # Estrutura base
├── BreakingNews.tsx        # Barra de notícias urgentes
├── MainNewsSection.tsx     # Seção principal com título grande
├── SecondaryNewsCard.tsx   # Card de notícia secundária
├── ThreeColumnNews.tsx     # Grid de três colunas
├── NewsGrid.tsx            # Grid de notícias menores
└── BlogsSection.tsx        # Seção de blogs e colunas
```

## Design System

### Cores
- Portal Red: `#CC0000`
- Portal Dark: `#000000`
- Portal Gray: `#333333`

### Tipografia
- Fonte principal: Helvetica Neue, Arial, sans-serif
- Hierarquia clara com títulos em negrito

### Layout
- Grid system responsivo
- Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- Espaçamento consistente com Tailwind

## Arquitetura

- App Router do Next.js 14
- Componentes funcionais com TypeScript
- Props tipadas para reutilização
- Estrutura modular e escalável
- Hot reload para desenvolvimento

## Scripts

- `npm run dev` - Desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código
