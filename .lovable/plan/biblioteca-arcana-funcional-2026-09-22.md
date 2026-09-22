# Biblioteca Arcana funcional

## O que será construído
- Transformar `/biblioteca` em um catálogo de livros com pesquisa instantânea, contagem de resultados e filtros por todas as categorias solicitadas.
- Exibir cada livro com capa, título, autor, categoria, resumo, nível de acesso e um dos quatro estados: disponível, restrito, desconhecido ou desbloqueado.
- Criar páginas individuais em `/biblioteca/:slug`, com metadados, conteúdo completo quando permitido, notas e documentos relacionados.
- Manter documentos restritos sem conteúdo visível, mostrando “ACESSO RESTRITO” e os possíveis meios de desbloqueio: senha, evento, código, conquista ou ação do mestre.
- Fazer buscas por termos relacionados, como “dragão”, encontrarem livros, personagens, criaturas e artefatos, com links para as áreas correspondentes.
- Incluir mensagem clara quando a pesquisa ou combinação de filtros não retornar resultados.

## Organização dos dados
- Centralizar livros, documentos e referências cruzadas em um módulo de dados tipado, separado da interface.
- Usar identificadores estáveis para facilitar a adição futura de novos livros e relacionamentos.
- Manter a busca e os filtros no endereço da página, permitindo compartilhar e restaurar a consulta.

## Visual e interação
- Preservar o estilo Noir & Gold, a tipografia e a navegação atuais da Academia.
- Criar capas editoriais inspiradas em tomos antigos, sem imagens genéricas.
- Usar movimentos discretos nos cartões e transições, respeitando a preferência por redução de movimento.
- Adaptar catálogo, filtros e páginas de leitura para celular e desktop.

## Verificação
- Testar pesquisa em tempo real, filtros, estado vazio, abertura dos livros, bloqueio dos documentos secretos e links relacionados.
- Conferir a apresentação em desktop e celular e corrigir erros da prévia antes da entrega.
