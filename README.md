# Médicos & Dentistas - Portal de Saúde

Um portal moderno e acolhedor para apresentação de informações, serviços e especialidades relacionadas a médicos e dentistas, desenvolvido com React, React Router e SCSS.

## 🌐 Link

-**Repositório GitHub**: [https://github.com/Athenas22/Desafio_Rotas](https://github.com/Athenas22/Desafio_Rotas)

## 📋 Descrição do Projeto

Este projeto foi desenvolvido como um desafio para criar um portal informativo sobre cuidados com a saúde geral e bucal. A aplicação apresenta uma interface fluida e agradável, focada em transmitir confiança, profissionalismo e bem-estar através de um design cuidadosamente elaborado.

## 🎯 Objetivos

- Criar um portal chamado **Médicos & Dentistas** com páginas informativas
- Apresentar especialidades médicas e odontológicas de forma organizada
- Oferecer uma experiência de navegação simples e intuitiva
- Transmitir valores de saúde, higiene e bem-estar através do design

## 🛠️ Tecnologias Utilizadas

- **React.js** com Vite
- **React Router DOM** para navegação entre páginas
- **SCSS** com variáveis, aninhamento e estrutura modular
- **Google Fonts** (Inter)
- **HTML5** semântico
- **CSS3** com propriedades modernas

## ✨ Funcionalidades

### 🏠 Página Inicial (`/`)
- Apresentação do portal com mensagem de boas-vindas
- Destaque das especialidades médicas e odontológicas
- Cards informativos sobre diferentes áreas da saúde
- Design acolhedor com paleta de cores temática

### 📋 Página de Cadastro (`/seja-voluntario`)
- Formulário de cadastro voluntário
- Campos para informações pessoais
- Seleção de área de interesse (médica ou odontológica)
- Interface de formulário intuitiva e responsiva

### 🔍 Navegação
- Header fixo com logo e menu de navegação
- Links para todas as páginas disponíveis
- Footer informativo
- Design responsivo para todos os dispositivos

## 🎨 Design e Estilização

### Paleta de Cores
- **Azul Saúde** (`#2A7AE4`): Principal, transmite confiança e profissionalismo
- **Verde Bem-estar** (`#4CAF50`): Secundário, representa saúde e vitalidade
- **Branco Puro** (`#FFFFFF`): Fundos e elementos claros
- **Cinza Claro** (`#F5F5F5`): Fundos secundários
- **Cinza Escuro** (`#333333`): Textos e elementos de destaque

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos Utilizados**: 300, 400, 500, 600, 700
- **Hierarquia Clara** com tamanhos adequados para cada elemento

### Princípios de Design
- Layout limpo e organizado
- Espaçamento consistente usando `rem`
- Elementos visuais que remetem à área da saúde
- Contraste adequado para melhor legibilidade
- Estados interativos para botões e links

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a:

- **Desktop** (acima de 1024px)
- **Tablet** (768px - 1023px)
- **Mobile** (até 767px)

### Técnicas Utilizadas
- Unidades relativas (`%`, `vh`, `vw`, `rem`)
- `max-width` para contenção de elementos
- Media queries estratégicas
- Flexbox e Grid para layouts adaptativos
- Imagens e cards que se ajustam automaticamente

## 🏗️ Estrutura do Projeto

src/
├── components/           # Componentes reutilizáveis
│   ├── article/          # Seções de artigos
│   ├── button/           # Botões estilizados
│   ├── footer/           # Rodapé da aplicação
│   ├── hamburger/        # Menu mobile (Hamburguer)
│   └── header/           # Cabeçalho da aplicação
├── pages/                # Páginas principais (Rotas)
│   ├── home/             # Landing page
│   └── seja-voluntario/  # Página de cadastro/voluntariado
├── styles/               # Estilização global e SCSS
│   ├── _variaveis.scss   # Cores e configurações de estilo
│   └── globalStyle.scss  # Estilos base da aplicação
├── App.jsx               # Componente principal de rotas
└── main.jsx              # Ponto de entrada do React


## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone [https://github.com/Athenas22/Desafio_Rotas.git](https://github.com/Athenas22/De