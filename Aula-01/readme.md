# Estudo HTML
## O que é HTML?
    - É uma linguagem de marcas em que seu código não é compilado, pelo contrário, ele é interpretado e renderizado por meio de um motor web que faz a exibição dos elementos HTML em formato gráfico.
        - Renderizar: Pegar o código e transformar em elementos gráficos.
        - Motor web: É uma ferramenta do navegador responsável por 'Ler' o código HTML realizar a 'Comparação' e ou busca na biblioteca de comandos do navegador e realiza o processo de renderização.

## A sigla HTML
    - HT -> HyperText (Hiper Texto)
    - M -> Markup (Marcas | Marcação)
    - L -> Language (Linguagem)
    - Comandos para serem processados no formato de mídia

## Como usar o HTML
    - Para usar os comandos HTML é necessário escreve-los usando TAG's(Key-Words);
        - Tag's: Podem ser compostas(Casadas) ou simples(Solteiras)
            - Tag Composta: É o comando que inicia e precisa ser finalizado para determinar sua abrangência de execução. Por exemplo: <body>...</body> || <strong>...</strong>
            - Tag Simples: São comandos que não precisam ser finalizados, apenas aplica-se. Por exemplo: <br> || <img> || <meta> || <link>

## As Tag's HTML podem ter atributos
    - Atributos são qualificadores para uma tag HTML, eles podem adicionar recursos para a tag. Ex: <img src="foto.png" alt="foto">. No exemplo mostrado a tag chama-se 'img' os atributos são: 
        - src(source = origem) determina a imagem que será exibida. Aqui você deve passar o caminho da imagem.
        - alt(alternate = alternativo) Determina o texto que será exibido quando a imagem não carrega e é utilizado pelo leitor de tela 'screen reader' para deficientes visuais.

     Outro exemplo: <form action="cadastro.php" method="post">...</form>
        - A tag 'form' é composta e também pode ter atributos, quando for finalizar a tag composta não será necessário colocar os atributos no fechamento. Você deve fechar somente a tag. No exemplo acima temos:
            - Tag form -> Cria o escopo do formulário.
            - Atributo action -> Indica o caminho para onde os dados do formulário irão.
            - Atributo method -> Indica o método como os dados serão enviados.

## Estrutura básica de uma página HTML
```
<html>
    <head>
        <meta charset="utf8">
        <title>Primeira Página</title>
    </head>
    <body>
        <h1>Primeira página</h1>
    </body>
</html>
```