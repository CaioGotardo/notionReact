export function Header(){
    
    return(
        <nav className="bg-gray-100 py-4 shadow-md">
        {/*
        bg-gray-100: Define a cor de fundo da barra de navegação como um tom de cinza claro.
        py-4: Adiciona padding vertical (top e bottom) de 1rem (escala padrão do Tailwind).
        shadow-md: Aplica uma sombra média ao elemento nav, criando um efeito de elevação.
        */}
        <header className="container mx-auto px-4">
        {/*
        container: Aplica um container com largura máxima responsiva, centralizando o conteúdo dentro dele.
                   Para que essa classe funcione corretamente, o plugin 'container' precisa estar configurado no tailwind.config.js.
        mx-auto: Centraliza o container horizontalmente na tela (define as margens esquerda e direita como automáticas).
        px-4: Adiciona padding horizontal (esquerda e direita) de 1rem dentro do container.
        */}
        <div className="flex justify-between items-center">
        {/*
        flex: Habilita o uso do Flexbox para organizar os elementos filhos (logo e links) em uma linha.
        justify-between: Espalha os elementos filhos ao longo da linha, com o máximo de espaço possível entre eles.
                       Isso coloca o logo à esquerda e os links à direita.
        items-center: Alinha verticalmente os elementos filhos ao centro. Isso garante que o logo e os links estejam alinhados verticalmente.
        */}
        {/* LOGO */}
        <div className="font-bold text-xl text-gray-800">
        {/*
        font-bold: Aplica a espessura da fonte como negrito.
        text-xl: Define o tamanho da fonte como 1.25rem (escala padrão do Tailwind), tornando o texto um pouco maior.
        text-gray-800: Define a cor do texto como um tom de cinza escuro.
        */}
        Notion
        </div>
        <div>
        {/* Container para os links de navegação */}
        <a href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        {/*
        text-gray-700: Define a cor do texto do link como um tom de cinza médio.
        hover:text-gray-900: Define a cor do texto do link para um tom de cinza mais escuro quando o mouse passa por cima.
        px-3: Adiciona padding horizontal (esquerda e direita) de 0.75rem dentro do link.
        py-2: Adiciona padding vertical (top e bottom) de 0.5rem dentro do link.
        rounded-md: Aplica um arredondamento médio às bordas do link.
        text-sm: Define o tamanho da fonte do link como 0.875rem, tornando o texto um pouco menor.
        font-medium: Aplica uma espessura de fonte semibold (médio).
        */}
        About
        </a>
        <a href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        {/* As mesmas classes de estilo do link "About" são aplicadas aqui. */}
        Contact
        </a>
        <a href="/maps" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        {/* As mesmas classes de estilo do link "About" são aplicadas aqui. */}
        Maps
        </a>
        </div>
        </div>
        </header>
       </nav>
    )
    }