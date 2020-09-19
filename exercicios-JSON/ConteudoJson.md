## O que é o JSON?

JSON significa **J**ava**S**cript **O**bject **N**otation - Notação de Objetos JavaScript. É uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar. Está baseado em um subconjunto da linguagem de programação JavaScript, a pesar disso, JSON é em formato texto e completamente independente de linguagem, pois usa convenções que são familiares à maioria das linguagens atuais.

São dados salvos em um arquivo .json e consistem em uma lista com uma sequencia de pares chave / valor. Cujo formato se parece muito com o formato literal do objeto JavaScript.

```javascript
    { "key": "value" }
```
Você pode incluir os mesmos tipos de dados básicos dentro do JSON, como em um objeto JavaScript padrão — strings, números, matrizes, booleanos e outros literais de objeto. Porem, diferente das Arrays e Objetos os nomes das propriedades devem ser strings com aspas duplas e as vírgulas à direita são proibidas.

```javascript
    {
        "title": "Grave of the Fireflies",
        "description": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle."
      }
```