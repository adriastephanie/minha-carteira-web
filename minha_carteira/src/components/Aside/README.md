# Documentação

O componente Aside é um Functional Component do React, que utiliza TypeScript e Styled Components para estilização. Ele também faz uso de ícones da biblioteca react-icons para melhorar a interface do usuário.

## Estrutura do JSX

O componente Aside retorna a seguinte estrutura JSX:

Container: Componente que envolve todo o conteúdo do menu lateral.

Header: Cabeçalho do menu lateral que contém:

LogImg: Exibe a logomarca da aplicação.
Title: Exibe o título "Minha carteira".
MenuContainer: Contém os itens de navegação do menu.

MenuItemLink: Cada item de menu é um link que redireciona para uma rota específica da aplicação. Cada link contém um ícone e um texto descritivo:

Dashboard: Redireciona para a rota /dashboard e exibe o ícone MdDashboard.

Entradas: Redireciona para a rota /list/entry-balance e exibe o ícone MdArrowUpward.

Saídas: Redireciona para a rota /list/exit-balance e exibe o ícone MdArrowDownward.

Sair: Link para sair da aplicação, exibindo o ícone MdExitToApp.

## Descrição

- Container: Componente estilizado que envolve todo o conteúdo do menu lateral.
-Header: Cabeçalho do menu lateral que contém a logomarca e o título da aplicação.
- LogImg: Exibe a imagem da logomarca.
- Title: Exibe o título "Minha carteira".
- MenuContainer: Contém os itens de navegação.
- MenuItemLink: Cada item de menu é um link estilizado que redireciona para uma rota específica da aplicação.
- MdDashboard: Ícone para o link do Dashboard.
- MdArrowUpward: Ícone para o link de Entradas.
- MdArrowDownward: Ícone para o link de Saídas.
- MdExitToApp: Ícone para o link de Sair.

## Estilização 

A estilização do componente é feita através de Styled Components, que são importados do arquivo ./styles. Esses componentes estilizados são responsáveis por definir o layout e a aparência do menu lateral.