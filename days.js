// Array com todos os dias do desafio 
console.log("Script carregado!");
const days = [
    {
        dia: 1,
        tema: "Fundamentos de HTML",
        descricao: "Aprender as bases de HTML: tags, estrutura de um site e mais.",
        desafioPratico: "Criar uma página simples com texto e imagens.",
        videoSugerido: "https://www.youtube.com/watch?v=1PnUq0sTXrw",
        textoTema: "HTML é a linguagem de marcação usada para estruturar o conteúdo na web. Você aprenderá a criar páginas simples, com títulos, parágrafos, links, imagens e muito mais."
    },
    {
        dia: 2,
        tema: "CSS Básico",
        descricao: "Estudar como estilizar páginas HTML com CSS.",
        desafioPratico: "Estilizar a página HTML criada no dia anterior.",
        videoSugerido: "https://www.youtube.com/watch?v=1Rs2YXj0p4U",
        textoTema: "CSS é usado para estilizar o conteúdo da web. Você aprenderá como aplicar cores, fontes, margens, padding e layout responsivo."
    },
    {
        dia: 3,
        tema: "JavaScript Básico",
        descricao: "Aprender sobre variáveis, operadores e tipos de dados em JavaScript.",
        desafioPratico: "Criar uma calculadora simples usando JavaScript.",
        videoSugerido: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        textoTema: "JavaScript é a linguagem de programação usada para adicionar interatividade às páginas web. Neste dia, você aprenderá sobre variáveis, operadores e tipos de dados."
    },
    {
        dia: 4,
        tema: "Funções em JavaScript",
        descricao: "Estudar como criar e utilizar funções em JavaScript.",
        desafioPratico: "Criar uma função para calcular a média de notas.",
        videoSugerido: "https://www.youtube.com/watch?v=3j1zqupC4NE",
        textoTema: "Funções em JavaScript permitem que você organize seu código e crie blocos reutilizáveis. Você aprenderá a criar funções simples e passá-las como parâmetros."
    },
    {
        dia: 5,
        tema: "DOM (Document Object Model)",
        descricao: "Entender como interagir com o HTML através do JavaScript.",
        desafioPratico: "Criar um botão que altera o conteúdo de uma página.",
        videoSugerido: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
        textoTema: "O DOM é a interface entre o JavaScript e a estrutura HTML. Você aprenderá a acessar e modificar elementos HTML usando JavaScript."
    },
    {
        dia: 6,
        tema: "Introdução ao Git e GitHub",
        descricao: "Aprender como versionar código usando Git e armazená-lo no GitHub.",
        desafioPratico: "Criar um repositório no GitHub e versionar um projeto simples.",
        videoSugerido: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
        textoTema: "Git é um sistema de controle de versão que permite gerenciar mudanças no código. Você aprenderá a usar Git e GitHub para controlar a evolução do seu código e colaborar com outros desenvolvedores."
    },
    {
        dia: 7,
        tema: "Algoritmos e Lógica de Programação",
        descricao: "Aprofundar-se em algoritmos e aprender a resolver problemas de programação.",
        desafioPratico: "Resolver problemas de lógica e algoritmos em JavaScript.",
        videoSugerido: "https://www.youtube.com/watch?v=8hly31xKli0",
        textoTema: "A lógica de programação é a base de todo desenvolvedor. Neste dia, você aprenderá como criar algoritmos eficientes para resolver problemas comuns em programação."
    },
    {
        dia: 8,
        tema: "Introdução ao Node.js",
        descricao: "Estudar a plataforma Node.js para back-end.",
        desafioPratico: "Criar um servidor simples com Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
        textoTema: "Node.js é um ambiente de execução JavaScript no lado do servidor. Você aprenderá a configurar um servidor básico e lidar com requisições HTTP."
    },
    {
        dia: 9,
        tema: "Trabalhando com APIs RESTful",
        descricao: "Aprender a consumir APIs externas e a criar a sua própria API RESTful.",
        desafioPratico: "Criar uma API RESTful simples com Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a8",
        textoTema: "APIs RESTful permitem que sistemas se comuniquem de forma eficiente. Você aprenderá a consumir e a criar APIs para enviar e receber dados."
    },
    {
        dia: 10,
        tema: "Banco de Dados Relacional - SQL",
        descricao: "Introdução ao SQL e ao banco de dados relacional.",
        desafioPratico: "Criar um banco de dados simples com MySQL ou PostgreSQL.",
        videoSugerido: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        textoTema: "SQL é a linguagem usada para manipular dados em bancos de dados relacionais. Você aprenderá a criar tabelas, inserir dados e consultar informações em um banco."
    },
    {
        dia: 11,
        tema: "JavaScript Avançado",
        descricao: "Estudar conceitos mais avançados de JavaScript como closures e assíncronismo.",
        desafioPratico: "Criar uma função com closure e utilizar promessas.",
        videoSugerido: "https://www.youtube.com/watch?v=-a6SHq-Vg7A",
        textoTema: "Avançar no JavaScript é fundamental para dominar a linguagem. Você aprenderá sobre closure, funções assíncronas e promessas."
    },
    {
        dia: 12,
        tema: "Introdução ao Framework React",
        descricao: "Estudar o básico sobre React, criando componentes e renderizando dados.",
        desafioPratico: "Criar um componente simples e exibir dados em uma lista.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA",
        textoTema: "React é uma das bibliotecas mais populares para o desenvolvimento de interfaces. Você aprenderá como criar e renderizar componentes."
    },
    {
        dia: 13,
        tema: "Componentes e Props no React",
        descricao: "Entender como usar componentes e passar dados com props.",
        desafioPratico: "Criar um componente de cartão e passar dados para ele via props.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo",
        textoTema: "Componentes e Props são os blocos de construção no React. Você aprenderá a criar componentes reutilizáveis e como passar dados entre eles."
    },
    {
        dia: 14,
        tema: "State e Hooks no React",
        descricao: "Estudar como gerenciar o estado e utilizar hooks no React.",
        desafioPratico: "Criar um contador simples com hooks (useState).",
        videoSugerido: "https://www.youtube.com/watch?v=O6P86uwfdR0",
        textoTema: "State e Hooks são essenciais para criar aplicações dinâmicas no React. Você aprenderá como gerenciar o estado de componentes e como usar hooks como useState e useEffect."
    },
    {
        dia: 15,
        tema: "Manipulação de Eventos no React",
        descricao: "Estudar como manipular eventos como cliques, teclas e formulários.",
        desafioPratico: "Criar um formulário simples de login e processar os dados com eventos.",
        videoSugerido: "https://www.youtube.com/watch?v=Te2ZoVQ2IsA",
        textoTema: "No React, a manipulação de eventos é similar ao JavaScript convencional, mas com algumas diferenças. Você aprenderá como lidar com interações de usuário e manipular dados dinamicamente."
    },
    {
        dia: 16,
        tema: "React Router",
        descricao: "Aprender a usar o React Router para navegação entre páginas.",
        desafioPratico: "Criar uma aplicação simples com múltiplas páginas e navegação.",
        videoSugerido: "https://www.youtube.com/watch?v=Law7wfdg_ls",
        textoTema: "React Router é a solução oficial para navegação em aplicações React. Você aprenderá como configurar rotas e navegar entre páginas de forma eficiente."
    },
    {
        dia: 17,
        tema: "Forms e Validação no React",
        descricao: "Entender como trabalhar com formulários e validação de dados no React.",
        desafioPratico: "Criar um formulário de cadastro com validação de campos.",
        videoSugerido: "https://www.youtube.com/watch?v=mfMf7XEZ2_g",
        textoTema: "Os formulários são fundamentais em aplicações web. Você aprenderá a criar formulários dinâmicos e validar entradas do usuário de maneira eficiente no React."
    },
    {
        dia: 18,
        tema: "Consumindo APIs com React",
        descricao: "Aprender a consumir APIs e exibir dados dinâmicos na interface.",
        desafioPratico: "Criar uma aplicação que consome dados de uma API pública (ex: JSONPlaceholder).",
        videoSugerido: "https://www.youtube.com/watch?v=R4sO_Xnzj9k",
        textoTema: "Consumir APIs é essencial para modernizar sua aplicação. Você aprenderá a fazer requisições HTTP usando fetch e exibir os dados na interface do React."
    },
    {
        dia: 19,
        tema: "Context API no React",
        descricao: "Estudar a Context API para compartilhar dados entre componentes sem passar props.",
        desafioPratico: "Criar um tema escuro/claro para a aplicação usando Context API.",
        videoSugerido: "https://www.youtube.com/watch?v=35lXWvCuM8o",
        textoTema: "A Context API é uma forma eficiente de compartilhar dados em toda a árvore de componentes. Você aprenderá a evitar o prop drilling e gerenciar o estado global da aplicação."
    },
    {
        dia: 20,
        tema: "Introdução ao Node.js e Express",
        descricao: "Estudar como configurar um servidor com Node.js e o framework Express.",
        desafioPratico: "Criar um servidor básico com Node.js e Express.",
        videoSugerido: "https://www.youtube.com/watch?v=1NrHfHjfihQ",
        textoTema: "Node.js é uma plataforma JavaScript que permite rodar código do lado do servidor. Express é um framework que facilita a criação de APIs e servidores no Node.js."
    },
    {
        dia: 21,
        tema: "Banco de Dados com MongoDB",
        descricao: "Estudar o MongoDB, um banco de dados NoSQL, e como interagir com ele usando Node.js.",
        desafioPratico: "Criar um CRUD simples com MongoDB e Express.",
        videoSugerido: "https://www.youtube.com/watch?v=7r4xVDI2vho",
        textoTema: "MongoDB é um banco de dados NoSQL, ótimo para armazenar dados de forma flexível. Você aprenderá a interagir com o MongoDB usando o Mongoose em Node.js."
    },
    {
        dia: 22,
        tema: "Autenticação de Usuário com JWT",
        descricao: "Entender como implementar autenticação usando JWT (JSON Web Tokens) em Node.js.",
        desafioPratico: "Criar um sistema de login com autenticação JWT.",
        videoSugerido: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
        textoTema: "JWT é uma forma segura e eficiente de transmitir informações entre o cliente e o servidor. Você aprenderá como implementar a autenticação com JWT em uma aplicação Node.js."
    },
    {
        dia: 23,
        tema: "Upload de Arquivos com Node.js",
        descricao: "Estudar como fazer upload de arquivos para o servidor usando Node.js.",
        desafioPratico: "Criar uma funcionalidade de upload de imagens com Express e Multer.",
        videoSugerido: "https://www.youtube.com/watch?v=LRH03RGrc9A",
        textoTema: "O upload de arquivos é uma funcionalidade comum em aplicações web. Você aprenderá como permitir que os usuários façam upload de arquivos, como imagens, para o servidor."
    },
    {
        dia: 24,
        tema: "WebSockets no Node.js",
        descricao: "Aprender a usar WebSockets para comunicação em tempo real com Node.js.",
        desafioPratico: "Criar um chat em tempo real usando WebSockets com Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=1TtmuWv7hYg",
        textoTema: "WebSockets permitem comunicação bidirecional entre o servidor e o cliente em tempo real. Você aprenderá a criar uma aplicação de chat com WebSockets no Node.js."
    },
    {
        dia: 25,
        tema: "Introdução ao Redux",
        descricao: "Estudar o Redux para gerenciar o estado da aplicação de forma centralizada.",
        desafioPratico: "Criar uma aplicação simples usando Redux para gerenciar o estado.",
        videoSugerido: "https://www.youtube.com/watch?v=poQXNp9dP6o",
        textoTema: "Redux é uma biblioteca para gerenciar o estado de forma previsível em aplicações JavaScript. Você aprenderá como integrar o Redux no seu projeto React."
    },
    {
        dia: 26,
        tema: "Arquitetura de Software (Padrões de Projeto)",
        descricao: "Estudar padrões de projeto e boas práticas em arquiteturas de software.",
        desafioPratico: "Aplicar o padrão de projeto MVC em um projeto Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=QCoZtP_N2Yw",
        textoTema: "Padrões de projeto são soluções reutilizáveis para problemas comuns em programação. Você aprenderá como aplicar o padrão MVC para organizar seu código."
    },
    {
        dia: 27,
        tema: "Testes Unitários com Jest",
        descricao: "Aprender a criar testes unitários para suas aplicações com Jest.",
        desafioPratico: "Escrever testes unitários para funções em JavaScript usando Jest.",
        videoSugerido: "https://www.youtube.com/watch?v=7r4xVDI2vho",
        textoTema: "Testes unitários são essenciais para garantir que seu código esteja funcionando corretamente. Você aprenderá como usar o Jest para testar suas funções e componentes."
    },
    {
        dia: 28,
        tema: "Integração Contínua e Deploy",
        descricao: "Estudar como automatizar o deploy de suas aplicações usando ferramentas de integração contínua.",
        desafioPratico: "Configurar uma pipeline de CI/CD com GitHub Actions.",
        videoSugerido: "https://www.youtube.com/watch?v=KeBwdt3zPQg",
        textoTema: "Integração contínua e deploy automatizado permitem que seu código seja testado e enviado automaticamente para produção. Você aprenderá a configurar uma pipeline com GitHub Actions."
    },
    {
        dia: 29,
        tema: "Desenvolvimento de Aplicações Responsivas",
        descricao: "Estudar como criar interfaces responsivas que funcionam bem em dispositivos móveis.",
        desafioPratico: "Criar uma página responsiva com Grid e Flexbox.",
        videoSugerido: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        textoTema: "A responsividade é crucial para garantir que suas aplicações funcionem bem em dispositivos de diferentes tamanhos. Você aprenderá a criar layouts responsivos usando Flexbox e Grid."
    },
    {
        dia: 30,
        tema: "Progressive Web Apps (PWA)",
        descricao: "Estudar como criar aplicações web progressivas que funcionam offline.",
        desafioPratico: "Converter sua aplicação em um PWA simples.",
        videoSugerido: "https://www.youtube.com/watch?v=4NxkKnZnKyA",
        textoTema: "Progressive Web Apps (PWAs) são aplicações que oferecem a experiência de um app nativo. Você aprenderá a converter uma aplicação React em um PWA."
    },
    {
        dia: 31,
        tema: "Acessibilidade na Web",
        descricao: "Estudar como criar sites acessíveis para todos os usuários.",
        desafioPratico: "Melhorar a acessibilidade de um site com boas práticas (aria-labels, contraste, etc).",
        videoSugerido: "https://www.youtube.com/watch?v=9f-Xes5yxd8",
        textoTema: "Acessibilidade é crucial para garantir que todos os usuários possam acessar sua aplicação, incluindo pessoas com deficiência. Você aprenderá as melhores práticas para tornar seus sites acessíveis."
    },
    {
        dia: 32,
        tema: "Desenvolvimento de APIs RESTful com Node.js",
        descricao: "Estudar como criar APIs RESTful com Node.js e Express.",
        desafioPratico: "Criar uma API RESTful simples para gerenciar um recurso (ex: usuários).",
        videoSugerido: "https://www.youtube.com/watch?v=1NrHfHjfihQ",
        textoTema: "APIs RESTful são um padrão para criação de sistemas distribuídos. Você aprenderá como criar endpoints para manipular dados e como interagir com bancos de dados."
    },
    {
        dia: 33,
        tema: "Autenticação de Usuário com OAuth",
        descricao: "Estudar a implementação de autenticação usando OAuth 2.0.",
        desafioPratico: "Criar um sistema de login com Google OAuth.",
        videoSugerido: "https://www.youtube.com/watch?v=6s4wboG9AXA",
        textoTema: "OAuth 2.0 é um padrão de autenticação amplamente utilizado. Você aprenderá como permitir que os usuários façam login com suas contas de terceiros, como o Google."
    },
    {
        dia: 34,
        tema: "Estruturas de Dados em JavaScript",
        descricao: "Estudar as principais estruturas de dados como arrays, listas, pilhas, filas e mapas.",
        desafioPratico: "Implementar uma pilha e uma fila em JavaScript.",
        videoSugerido: "https://www.youtube.com/watch?v=R9ZdhpBe4wY",
        textoTema: "Estruturas de dados são essenciais para organizar e manipular dados. Você aprenderá a usar diferentes estruturas, como arrays, pilhas e filas, para resolver problemas de forma eficiente."
    },
    {
        dia: 35,
        tema: "Algoritmos de Ordenação",
        descricao: "Estudar os principais algoritmos de ordenação, como Bubble Sort, Quick Sort e Merge Sort.",
        desafioPratico: "Implementar o algoritmo Quick Sort em JavaScript.",
        videoSugerido: "https://www.youtube.com/watch?v=4VZlK9KYJ4Q",
        textoTema: "Algoritmos de ordenação são fundamentais para organizar dados. Você aprenderá como implementar e otimizar diferentes algoritmos de ordenação."
    },
    {
        dia: 36,
        tema: "Introdução ao TypeScript",
        descricao: "Estudar os conceitos básicos do TypeScript, uma linguagem baseada em JavaScript com tipagem estática.",
        desafioPratico: "Converter um código JavaScript simples para TypeScript.",
        videoSugerido: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
        textoTema: "TypeScript traz uma camada extra de segurança com a tipagem estática. Você aprenderá como integrar TypeScript ao seu projeto e como usar suas vantagens."
    },
    {
        dia: 37,
        tema: "Desenvolvimento de Aplicações com React e TypeScript",
        descricao: "Estudar como integrar React com TypeScript para garantir um desenvolvimento mais robusto.",
        desafioPratico: "Converter um projeto React para TypeScript.",
        videoSugerido: "https://www.youtube.com/watch?v=1qj5Y7x7Pdc",
        textoTema: "React e TypeScript se complementam, permitindo que você crie aplicações mais seguras e escaláveis. Você aprenderá como trabalhar com tipos e interfaces no TypeScript."
    },
    {
        dia: 38,
        tema: "Design Patterns: Singleton e Factory",
        descricao: "Estudar os padrões de design Singleton e Factory para organização e reutilização de código.",
        desafioPratico: "Implementar os padrões Singleton e Factory em um projeto de backend.",
        videoSugerido: "https://www.youtube.com/watch?v=llYk__l_Jw0",
        textoTema: "Padrões de design ajudam a resolver problemas recorrentes de forma eficiente. Você aprenderá como aplicar os padrões Singleton e Factory no seu código."
    },
    {
        dia: 39,
        tema: "Testes de Integração com Jest",
        descricao: "Estudar testes de integração e como testá-los com Jest.",
        desafioPratico: "Escrever testes de integração para uma API simples usando Jest.",
        videoSugerido: "https://www.youtube.com/watch?v=ZEAyJlC8QVo",
        textoTema: "Testes de integração garantem que diferentes partes de seu sistema funcionem corretamente juntas. Você aprenderá como escrever e rodar testes de integração em seus projetos."
    },
    {
        dia: 40,
        tema: "Debugging em JavaScript",
        descricao: "Estudar técnicas de debugging para identificar e corrigir erros em seu código.",
        desafioPratico: "Identificar e corrigir erros em um código JavaScript simples.",
        videoSugerido: "https://www.youtube.com/watch?v=vRIrONu1JNY",
        textoTema: "O debugging é uma habilidade essencial para programadores. Você aprenderá técnicas para identificar, entender e corrigir erros em seu código de forma eficiente."
    },
    {
        dia: 41,
        tema: "Testes de UI com React Testing Library",
        descricao: "Estudar como testar a interface de usuário em aplicações React usando a React Testing Library.",
        desafioPratico: "Escrever testes para componentes React utilizando a React Testing Library.",
        videoSugerido: "https://www.youtube.com/watch?v=3pNjMF5XzQ8",
        textoTema: "Testes de UI são fundamentais para garantir que sua interface funcione corretamente. Você aprenderá como escrever testes automatizados para componentes React."
    },
    {
        dia: 42,
        tema: "Aplicações com WebSockets e React",
        descricao: "Estudar como integrar WebSockets em uma aplicação React para comunicação em tempo real.",
        desafioPratico: "Criar uma aplicação de chat em tempo real usando WebSockets e React.",
        videoSugerido: "https://www.youtube.com/watch?v=VdXkzBhP8XE",
        textoTema: "WebSockets permitem comunicação bidirecional entre o cliente e o servidor. Você aprenderá a integrar WebSockets em uma aplicação React para funcionalidades em tempo real."
    },
    {
        dia: 43,
        tema: "Deploy de Aplicações em Heroku",
        descricao: "Estudar como fazer o deploy de suas aplicações em plataformas como o Heroku.",
        desafioPratico: "Fazer o deploy de uma aplicação Node.js simples no Heroku.",
        videoSugerido: "https://www.youtube.com/watch?v=8YOI2c4Rzfc",
        textoTema: "O deploy em nuvem facilita a disponibilização das suas aplicações na internet. Você aprenderá a fazer o deploy de aplicações Node.js no Heroku."
    },
    {
        dia: 44,
        tema: "Desenvolvimento com Firebase",
        descricao: "Estudar como integrar o Firebase, um serviço de backend, em suas aplicações.",
        desafioPratico: "Criar um sistema de autenticação de usuários usando Firebase.",
        videoSugerido: "https://www.youtube.com/watch?v=9kRgVxULbag",
        textoTema: "Firebase oferece uma solução backend como serviço, facilitando autenticação, banco de dados em tempo real, e muito mais. Você aprenderá a integrar o Firebase no seu projeto."
    },
    {
        dia: 45,
        tema: "Criação de API com GraphQL",
        descricao: "Estudar como criar uma API com GraphQL, um sistema de consulta de dados eficiente.",
        desafioPratico: "Criar uma API simples com GraphQL para consultar dados.",
        videoSugerido: "https://www.youtube.com/watch?v=ed8SzALpx1Q",
        textoTema: "GraphQL é uma alternativa poderosa ao REST. Você aprenderá como criar e consumir uma API usando GraphQL, tornando as consultas de dados mais eficientes."
    },
    {
        dia: 46,
        tema: "API com Next.js e GraphQL",
        descricao: "Estudar como usar Next.js junto com GraphQL para criar aplicações eficientes.",
        desafioPratico: "Criar uma aplicação simples com Next.js e consumir uma API GraphQL.",
        videoSugerido: "https://www.youtube.com/watch?v=F6P97H_VVX8",
        textoTema: "Next.js é uma poderosa framework React que facilita o desenvolvimento de aplicações e páginas estáticas. Você aprenderá como usar Next.js com GraphQL para otimizar suas consultas."
    },
    {
        dia: 47,
        tema: "Desenvolvimento com Docker",
        descricao: "Estudar como utilizar o Docker para criar containers de suas aplicações.",
        desafioPratico: "Criar um container Docker para uma aplicação Node.js simples.",
        videoSugerido: "https://www.youtube.com/watch?v=YFl2mCHdv24",
        textoTema: "O Docker permite criar containers que garantem que sua aplicação rode de forma consistente em qualquer ambiente. Você aprenderá a criar e gerenciar containers Docker para suas aplicações."
    },
    {
        dia: 48,
        tema: "Testes Unitários com Mocha e Chai",
        descricao: "Estudar como realizar testes unitários usando Mocha e Chai para Node.js.",
        desafioPratico: "Escrever testes unitários para funções JavaScript com Mocha e Chai.",
        videoSugerido: "https://www.youtube.com/watch?v=1tRL5k3lKHY",
        textoTema: "Testes unitários são fundamentais para garantir que as funções individuais do seu código funcionem corretamente. Você aprenderá como escrever e rodar testes unitários usando Mocha e Chai."
    },
    {
        dia: 49,
        tema: "Introdução ao Cloud Computing",
        descricao: "Estudar os conceitos fundamentais de computação em nuvem e serviços como AWS, Google Cloud e Azure.",
        desafioPratico: "Fazer o deploy de uma aplicação simples na AWS.",
        videoSugerido: "https://www.youtube.com/watch?v=Ia-UEYYR44s",
        textoTema: "A computação em nuvem oferece soluções escaláveis e de baixo custo para hospedar suas aplicações. Você aprenderá os fundamentos de Cloud Computing e como usar AWS para hospedar suas aplicações."
    },
    {
        dia: 50,
        tema: "Desenvolvimento de Microserviços",
        descricao: "Estudar como quebrar grandes sistemas em microserviços independentes e escaláveis.",
        desafioPratico: "Criar uma aplicação simples utilizando a arquitetura de microserviços.",
        videoSugerido: "https://www.youtube.com/watch?v=CzF-V5NWj2g",
        textoTema: "A arquitetura de microserviços ajuda a dividir aplicações grandes em componentes menores e independentes. Você aprenderá a criar microserviços para facilitar a escalabilidade e manutenção."
    },
    {
        dia: 51,
        tema: "Cache com Redis",
        descricao: "Estudar como usar o Redis para melhorar a performance de suas aplicações com caching.",
        desafioPratico: "Implementar um sistema de cache em uma API utilizando Redis.",
        videoSugerido: "https://www.youtube.com/watch?v=Hbt56gFj998",
        textoTema: "O Redis é uma base de dados em memória usada para caching, o que ajuda a melhorar a performance de aplicações. Você aprenderá como integrar o Redis em uma API para otimizar o desempenho."
    },
    {
        dia: 52,
        tema: "Introdução ao MongoDB",
        descricao: "Estudar os conceitos básicos do MongoDB, uma base de dados NoSQL popular.",
        desafioPratico: "Criar um banco de dados MongoDB simples para armazenar dados de usuários.",
        videoSugerido: "https://www.youtube.com/watch?v=-56x56UppqQ",
        textoTema: "MongoDB é um banco de dados NoSQL muito usado para armazenar dados flexíveis e escaláveis. Você aprenderá a configurar e interagir com o MongoDB em suas aplicações."
    },
    {
        dia: 53,
        tema: "Autenticação JWT em Node.js",
        descricao: "Estudar como implementar autenticação baseada em JSON Web Tokens (JWT).",
        desafioPratico: "Criar um sistema de login com JWT em uma API Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=7nafaH9SddU",
        textoTema: "JWT é uma forma eficiente e segura de autenticação para APIs. Você aprenderá a integrar JWT em seu projeto para autenticar usuários."
    },
    {
        dia: 54,
        tema: "API com Express e MongoDB",
        descricao: "Estudar como criar APIs com Express e integrar com MongoDB para armazenar dados.",
        desafioPratico: "Criar uma API CRUD simples usando Express e MongoDB.",
        videoSugerido: "https://www.youtube.com/watch?v=-MTSHeR0vWg",
        textoTema: "Express é um framework minimalista para Node.js, e MongoDB é um banco de dados NoSQL. Você aprenderá a construir uma API robusta utilizando essas tecnologias."
    },
    {
        dia: 55,
        tema: "Desenvolvimento de SPA com React",
        descricao: "Estudar como criar Single Page Applications (SPAs) com React.",
        desafioPratico: "Criar um aplicativo de lista de tarefas simples como SPA utilizando React.",
        videoSugerido: "https://www.youtube.com/watch?v=ht1zqEqyGxg",
        textoTema: "As SPAs são aplicações que carregam uma única página e carregam os dados dinamicamente. Você aprenderá a criar uma SPA com React para melhorar a experiência do usuário."
    },
    {
        dia: 56,
        tema: "Controle de Versão com Git",
        descricao: "Estudar como usar Git para controle de versão de código e colaborar com outras pessoas.",
        desafioPratico: "Criar um repositório no GitHub e realizar commits no seu código.",
        videoSugerido: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
        textoTema: "Git é uma ferramenta essencial para controle de versão de código. Você aprenderá como usar Git para versionar seu código e colaborar com outras pessoas."
    },
    {
        dia: 57,
        tema: "Integração Contínua com GitHub Actions",
        descricao: "Estudar como configurar pipelines de integração contínua usando GitHub Actions.",
        desafioPratico: "Criar uma pipeline básica de CI para rodar testes automaticamente em seu código.",
        videoSugerido: "https://www.youtube.com/watch?v=Oe421EPjeHk",
        textoTema: "Integração contínua é uma prática essencial no desenvolvimento de software moderno. Você aprenderá como configurar GitHub Actions para rodar testes automaticamente em seu código."
    },
    {
        dia: 58,
        tema: "Desenvolvimento de Aplicações com Vue.js",
        descricao: "Estudar como criar aplicações com Vue.js, uma alternativa ao React.",
        desafioPratico: "Criar uma aplicação simples utilizando Vue.js.",
        videoSugerido: "https://www.youtube.com/watch?v=4deVCNJq3qc",
        textoTema: "Vue.js é uma framework JavaScript progressiva para construir interfaces de usuário. Você aprenderá a criar aplicações dinâmicas e interativas com Vue.js."
    },
    {
        dia: 59,
        tema: "SEO para Desenvolvedores Web",
        descricao: "Estudar técnicas de otimização de sites para mecanismos de busca (SEO).",
        desafioPratico: "Otimizar uma aplicação web simples para SEO.",
        videoSugerido: "https://www.youtube.com/watch?v=sz9p2_GXbIk",
        textoTema: "SEO (Search Engine Optimization) é essencial para melhorar a visibilidade do seu site nos motores de busca. Você aprenderá como otimizar uma aplicação web para SEO."
    },
    {
        dia: 60,
        tema: "Serviços de Backend como Firebase Functions",
        descricao: "Estudar como usar o Firebase Functions para executar código no backend.",
        desafioPratico: "Criar uma função simples no Firebase Functions para processar dados.",
        videoSugerido: "https://www.youtube.com/watch?v=7LKHX61l1rs",
        textoTema: "Firebase Functions permite rodar código no backend sem necessidade de servidores. Você aprenderá como escrever e implementar funções no Firebase."
    },
    {
        dia: 61,
        tema: "Serverless Architecture",
        descricao: "Estudar como construir sistemas com uma arquitetura serverless.",
        desafioPratico: "Criar uma aplicação simples utilizando uma arquitetura serverless com AWS Lambda.",
        videoSugerido: "https://www.youtube.com/watch?v=eVJgf7Hl4yA",
        textoTema: "Serverless Architecture permite que você desenvolva sistemas sem gerenciar servidores diretamente. Você aprenderá a usar AWS Lambda para executar funções de backend sem servidores."
    },
    {
        dia: 62,
        tema: "Web Scraping com Node.js",
        descricao: "Estudar como realizar web scraping para extrair dados de sites.",
        desafioPratico: "Criar um script para coletar dados de um site utilizando Node.js e Cheerio.",
        videoSugerido: "https://www.youtube.com/watch?v=4aOya3jjdOk",
        textoTema: "Web scraping é uma técnica usada para extrair dados de páginas da web. Você aprenderá a usar Node.js e Cheerio para coletar informações de sites."
    },
    {
        dia: 63,
        tema: "Desenvolvimento de Chat em Tempo Real com Node.js",
        descricao: "Estudar como criar uma aplicação de chat em tempo real utilizando Node.js e Socket.io.",
        desafioPratico: "Criar uma aplicação de chat simples com Node.js e Socket.io.",
        videoSugerido: "https://www.youtube.com/watch?v=1BfD6l0wM7A",
        textoTema: "Com Socket.io, você pode criar uma comunicação bidirecional em tempo real entre o cliente e o servidor. Você aprenderá como desenvolver um chat em tempo real utilizando essa biblioteca."
    },
    {
        dia: 64,
        tema: "Tema do Dia 64",
        descricao: "Descrição detalhada do conteúdo e prática do Dia 64.",
        desafioPratico: "Desafio prático proposto para o Dia 64.",
        videoSugerido: "https://www.youtube.com/watch?v=video64",
        textoTema: "Texto explicativo sobre o tema estudado no Dia 64."
    },
    {
        dia: 64,
        tema: "Introdução a APIs RESTful",
        descricao: "Aprenda o que é uma API, como funciona o modelo REST e por que ele é usado para comunicação entre sistemas.",
        desafioPratico: "Escreva um artigo simples explicando com suas palavras o que é uma API RESTful e crie um fluxograma da comunicação cliente ↔ servidor.",
        videoSugerido: "https://www.youtube.com/watch?v=ghTrp1x_1As",
        textoTema: "REST é um conjunto de regras para criar APIs que usam o protocolo HTTP. Elas funcionam como 'pontes' que permitem a comunicação entre diferentes aplicações de forma padronizada."
      },
      {
        dia: 65,
        tema: "Métodos HTTP (GET, POST, PUT, DELETE)",
        descricao: "Compreenda como os métodos HTTP funcionam em APIs REST para criar, ler, atualizar e excluir recursos.",
        desafioPratico: "Faça um quadro explicativo com os métodos e crie um exemplo prático de requisição usando o fetch() em HTML/JS.",
        videoSugerido: "https://www.youtube.com/watch?v=twTqdTchBCo",
        textoTema: "Os métodos HTTP são usados para diferentes tipos de operações. GET busca dados, POST envia, PUT atualiza e DELETE remove recursos."
      },
      {
        dia: 66,
        tema: "Criando uma API com Node.js e Express",
        descricao: "Aprenda a configurar um servidor usando Express.js e criar rotas para uma API funcional.",
        desafioPratico: "Crie uma API com as rotas /tarefas (GET/POST/PUT/DELETE).",
        videoSugerido: "https://www.youtube.com/watch?v=pKd0Rpw7O48",
        textoTema: "O Express.js é um framework minimalista do Node.js para criar servidores e APIs. Ele facilita o roteamento e gerenciamento das requisições HTTP."
      },
      {
        dia: 67,
        tema: "Trabalhando com rotas e parâmetros",
        descricao: "Aprenda como usar parâmetros dinâmicos para trabalhar com recursos específicos, como tarefas por ID.",
        desafioPratico: "Atualize sua API para buscar tarefas por ID e excluir pelo ID.",
        videoSugerido: "https://www.youtube.com/watch?v=R0T-L2TUVzI",
        textoTema: "Parâmetros de rota permitem tornar seu sistema mais dinâmico, como acessar /tarefas/123 e receber só a tarefa com ID 123."
      },
      {
        dia: 68,
        tema: "Fetch API no Frontend",
        descricao: "Aprenda como consumir APIs do frontend usando a função fetch() do JavaScript.",
        desafioPratico: "Crie um frontend simples que consome a API de tarefas criada anteriormente.",
        videoSugerido: "https://www.youtube.com/watch?v=1tRLveSyNz8",
        textoTema: "fetch() é a função nativa do JavaScript para fazer requisições HTTP e manipular os dados retornados pela API."
      },
      {
        dia: 69,
        tema: "Middlewares no Express.js",
        descricao: "Entenda como os middlewares funcionam no Express e como usá-los para autenticação, logs e mais.",
        desafioPratico: "Implemente um middleware de log que mostra no console toda requisição feita à sua API.",
        videoSugerido: "https://www.youtube.com/watch?v=YjYVzlGkLx0",
        textoTema: "Middlewares são funções que interceptam requisições HTTP no Express. Você pode usá-los para verificar autenticação, tratar erros ou adicionar funcionalidades."
      },
    {
        dia: 70,
        tema: "Otimização de Performance Front-end",
        descricao: "Aprender técnicas para otimizar a velocidade e o desempenho de aplicações front-end.",
        desafioPratico: "Analisar e otimizar o desempenho de uma aplicação React simples.",
        videoSugerido: "https://www.youtube.com/watch?v=8hly31xKli09", // Performance de Sites para Iniciantes - Google Developers
        textoTema: "A performance é crucial para a experiência do usuário. Você aprenderá sobre lazy loading, minificação de arquivos, otimização de imagens e outras técnicas para tornar seu front-end mais rápido."
    },
    {
        dia: 71,
        tema: "Segurança em Aplicações Web (Front-end)",
        descricao: "Estudar vulnerabilidades comuns no front-end e como preveni-las (XSS, CSRF).",
        desafioPratico: "Implementar medidas de segurança em um formulário React.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt40", // Front-end Security: Common Vulnerabilities and Prevention - The Net Ninja
        textoTema: "A segurança é uma prioridade. Você aprenderá sobre as principais ameaças ao front-end e como proteger suas aplicações contra ataques como Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF)."
    },
    {
        dia: 72,
        tema: "GraphQL Avançado: Mutations e Subscriptions",
        descricao: "Aprofundar-se em GraphQL, estudando mutations para alterar dados e subscriptions para atualizações em tempo real.",
        desafioPratico: "Implementar mutations e subscriptions em uma API GraphQL.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt41", // GraphQL Mutations and Subscriptions Explained - Fireship
        textoTema: "GraphQL oferece flexibilidade na manipulação de dados. Você aprenderá a usar mutations para modificar dados no servidor e subscriptions para receber atualizações em tempo real."
    },
    {
        dia: 73,
        tema: "Testes E2E (End-to-End) com Cypress ou Selenium",
        descricao: "Aprender a escrever testes de ponta a ponta para garantir que a aplicação funcione corretamente do início ao fim.",
        desafioPratico: "Escrever testes E2E para um fluxo de usuário em uma aplicação React.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt42", // Cypress Tutorial for Beginners - freeCodeCamp.org
        textoTema: "Testes End-to-End simulam o comportamento real do usuário, garantindo que todos os componentes da sua aplicação funcionem juntos conforme o esperado. Você aprenderá a usar ferramentas como Cypress ou Selenium."
    },
    {
        dia: 74,
        tema: "Containers com Docker Avançado: Docker Compose",
        descricao: "Estudar como usar o Docker Compose para gerenciar múltiplos containers em aplicações complexas.",
        desafioPratico: "Configurar um Docker Compose para uma aplicação com front-end, back-end e banco de dados.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt43", // Docker Compose Tutorial - Traversy Media
        textoTema: "Docker Compose facilita a gestão de aplicações multi-container. Você aprenderá a definir e executar aplicações complexas com múltiplos serviços Docker."
    },
    {
        dia: 75,
        tema: "Kubernetes Básico: Orquestração de Containers",
        descricao: "Introdução ao Kubernetes, uma plataforma para automatizar a implantação, o dimensionamento e a gestão de aplicações em containers.",
        desafioPratico: "Implantar uma aplicação simples no Minikube (ambiente Kubernetes local).",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt44", // Kubernetes for Beginners - KodeKloud
        textoTema: "Kubernetes é essencial para orquestrar containers em escala. Você terá uma introdução aos seus conceitos básicos e como implantar aplicações."
    },
    {
        dia: 76,
        tema: "Monitoramento e Logging de Aplicações",
        descricao: "Aprender a monitorar a saúde e o desempenho de aplicações em produção e a configurar sistemas de logging eficientes.",
        desafioPratico: "Integrar um sistema de logging (ex: Winston) em uma aplicação Node.js e configurar um painel de monitoramento básico.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt45", // Node.js Logging with Winston - LogRocket
        textoTema: "Monitoramento e logging são cruciais para identificar e resolver problemas em produção. Você aprenderá a usar ferramentas e técnicas para manter suas aplicações saudáveis."
    },
    {
        dia: 77,
        tema: "Server-Side Rendering (SSR) com React (Next.js)",
        descricao: "Aprofundar-se em Server-Side Rendering para melhorar o SEO e o desempenho da primeira carga de aplicações React.",
        desafioPratico: "Configurar o SSR em uma aplicação React utilizando Next.js.",
        videoSugerido: "https://www.youtube.com/watch?v=F6P97H_VVX8", // Next.js Tutorial - The Net Ninja
        textoTema: "SSR melhora a experiência do usuário e o SEO ao renderizar a página no servidor antes de enviá-la para o navegador. Você aprenderá a implementar SSR com Next.js."
    },
    {
        dia: 78,
        tema: "Static Site Generation (SSG) com React (Gatsby ou Next.js)",
        descricao: "Estudar a geração de sites estáticos para sites rápidos e seguros.",
        desafioPratico: "Criar um site estático simples com Gatsby ou Next.js.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt46", // Gatsby JS Crash Course - Traversy Media
        textoTema: "SSG gera páginas HTML estáticas no momento da construção, resultando em sites extremamente rápidos e seguros. Você aprenderá a usar Gatsby ou Next.js para criar sites estáticos."
    },
    {
        dia: 79,
        tema: "Micro Frontends: Arquitetura e Implementação",
        descricao: "Entender a arquitetura de micro frontends para dividir grandes aplicações front-end em partes menores e independentes.",
        desafioPratico: "Implementar uma arquitetura de micro frontend simples utilizando módulos JavaScript ou iframes.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt47", // Micro Frontends Explained - Martin Fowler
        textoTema: "Micro frontends facilitam o desenvolvimento e a manutenção de grandes aplicações front-end ao dividi-las em times e tecnologias independentes."
    },
    {
        dia: 80,
        tema: "Web Performance Optimization Avançado",
        descricao: "Aprofundar-se em técnicas avançadas de otimização de performance, como code splitting e service workers.",
        desafioPratico: "Implementar code splitting em uma aplicação React e configurar um service worker básico.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt48", // Advanced Web Performance - Google Developers
        textoTema: "Otimização avançada garante que sua aplicação seja rápida e responsiva mesmo em condições de rede ruins. Você aprenderá sobre code splitting e service workers."
    },
    {
        dia: 81,
        tema: "Segurança em Aplicações Web (Back-end)",
        descricao: "Estudar vulnerabilidades comuns no back-end e como preveni-las (injeção de SQL, autenticação insegura).",
        desafioPratico: "Implementar medidas de segurança contra injeção de SQL em uma API Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=TlB_eWDSMt49", // Back-end Security Best Practices - Snyk
        textoTema: "A segurança do back-end é fundamental para proteger os dados da sua aplicação. Você aprenderá sobre ameaças como injeção de SQL e como implementar práticas seguras."
    },
    {
        dia: 82,
        tema: "APIs em Tempo Real com Socket.IO",
        descricao: "Aprender a usar o Socket.IO para construir aplicações com comunicação bidirecional em tempo real.",
        desafioPratico: "Criar um aplicativo de notificações em tempo real usando Socket.IO e Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a80", // Socket.IO Tutorial - freeCodeCamp.org
        textoTema: "Socket.IO facilita a criação de aplicações que precisam de comunicação instantânea entre o cliente e o servidor, como chats e notificações."
    },
    {
        dia: 83,
        tema: "Filas de Mensagens com RabbitMQ ou Kafka",
        descricao: "Estudar como usar filas de mensagens para desacoplar serviços e processar tarefas de forma assíncrona.",
        desafioPratico: "Integrar o RabbitMQ em uma aplicação Node.js para processar tarefas em segundo plano.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a81", // RabbitMQ for Beginners - CloudAMQP
        textoTema: "Filas de mensagens melhoram a escalabilidade e a resiliência das suas aplicações ao permitir o processamento assíncrono de tarefas."
    },
    {
        dia: 84,
        tema: "Bancos de Dados NoSQL Avançado (MongoDB)",
        descricao: "Aprofundar-se em conceitos avançados do MongoDB, como indexação, agregação e replicação.",
        desafioPratico: "Otimizar consultas em um banco de dados MongoDB utilizando indexação e aggregation pipelines.",
        videoSugerido: "https://www.youtube.com/watch?v=-56x56UppqQ", // MongoDB Advanced Queries and Indexing - The Net Ninja
        textoTema: "Para trabalhar eficientemente com MongoDB, é importante entender conceitos avançados como indexação e agregação."
    },
    {
        dia: 85,
        tema: "Bancos de Dados Relacionais Avançado (SQL)",
        descricao: "Aprofundar-se em SQL, estudando otimização de consultas, stored procedures e transações.",
        desafioPratico: "Otimizar uma consulta SQL complexa e criar uma stored procedure.",
        videoSugerido: "https://www.youtube.com/watch?v=HXV3zeQKqGY", // SQL Advanced Topics - freeCodeCamp.org
        textoTema: "Dominar SQL envolve entender como otimizar consultas e utilizar recursos avançados como stored procedures e transações."
    },
    {
        dia: 86,
        tema: "GraphQL no Back-end com Node.js (Apollo Server ou Express-GraphQL)",
        descricao: "Aprender a implementar um servidor GraphQL com Node.js.",
        desafioPratico: "Criar um servidor GraphQL simples com Apollo Server ou Express-GraphQL.",
        videoSugerido: "https://www.youtube.com/watch?v=ed8SzALpx1Q", // Building a GraphQL API with Node.js and Apollo Server - Academind
        textoTema: "Implementar GraphQL no back-end permite construir APIs flexíveis e eficientes para o seu front-end."
    },
    {
        dia: 87,
        tema: "Testes de Integração Avançado",
        descricao: "Aprofundar-se em estratégias e ferramentas para testes de integração robustos.",
        desafioPratico: "Escrever testes de integração para uma API Node.js que interage com um banco de dados.",
        videoSugerido: "https://www.youtube.com/watch?v=ZEAyJlC8QVo", // Integration Testing in Node.js - Test Driven Development
        textoTema: "Testes de integração avançados garantem que diferentes partes do seu sistema funcionem harmoniosamente."
    },
    {
        dia: 88,
        tema: "Autenticação e Autorização Avançado",
        descricao: "Estudar técnicas avançadas de autenticação (OAuth 2.0, OpenID Connect) e autorização (RBAC, ABAC).",
        desafioPratico: "Implementar a autenticação com Google OAuth 2.0 em uma aplicação.",
        videoSugerido: "https://www.youtube.com/watch?v=6s4wboG9AXA", // OAuth 2.0 Explained - OktaDev
        textoTema: "Entender autenticação e autorização avançadas é crucial para proteger sua aplicação e os dados dos usuários."
    },
    {
        dia: 89,
        tema: "Infraestrutura como Código (IaC) com Terraform ou CloudFormation",
        descricao: "Aprender a provisionar e gerenciar infraestrutura de nuvem usando código.",
        desafioPratico: "Criar uma infraestrutura simples na AWS usando Terraform ou CloudFormation.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a82", // Terraform Tutorial for Beginners - freeCodeCamp.org
        textoTema: "Infraestrutura como código permite automatizar a criação e o gerenciamento da sua infraestrutura de nuvem, tornando-o mais eficiente e consistente."
    },
    {
        dia: 90,
        tema: "Continuous Delivery e Continuous Deployment (CD)",
        descricao: "Aprofundar-se em práticas de entrega e implantação contínua.",
        desafioPratico: "Configurar um pipeline de CD para implantar automaticamente uma aplicação após os testes passarem.",
        videoSugerido: "https://www.youtube.com/watch?v=KeBwdt3zPQg", // CI/CD with GitHub Actions - Traversy Media
        textoTema: "CD automatiza o processo de levar novas funcionalidades e correções para produção de forma rápida e segura."
    },
    {
        dia: 91,
        tema: "Design Systems e Bibliotecas de Componentes (Storybook)",
        descricao: "Estudar como criar e manter um design system e usar ferramentas como o Storybook para documentar componentes.",
        desafioPratico: "Criar um design system simples e documentar alguns componentes no Storybook.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a83", // Intro to Storybook - Learn Storybook
        textoTema: "Design systems garantem consistência visual e facilitam a reutilização de componentes em seus projetos."
    },
    {
        dia: 92,
        tema: "Internacionalização e Localização (i18n e L10n)",
        descricao: "Aprender a adaptar aplicações para diferentes idiomas e culturas.",
        desafioPratico: "Implementar i18n em uma aplicação React para suportar dois idiomas.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a84", // React i18n Tutorial - Lokalise
        textoTema: "Tornar sua aplicação internacionalizada e localizada permite alcançar um público global."
    },
    {
        dia: 93,
        tema: "Acessibilidade Avançada (WCAG)",
        descricao: "Aprofundar-se nas diretrizes de acessibilidade WCAG para criar sites inclusivos.",
        desafioPratico: "Realizar uma auditoria de acessibilidade em um site e implementar melhorias baseadas nas WCAG.",
        videoSugerido: "https://www.youtube.com/watch?v=9f-Xes5yxd8", // Web Accessibility (A11y) - Google Chrome Developers
        textoTema: "Acessibilidade avançada garante que sua aplicação seja utilizável por pessoas com diversas necessidades."
    },
    {
        dia: 94,
        tema: "Testes de Performance (Load Testing com k6 ou JMeter)",
        descricao: "Aprender a realizar testes de carga para identificar gargalos de desempenho em suas aplicações.",
        desafioPratico: "Realizar um teste de carga em uma API Node.js utilizando k6 ou JMeter.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a85", // Load Testing with k6 - Grafana Labs
        textoTema: "Testes de performance ajudam a garantir que sua aplicação possa lidar com um grande número de usuários sem falhas."
    },
    {
        dia: 95,
        tema: "GraphQL Client-Side (Apollo Client ou Relay)",
        descricao: "Estudar como integrar um client GraphQL (Apollo Client ou Relay) em uma aplicação React.",
        desafioPratico: "Integrar o Apollo Client em uma aplicação React para consumir uma API GraphQL.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a86", // Apollo Client Tutorial - The GraphQL Guide
        textoTema: "Um client GraphQL facilita a comunicação entre sua aplicação front-end e uma API GraphQL."
    },
    {
        dia: 96,
        tema: "WebAssembly (Wasm) Básico",
        descricao: "Introdução ao WebAssembly e seu potencial para melhorar a performance de aplicações web.",
        desafioPratico: "Compilar um código simples em C++ para WebAssembly e executá-lo no navegador.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a87", // WebAssembly Tutorial - Mozilla Developer Network
        textoTema: "WebAssembly permite executar código em navegadores com performance quase nativa."
    },
    {
        dia: 96,
        tema: "WebAssembly (Wasm) Básico",
        descricao: "Introdução ao WebAssembly e seu potencial para melhorar a performance de aplicações web.",
        desafioPratico: "Compilar um código simples em C++ para WebAssembly e executá-lo no navegador.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a87", // WebAssembly Tutorial - Mozilla Developer Network
        textoTema: "WebAssembly permite executar código em navegadores com performance quase nativa."
    },
    {
        dia: 97,
        tema: "Real-Time Databases (Firebase Realtime Database ou Supabase)",
        descricao: "Estudar bancos de dados em tempo real e como integrá-los em aplicações.",
        desafioPratico: "Criar uma aplicação simples que utiliza o Firebase Realtime Database ou Supabase para atualizações em tempo real.",
        videoSugerido: "https://www.youtube.com/watch?v=9kRgVxULbag", // Firebase Realtime Database Tutorial - Firebase
        textoTema: "Bancos de dados em tempo real facilitam a criação de aplicações colaborativas e interativas."
    },
    {
        dia: 98,
        tema: "Edge Computing e Serverless Avançado",
        descricao: "Aprofundar-se em computação de borda e funcionalidades avançadas de serverless (AWS Lambda@Edge, Cloudflare Workers).",
        desafioPratico: "Implementar uma função serverless na borda utilizando AWS Lambda@Edge ou Cloudflare Workers.",
        videoSugerido: "https://www.youtube.com/watch?v=Q-BpqyOT3a88", // AWS Lambda@Edge Tutorial - AWS
        textoTema: "Edge computing e serverless avançado podem melhorar a latência e a performance de suas aplicações."
    },
    {
        dia: 99,
        tema: "Noções de Machine Learning para Desenvolvedores Web",
        descricao: "Introdução a conceitos básicos de machine learning e como integrar modelos em aplicações web.",
        desafioPratico: "Integrar um modelo de machine learning pré-treinado (ex: TensorFlow.js) em uma aplicação front-end simples.",
        videoSugerido: "https://www.youtube.com/watch?v=cKxRvEZd3Mw", // Introduction to TensorFlow.js - TensorFlow
        textoTema: "Entender o básico de machine learning pode abrir novas possibilidades para suas aplicações web, permitindo funcionalidades inteligentes e personalizadas."
    },
    {
        dia: 100,
        tema: "Tópicos Avançados de JavaScript: Web Workers e Service Workers",
        descricao: "Explorar Web Workers para executar scripts em background e Service Workers para funcionalidades offline e push notifications.",
        desafioPratico: "Implementar um Web Worker para realizar uma tarefa pesada sem bloquear a UI e um Service Worker básico para cache de arquivos.",
        videoSugerido: "https://www.youtube.com/watch?v=v8-7rT4-j-E", // Web Workers Explained - Google Chrome Developers
        textoTema: "Web Workers e Service Workers são poderosos para melhorar a performance e a experiência do usuário em aplicações web."
    },
    {
        dia: 101,
        tema: "GraphQL Schema Design e Best Practices",
        descricao: "Aprofundar-se no design de schemas GraphQL eficientes e seguindo as melhores práticas.",
        desafioPratico: "Refatorar um schema GraphQL simples para seguir as melhores práticas de design.",
        videoSugerido: "https://www.youtube.com/watch?v=Gs_z-aa9z4k", // GraphQL Schema Design - Apollo GraphQL Docs
        textoTema: "Um schema GraphQL bem projetado é crucial para a escalabilidade e a manutenibilidade da sua API."
    },
    {
        dia: 102,
        tema: "Serverless Backends com AWS Amplify ou Google Cloud Functions",
        descricao: "Estudar como construir backends serverless utilizando plataformas como AWS Amplify ou Google Cloud Functions.",
        desafioPratico: "Criar uma função serverless simples para manipular dados utilizando AWS Amplify ou Google Cloud Functions.",
        videoSugerido: "https://www.youtube.com/watch?v=DkFjhsY8Ggo", // AWS Amplify Tutorial - AWS Amplify
        textoTema: "Backends serverless oferecem escalabilidade automática e reduzem a necessidade de gerenciar servidores."
    },
    {
        dia: 103,
        tema: "Autenticação e Autorização em Microserviços",
        descricao: "Aprender como implementar autenticação e autorização em uma arquitetura de microserviços.",
        desafioPratico: "Implementar um sistema de autenticação JWT em um cenário de dois microserviços.",
        videoSugerido: "https://www.youtube.com/watch?v=iy-Q4j8f9qM", // Microservices Authentication and Authorization - Auth0
        textoTema: "A segurança é fundamental em arquiteturas de microserviços, exigindo estratégias robustas de autenticação e autorização."
    },
    {
        dia: 104,
        tema: "Observabilidade em Microserviços (Logging, Tracing, Metrics)",
        descricao: "Estudar como implementar observabilidade em uma arquitetura de microserviços para monitorar a saúde e o desempenho.",
        desafioPratico: "Integrar um sistema de logging e um sistema de tracing básico em uma aplicação de microserviços.",
        videoSugerido: "https://www.youtube.com/watch?v=HNQ697smd3I", // Microservices Observability - Lightstep
        textoTema: "Observabilidade é essencial para entender o comportamento e diagnosticar problemas em sistemas distribuídos."
    },
    {
        dia: 105,
        tema: "Message Queues Avançado (RabbitMQ ou Kafka)",
        descricao: "Aprofundar-se em funcionalidades avançadas de filas de mensagens, como roteamento e dead-letter queues.",
        desafioPratico: "Configurar roteamento e uma dead-letter queue em um sistema com RabbitMQ ou Kafka.",
        videoSugerido: "https://www.youtube.com/watch?v=amQM_Vxq-xI", // RabbitMQ Advanced Features - CloudAMQP
        textoTema: "Entender os recursos avançados de filas de mensagens permite construir sistemas mais resilientes e confiáveis."
    },
    {
        dia: 106,
        tema: "API Gateway e Gerenciamento de APIs",
        descricao: "Aprender sobre API Gateways e como gerenciar e proteger APIs em larga escala.",
        desafioPratico: "Configurar um API Gateway simples (ex: Kong ou Tyk) para uma API existente.",
        videoSugerido: "https://www.youtube.com/watch?v=v3J42spiWyQ", // API Gateway Explained - Amazon Web Services
        textoTema: "Um API Gateway é crucial para gerenciar o acesso e a segurança das suas APIs."
    },
    {
        dia: 107,
        tema: "Containers e Orquestração com Kubernetes Avançado",
        descricao: "Aprofundar-se em conceitos avançados do Kubernetes, como deployments, services e scaling.",
        desafioPratico: "Configurar um deployment com scaling automático para uma aplicação em Kubernetes.",
        videoSugerido: "https://www.youtube.com/watch?v=K8_cDk4-KAQ", // Kubernetes Concepts - Kubernetes Documentation
        textoTema: "Dominar o Kubernetes é essencial para orquestrar aplicações containerizadas em ambientes de produção."
    },
    {
        dia: 108,
        tema: "Bancos de Dados NoSQL Alternativos (Cassandra, Couchbase)",
        descricao: "Explorar outros bancos de dados NoSQL e seus casos de uso.",
        desafioPratico: "Configurar um banco de dados Cassandra ou Couchbase localmente e realizar operações básicas.",
        videoSugerido: "https://www.youtube.com/watch?v=9Fl5IXlnmbo", // Introduction to Cassandra - DataStax Developers
        textoTema: "Conhecer diferentes tipos de bancos de dados NoSQL permite escolher a melhor ferramenta para cada necessidade."
    },
    {
        dia: 109,
        tema: "Server-Sent Events (SSE) e WebSockets Avançado",
        descricao: "Aprofundar-se em comunicação em tempo real com SSE e WebSockets.",
        desafioPratico: "Implementar um sistema de atualização em tempo real utilizando SSE e comparar com uma implementação usando WebSockets.",
        videoSugerido: "https://www.youtube.com/watch?v=nc9j2_fpRSA", // Server-Sent Events - MDN Web Docs
        textoTema: "Escolher a tecnologia certa para comunicação em tempo real depende dos requisitos da sua aplicação."
    },
    {
        dia: 110,
        tema: "GraphQL Security Best Practices",
        descricao: "Estudar as melhores práticas de segurança para APIs GraphQL.",
        desafioPratico: "Identificar e corrigir potenciais vulnerabilidades de segurança em um schema GraphQL.",
        videoSugerido: "https://www.youtube.com/watch?v=f4730m4j_ik", // GraphQL Security - OWASP
        textoTema: "Garantir a segurança da sua API GraphQL é crucial para proteger seus dados."
    },
    {
        dia: 111,
        tema: "Web Performance Optimization para Mobile",
        descricao: "Aprender técnicas específicas para otimizar a performance de aplicações web em dispositivos móveis.",
        desafioPratico: "Otimizar uma página web para dispositivos móveis, focando em carregamento rápido e baixo consumo de dados.",
        videoSugerido: "https://www.youtube.com/watch?v=4ricw4fS44s", // Mobile Web Performance Optimization - Google Developers
        textoTema: "A performance em dispositivos móveis é fundamental para uma boa experiência do usuário."
    },
    {
        dia: 112,
        tema: "Progressive Web Apps (PWA) Avançado",
        descricao: "Aprofundar-se em funcionalidades avançadas de PWAs, como notificações push e background sync.",
        desafioPratico: "Implementar notificações push e background sync em um PWA existente.",
        videoSugerido: "https://www.youtube.com/watch?v=y2-1f7-qY0Q", // PWA Advanced Features - Google Developers
        textoTema: "Recursos avançados de PWAs podem proporcionar uma experiência de usuário ainda mais rica e engajadora."
    },
    {
        dia: 113,
        tema: "Testes de Contrato em Microserviços",
        descricao: "Aprender a implementar testes de contrato para garantir a compatibilidade entre microserviços.",
        desafioPratico: "Implementar um teste de contrato entre dois microserviços utilizando Pact ou Spring Cloud Contract.",
        videoSugerido: "https://www.youtube.com/watch?v=o545aGv-Guw", // Contract Testing for Microservices - DZone
        textoTema: "Testes de contrato são essenciais para evitar quebras em sistemas de microserviços."
    },
    {
        dia: 114,
        tema: "Serverless Segurança e Best Practices",
        descricao: "Estudar as considerações de segurança específicas para arquiteturas serverless e as melhores práticas.",
        desafioPratico: "Analisar e implementar medidas de segurança em uma função serverless.",
        videoSugerido: "https://www.youtube.com/watch?v=59yO-N-K6Wk", // Serverless Security Best Practices - OWASP
        textoTema: "A segurança em ambientes serverless exige uma abordagem diferente das arquiteturas tradicionais."
    },
    {
        dia: 115,
        tema: "Realidade Aumentada (RA) e Realidade Virtual (RV) para Web",
        descricao: "Introdução ao desenvolvimento de experiências de RA e RV utilizando tecnologias web (WebXR).",
        desafioPratico: "Criar uma experiência simples de RA ou RV utilizando WebXR.",
        videoSugerido: "https://www.youtube.com/watch?v=sm4Kt56cW_0", // WebXR Fundamentals - Google Developers
        textoTema: "A RA e a RV estão se tornando cada vez mais relevantes na web, abrindo novas possibilidades de interação."
    },
    {
        dia: 116,
        tema: "Web Payments API",
        descricao: "Aprender a integrar a Web Payments API para facilitar pagamentos online.",
        desafioPratico: "Implementar um fluxo de pagamento básico utilizando a Web Payments API.",
        videoSugerido: "https://www.youtube.com/watch?v=55xTnp6v4-Y", // Web Payments API - Google Developers
        textoTema: "A Web Payments API pode simplificar o processo de checkout para seus usuários."
    },
    {
        dia: 117,
        tema: "WebAuthn para Autenticação Segura",
        descricao: "Estudar como usar a WebAuthn para implementar autenticação forte e sem senhas.",
        desafioPratico: "Implementar a autenticação com WebAuthn em uma aplicação web.",
        videoSugerido: "https://www.youtube.com/watch?v=t_J-45nJdCo", // WebAuthn Explained - FIDO Alliance
        textoTema: "A WebAuthn oferece uma alternativa mais segura e conveniente às senhas tradicionais."
    },
    {
        dia: 118,
        tema: "Blockchain e Web3 para Desenvolvedores Web",
        descricao: "Introdução aos conceitos de blockchain e Web3 e como eles se aplicam ao desenvolvimento web.",
        desafioPratico: "Interagir com uma blockchain de teste utilizando uma biblioteca JavaScript (ex: Ethers.js).",
        videoSugerido: "https://www.youtube.com/watch?v=gFW_96hh454", // Web3.js Documentation - Web3.js
        textoTema: "A Web3 está revolucionando a internet, e entender seus fundamentos é importante para o futuro do desenvolvimento web."
    },
    {
        dia: 119,
        tema: "Ética e Responsabilidade no Desenvolvimento de Software",
        descricao: "Refletir sobre as implicações éticas do software que desenvolvemos e como construir aplicações responsáveis.",
        desafioPratico: "Analisar um aplicativo existente sob uma perspectiva ética e propor melhorias.",
        videoSugerido: "https://www.youtube.com/watch?v=PQ4v19F0-KE", // The Ethics of Algorithms - TED Talk
        textoTema: "Como desenvolvedores, temos a responsabilidade de criar software que seja justo, inclusivo e que respeite a privacidade dos usuários."
    },
    {
        dia: 120,
        tema: "Carreira de Desenvolvedor Full Stack: Soft Skills",
        descricao: "Desenvolver habilidades interpessoais importantes para a carreira, como comunicação, trabalho em equipe e resolução de problemas.",
        desafioPratico: "Participar de um projeto de código aberto ou colaborar com outros desenvolvedores.",
        videoSugerido: "https://www.youtube.com/watch?v=J4fQc3ccC-Q", // Soft Skills for Developers - freeCodeCamp.org
        textoTema: "As soft skills são tão importantes quanto as habilidades técnicas para o sucesso na carreira de desenvolvimento."
    },
    {
        dia: 121,
        tema: "Metodologias Ágeis: Scrum e Kanban",
        descricao: "Aprender sobre as metodologias ágeis mais populares e como aplicá-las em projetos de desenvolvimento.",
        desafioPratico: "Organizar um pequeno projeto pessoal utilizando Scrum ou Kanban.",
        videoSugerido: "https://www.youtube.com/watch?v=QW0dJvU6hjo", // Scrum Explained in Under 5 Minutes - Scrum Alliance
        textoTema: "Metodologias ágeis ajudam a gerenciar projetos de forma flexível e eficiente."
    },
    {
        dia: 122,
        tema: "Princípios de Design de Software (SOLID, DRY, KISS)",
        descricao: "Estudar princípios de design que ajudam a escrever código limpo, manutenível e escalável.",
        desafioPratico: "Refatorar um trecho de código para aplicar os princípios SOLID, DRY e KISS.",
        videoSugerido: "https://www.youtube.com/watch?v=rtmFCGEmJnA", // SOLID Principles of Object-Oriented Design - freeCodeCamp.org
        textoTema: "Aplicar bons princípios de design é fundamental para a qualidade do seu código."
    },
    {
        dia: 123,
        tema: "Padrões de Projeto Avançados (Observer, Strategy, Decorator)",
        descricao: "Aprofundar-se em padrões de projeto importantes para resolver problemas complexos de design.",
        desafioPratico: "Implementar os padrões Observer, Strategy e Decorator em um projeto.",
        videoSugerido: "https://www.youtube.com/watch?v=81gtAojNlz4", // Design Patterns in Object-Oriented Programming - Christopher Okhravi
        textoTema: "Conhecer padrões de projeto avançados permite escrever código mais flexível e reutilizável."
    },
    {
        dia: 124,
        tema: "Refatoração de Código",
        descricao: "Aprender técnicas de refatoração para melhorar a estrutura e a legibilidade do código existente sem alterar seu comportamento.",
        desafioPratico: "Refatorar um módulo de código complexo em um projeto pessoal ou de código aberto.",
        videoSugerido: "https://www.youtube.com/watch?v=J944-IP_L3s", // Code Refactoring - Martin Fowler
        textoTema: "A refatoração contínua é essencial para manter a saúde do seu código."
    },
    {
        dia: 124,
        tema: "Refatoração de Código",
        descricao: "Aprender técnicas de refatoração para melhorar a estrutura e a legibilidade do código existente sem alterar seu comportamento.",
        desafioPratico: "Refatorar um módulo de código complexo em um projeto pessoal ou de código aberto.",
        videoSugerido: "https://www.youtube.com/watch?v=J944-IP_L3s", // Code Refactoring - Martin Fowler
        textoTema: "A refatoração contínua é essencial para manter a saúde do seu código."
    },
    {
        dia: 125,
        tema: "Test-Driven Development (TDD)",
        descricao: "Estudar a prática de escrever testes antes de escrever o código de produção.",
        desafioPratico: "Desenvolver um novo módulo de funcionalidade utilizando TDD.",
        videoSugerido: "https://www.youtube.com/watch?v=hG4LH6P_6sk", // Test-Driven Development - freeCodeCamp.org
        textoTema: "TDD ajuda a garantir a qualidade do código e facilita a refatoração."
    },
    {
        dia: 126,
        tema: "Clean Architecture",
        descricao: "Aprender sobre os princípios da Clean Architecture para criar sistemas independentes de frameworks, bancos de dados e UI.",
        desafioPratico: "Estruturar um projeto backend simples seguindo os princípios da Clean Architecture.",
        videoSugerido: "https://www.youtube.com/watch?v=o_TH-Y78ttw", // Clean Architecture - Uncle Bob
        textoTema: "A Clean Architecture promove a separação de responsabilidades e facilita a manutenção e os testes."
    },
    {
        dia: 127,
        tema: "Event-Driven Architecture",
        descricao: "Estudar como construir sistemas baseados em eventos para maior escalabilidade e resiliência.",
        desafioPratico: "Projetar uma arquitetura orientada a eventos para um cenário específico.",
        videoSugerido: "https://www.youtube.com/watch?v=-a6SHq-Vg7A7", // Event-Driven Architecture - Martin Fowler
        textoTema: "A arquitetura orientada a eventos permite que os serviços se comuniquem de forma assíncrona, melhorando a escalabilidade e a tolerância a falhas."
    },
    {
        dia: 128,
        tema: "Microservices vs. Monolith",
        descricao: "Comparar as vantagens e desvantagens de arquiteturas de microserviços e monolíticas.",
        desafioPratico: "Analisar um sistema existente e discutir se uma arquitetura de microserviços seria mais adequada.",
        videoSugerido: "https://www.youtube.com/watch?v=-a6SHq-Vg7A8", // Microservices vs Monolithic Architecture - Amazon Web Services
        textoTema: "A escolha entre microserviços e monolito depende das necessidades e da complexidade do projeto."
    },
    {
        dia: 129,
        tema: "Service Discovery em Microserviços",
        descricao: "Aprender sobre as diferentes abordagens para service discovery em arquiteturas de microserviços.",
        desafioPratico: "Configurar um sistema de service discovery simples (ex: Consul ou Eureka).",
        videoSugerido: "https://www.youtube.com/watch?v=-a6SHq-Vg7A9", // Service Discovery in Microservices - Kong
        textoTema: "O service discovery permite que os microserviços se localizem e se comuniquem dinamicamente."
    },
    {
        dia: 130,
        tema: "Circuit Breaker Pattern",
        descricao: "Estudar o padrão Circuit Breaker para construir sistemas mais resilientes a falhas.",
        desafioPratico: "Implementar o padrão Circuit Breaker em um cenário de comunicação entre dois serviços.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA0", // Circuit Breaker Pattern - Microsoft Azure
        textoTema: "O Circuit Breaker evita que falhas em um serviço cascateiem para outros serviços."
    },
    {
        dia: 131,
        tema: "API Design Best Practices",
        descricao: "Aprender as melhores práticas para projetar APIs RESTful e GraphQL.",
        desafioPratico: "Projetar a API para um sistema específico, seguindo as melhores práticas.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA1", // REST API Design Best Practices - Postman
        textoTema: "Um bom design de API torna a integração e o uso mais fáceis para os consumidores."
    },
    {
        dia: 132,
        tema: "Documentação de APIs (Swagger/OpenAPI)",
        descricao: "Aprender a documentar APIs utilizando Swagger/OpenAPI.",
        desafioPratico: "Documentar uma API existente utilizando a especificação OpenAPI.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA2", // Introduction to OpenAPI (Swagger) - Swagger
        textoTema: "Uma boa documentação é essencial para que outros desenvolvedores possam usar sua API."
    },
    {
        dia: 133,
        tema: "Caching em Aplicações Web",
        descricao: "Estudar diferentes estratégias de caching para melhorar a performance de aplicações web.",
        desafioPratico: "Implementar diferentes níveis de caching (browser, servidor, banco de dados) em uma aplicação.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA3", // Caching Strategies and Best Practices - Google Developers
        textoTema: "O caching pode reduzir significativamente a latência e a carga nos servidores."
    },
    {
        dia: 134,
        tema: "Content Delivery Networks (CDNs)",
        descricao: "Aprender como CDNs funcionam e como utilizá-los para distribuir conteúdo estático de forma eficiente.",
        desafioPratico: "Configurar um CDN (ex: Cloudflare ou AWS CloudFront) para uma aplicação simples.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA4", // What is a CDN? - Cloudflare
        textoTema: "CDNs melhoram a velocidade de carregamento de aplicações distribuindo conteúdo para servidores mais próximos dos usuários."
    },
    {
        dia: 135,
        tema: "Web Security Avançado: CORS, CSP, HSTS",
        descricao: "Aprofundar-se em mecanismos de segurança como CORS, CSP e HSTS.",
        desafioPratico: "Configurar corretamente CORS, CSP e HSTS em um servidor web.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA5", // HTTP Security Headers - Scott Helme
        textoTema: "Entender e configurar corretamente os headers de segurança é crucial para proteger sua aplicação."
    },
    {
        dia: 136,
        tema: "Monitoramento Avançado de Aplicações",
        descricao: "Aprofundar-se em ferramentas e técnicas avançadas de monitoramento de aplicações em produção.",
        desafioPratico: "Integrar uma ferramenta de monitoramento avançada (ex: Prometheus e Grafana) em uma aplicação.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA6", // Prometheus and Grafana Tutorial - freeCodeCamp.org
        textoTema: "O monitoramento avançado fornece insights detalhados sobre o desempenho e a saúde da sua aplicação."
    },
    {
        dia: 137,
        tema: "Logging Estruturado",
        descricao: "Aprender sobre os benefícios do logging estruturado e como implementá-lo.",
        desafioPratico: "Configurar um sistema de logging estruturado (ex: Serilog ou Bunyan) em uma aplicação Node.js.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA7", // Structured Logging with Serilog in .NET - Nick Chapsas
        textoTema: "O logging estruturado facilita a análise e a busca de logs."
    },
    {
        dia: 138,
        tema: "Troubleshooting e Debugging em Produção",
        descricao: "Aprender técnicas e ferramentas para diagnosticar e resolver problemas em aplicações em produção.",
        desafioPratico: "Simular um problema em produção em um ambiente de teste e utilizar ferramentas de debugging para resolvê-lo.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA8", // Production Debugging Techniques - Sentry
        textoTema: "A capacidade de solucionar problemas em produção é uma habilidade essencial para desenvolvedores full stack."
    },
    {
        dia: 139,
        tema: "Escalabilidade Horizontal e Vertical",
        descricao: "Entender as diferenças entre escalabilidade horizontal e vertical e quando aplicar cada uma.",
        desafioPratico: "Discutir as estratégias de escalabilidade para um sistema com alta demanda.",
        videoSugerido: "https://www.youtube.com/watch?v=dGcsHMXbSOA9", // Horizontal vs Vertical Scaling - Amazon Web Services
        textoTema: "Escolher a estratégia de escalabilidade correta é crucial para lidar com o crescimento da sua aplicação."
    },
    {
        dia: 140,
        tema: "Otimização de Banco de Dados para Alta Performance",
        descricao: "Aprender técnicas avançadas de otimização de bancos de dados (indexação, otimização de queries).",
        desafioPratico: "Analisar e otimizar consultas lentas em um banco de dados.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo0", // Database Optimization Tips - freeCodeCamp.org
        textoTema: "A otimização do banco de dados é fundamental para garantir a performance da sua aplicação em escala."
    },
    {
        dia: 141,
        tema: "Segurança em Containers e Kubernetes",
        descricao: "Estudar as melhores práticas de segurança para containers e ambientes Kubernetes.",
        desafioPratico: "Aplicar medidas de segurança em um ambiente Docker e Kubernetes.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo1", // Kubernetes Security Best Practices - Sysdig
        textoTema: "A segurança em ambientes containerizados exige atenção a diferentes camadas da infraestrutura."
    },
    {
        dia: 142,
        tema: "Serverless Avançado: State Management e Orchestration",
        descricao: "Aprofundar-se em gerenciamento de estado e orquestração em arquiteturas serverless.",
        desafioPratico: "Implementar um fluxo de trabalho complexo utilizando funções serverless e mecanismos de state management.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo2", // Serverless Workflow Orchestration - AWS Step Functions
        textoTema: "Gerenciar o estado e orquestrar funções serverless complexas requer abordagens específicas."
    },
    {
        dia: 143,
        tema: "GraphQL Performance Optimization",
        descricao: "Aprender técnicas para otimizar a performance de APIs GraphQL.",
        desafioPratico: "Identificar e otimizar consultas GraphQL lentas.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo3", // GraphQL Performance Tuning - Apollo GraphQL Docs
        textoTema: "Otimizar a performance de APIs GraphQL garante respostas rápidas e eficientes."
    },
    {
        dia: 144,
        tema: "WebSockets Avançado: Escalabilidade e Resiliência",
        descricao: "Estudar como escalar e tornar aplicações WebSocket resilientes.",
        desafioPratico: "Projetar uma arquitetura escalável e resiliente para um servidor WebSocket.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo4", // Scaling WebSockets - Pusher
        textoTema: "Escalar e garantir a resiliência de aplicações WebSocket é crucial para aplicações em tempo real com muitos usuários."
    },
    {
        dia: 145,
        tema: "Realidade Aumentada (RA) e Realidade Virtual (RV) Avançado para Web",
        descricao: "Aprofundar-se em técnicas avançadas de desenvolvimento de experiências de RA e RV na web.",
        desafioPratico: "Criar uma experiência de RA ou RV mais complexa utilizando WebXR.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo5", // Advanced WebXR Features - Google Developers
        textoTema: "Explorar recursos avançados de WebXR permite criar experiências imersivas mais ricas."
    },
    {
        dia: 146,
        tema: "Web Security para Aplicações Mobile (React Native)",
        descricao: "Estudar as considerações de segurança específicas para aplicações mobile desenvolvidas com React Native.",
        desafioPratico: "Analisar e implementar medidas de segurança em uma aplicação React Native.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo6", // Mobile Security Best Practices for React Native - Snyk
        textoTema: "A segurança em aplicações mobile exige atenção a diferentes aspectos em comparação com aplicações web."
    },
    {
        dia: 147,
        tema: "Performance de Aplicações Mobile (React Native)",
        descricao: "Aprender técnicas para otimizar o desempenho de aplicações mobile desenvolvidas com React Native.",
        desafioPratico: "Otimizar o desempenho de uma aplicação React Native existente.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo7", // React Native Performance Optimization - Callstack
        textoTema: "A performance é crucial para a experiência do usuário em aplicações mobile."
    },
    {
        dia: 148,
        tema: "Testes em Aplicações Mobile (React Native)",
        descricao: "Estudar diferentes tipos de testes (unitários, integração, E2E) em aplicações React Native.",
        desafioPratico: "Escrever testes unitários, de integração e E2E para componentes React Native.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo8", // Testing React Native Applications - Testing Library
        textoTema: "Garantir a qualidade de aplicações mobile com testes é fundamental."
    },
    {
        dia: 149,
        tema: "Deploy de Aplicações Mobile (React Native)",
        descricao: "Aprender o processo de build e deploy de aplicações React Native para as lojas (iOS e Android).",
        desafioPratico: "Configurar o processo de build para iOS e Android de uma aplicação React Native.",
        videoSugerido: "https://www.youtube.com/watch?v=0ri7zv5gQjo9", // Deploying React Native Apps to App Store and Play Store - The Net Ninja
        textoTema: "Entender o processo de deploy é o último passo para colocar sua aplicação mobile nas mãos dos usuários."
    },
    {
        dia: 150,
        tema: "Revisão Geral e Próximos Passos na Carreira Full Stack",
        descricao: "Revisitar os principais temas aprendidos durante os 150 dias e planejar os próximos passos na sua jornada como desenvolvedor full stack.",
        desafioPratico: "Criar um portfólio com os projetos desenvolvidos durante o desafio e definir um plano de estudos para o futuro.",
        videoSugerido: "https://www.youtube.com/watch?v=O6P86uwfdR00", // How to Build a Developer Portfolio - freeCodeCamp.org
        textoTema: "Parabéns por chegar até aqui! Este dia é para celebrar seu progresso e planejar o futuro da sua carreira como desenvolvedor full stack."
    }
];

