# Enciclopédia de Personagens

## O que será construído
- Transformar `/personagens` em uma enciclopédia funcional com pesquisa, contagem e filtros por aluno, professor, funcionário, diretor, ex-aluno e personagem histórico.
- Criar páginas individuais em `/personagens/:slug` com retrato editorial, nome, idade, casa, função, descrição, personalidade, biografia, aparições, segredos, relações e documentos relacionados.
- Adicionar uma seção própria de corpo docente dentro da enciclopédia, com disciplina, aparência, método de ensino e informações públicas e restritas.
- Criar a seção “Relações conhecidas” com vínculos clicáveis no formato “Personagem A → relação → Personagem B”.

## Dados e segredos
- Centralizar personagens, vínculos, segredos e referências cruzadas em `src/data/characters.ts`, separado da interface e com identificadores estáveis.
- Estruturar cada informação sensível com conteúdo, nível de autorização e estado de bloqueio; inicialmente exibir “Informação classificada.” sem revelar o texto.
- Preparar os dados para que o mestre altere depois apenas o estado de cada segredo, sem mexer na interface.

## Visual e verificação
- Preservar o estilo Noir & Gold, a tipografia e os componentes visuais da Academia, com retratos editoriais gerados para os personagens.
- Garantir navegação responsiva, movimentos discretos e metadados próprios para cada página.
- Testar filtros, páginas individuais, links entre personagens, informações bloqueadas e apresentação em celular e desktop.