// Função para salvar o progresso no localStorage
function saveProgress(completedDays) {
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
}

// Função para carregar o progresso do localStorage
function loadProgress() {
    const saved = localStorage.getItem('completedDays');
    return saved ? JSON.parse(saved) : [];
}

// Função para atualizar o contador de dias restantes
function updateDaysCounter(completedDays) {
    const totalDays = days.length;
    const completedCount = completedDays.length;
    const remainingDays = totalDays - completedCount;
    
    document.getElementById('days-left').textContent = remainingDays;
    
    // Atualizar a barra de progresso
    const progressPercentage = (completedCount / totalDays) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
}

// Função para renderizar um dia específico
function renderDay(day, isCompleted) {
    const dayElement = document.createElement('div');
    dayElement.className = `day ${isCompleted ? 'completed' : ''}`;
    dayElement.dataset.day = day.dia;
    
    dayElement.innerHTML = `
        <div class="day-header">
            <h3>${day.tema}</h3>
            <span class="day-number">Dia ${day.dia}</span>
        </div>
        <div class="day-content">
            <p><strong>Descrição:</strong> ${day.descricao}</p>
            <p><strong>Desafio Prático:</strong> ${day.desafioPratico}</p>
        </div>
        <div class="day-actions">
            <a href="${day.videoSugerido}" class="video-link" target="_blank">
                Assistir vídeo sugerido
            </a>
            <button class="complete-btn ${isCompleted ? 'completed' : ''}" data-day="${day.dia}">
                ${isCompleted ? 'Concluído ✓' : 'Marcar como concluído'}
            </button>
        </div>
    `;
    
    return dayElement;
}

// Função para renderizar todos os dias
function renderDays(daysData, completedDays, filter = 'all') {
    const dayListElement = document.getElementById('day-list');
    dayListElement.innerHTML = ''; // Limpar a lista
    
    daysData.forEach(day => {
        const isCompleted = completedDays.includes(day.dia);
        
        // Aplicar filtro
        if (
            (filter === 'all') || 
            (filter === 'completed' && isCompleted) || 
            (filter === 'pending' && !isCompleted)
        ) {
            const dayElement = renderDay(day, isCompleted);
            dayListElement.appendChild(dayElement);
        }
    });
    
    // Se não houver dias para mostrar
    if (dayListElement.children.length === 0) {
        dayListElement.innerHTML = '<div class="loading">Nenhum dia encontrado com os filtros atuais.</div>';
    }
}

// Função para atualizar o tema atual
function updateCurrentTheme(day) {
    document.getElementById('theme-title').textContent = day.tema;
    document.getElementById('theme-text').textContent = day.textoTema;
}

// Função para pesquisar dias
function searchDays(query, daysData) {
    if (!query) return daysData;
    
    query = query.toLowerCase();
    return daysData.filter(day => 
        day.tema.toLowerCase().includes(query) || 
        day.descricao.toLowerCase().includes(query) || 
        day.textoTema.toLowerCase().includes(query)
    );
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const completedDays = loadProgress();
    
    // Renderizar dias iniciais
    renderDays(days, completedDays);
    
    // Atualizar contador
    updateDaysCounter(completedDays);
    
    // Mostrar o tema do primeiro dia não concluído ou o primeiro dia
    const firstUncompletedDay = days.find(day => !completedDays.includes(day.dia)) || days[0];
    updateCurrentTheme(firstUncompletedDay);
    
    // Event listener para marcar dias como concluídos
    document.getElementById('day-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('complete-btn')) {
            const dayId = parseInt(e.target.dataset.day);
            const dayIndex = completedDays.indexOf(dayId);
            
            if (dayIndex === -1) {
                // Marcar como concluído
                completedDays.push(dayId);
                e.target.textContent = 'Concluído ✓';
                e.target.classList.add('completed');
                e.target.closest('.day').classList.add('completed');
            } else {
                // Desmarcar
                completedDays.splice(dayIndex, 1);
                e.target.textContent = 'Marcar como concluído';
                e.target.classList.remove('completed');
                e.target.closest('.day').classList.remove('completed');
            }
            
            // Salvar progresso
            saveProgress(completedDays);
            
            // Atualizar contador
            updateDaysCounter(completedDays);
            
            // Atualizar tema se necessário
            const firstUncompletedDay = days.find(day => !completedDays.includes(day.dia)) || days[0];
            updateCurrentTheme(firstUncompletedDay);
        }
    });
    
    // Event listener para pesquisa
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        const filter = document.getElementById('status-filter').value;
        const filteredDays = searchDays(query, days);
        renderDays(filteredDays, completedDays, filter);
    });
    
    // Event listener para o campo de pesquisa (pesquisar ao pressionar Enter)
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('search-button').click();
        }
    });
    
    // Event listener para filtro de status
    document.getElementById('status-filter').addEventListener('change', () => {
        const query = document.getElementById('search-input').value;
        const filter = document.getElementById('status-filter').value;
        const filteredDays = searchDays(query, days);
        renderDays(filteredDays, completedDays, filter);
    });
});
           
        