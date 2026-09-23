import elaraPortrait from "@/assets/personagens/elara-voss.jpg";
import aldrenPortrait from "@/assets/personagens/aldren-quill.jpg";
import celenePortrait from "@/assets/personagens/celene-arcturus.jpg";
import theonPortrait from "@/assets/personagens/theon-vael.jpg";

export const characterRoles = ["aluno", "professor", "funcionário", "diretor", "ex-aluno", "personagem histórico"] as const;
export type CharacterRole = (typeof characterRoles)[number];
export type CharacterHouse = "Casa da Aurora" | "Casa do Véu" | "Casa da Brasa" | "Casa do Maré" | "Sem casa";

export interface CharacterSecret {
  id: string;
  title: string;
  content: string;
  requiredLevel: string;
  locked: boolean;
}

export interface CharacterRelation {
  targetSlug: string;
  relation: string;
  note?: string;
}

export interface RelatedRecord {
  label: string;
  description: string;
  to: "/biblioteca" | "/casas" | "/feiticos" | "/criaturas" | "/artefatos" | "/mapa" | "/calendario" | "/arquivos-secretos";
  kind: string;
}

export interface AcademyCharacter {
  slug: string;
  name: string;
  age: string;
  house: CharacterHouse;
  role: CharacterRole;
  position: string;
  description: string;
  personality: string[];
  biography: string[];
  appearances: string[];
  secrets: CharacterSecret[];
  relations: CharacterRelation[];
  relatedRecords: RelatedRecord[];
  keywords: string[];
  sigil: string;
  portrait?: string;
  teacher?: {
    discipline: string;
    appearance: string;
    teachingMethod: string;
    publicInfo: string[];
    restrictedInfo: CharacterSecret[];
  };
}

export const characters: AcademyCharacter[] = [
  {
    slug: "elara-voss", name: "Mestra Elara Voss", age: "68 anos", house: "Casa do Véu", role: "diretor", position: "Diretora e Guardiã-mor dos Arquivos",
    description: "Autoridade máxima da Academia, restauradora do Códice de Vael e guardiã dos selos que protegem os arquivos proibidos.",
    personality: ["Disciplinada", "Observadora", "Reservada", "Inabalável"],
    biography: ["Elara Voss ingressou na Academia como aluna da Casa do Véu e distinguiu-se pela capacidade rara de ler selos de contenção sem quebrá-los. Aos trinta anos, já conduzia a restauração de grimórios considerados perdidos.", "Após o incidente da Cripta Inferior, foi nomeada Guardiã-mor e, mais tarde, Diretora. Sob sua gestão, os Arquivos Secretos foram reorganizados — e, segundo alguns, tornaram-se ainda mais impenetráveis."],
    appearances: ["Vigília dos Fundadores", "Investidura dos novos guardiões", "Restauração pública do Códice de Vael"],
    secrets: [
      { id: "elara-1", title: "A passagem selada", content: "Elara conhece a localização da Décima Primeira Porta e manteve esse conhecimento fora dos registros oficiais por ordem do Conselho anterior.", requiredLevel: "Chancela Dourada", locked: true },
      { id: "elara-2", title: "O nome preservado", content: "Ela guarda o verdadeiro nome do dragão de bronze citado no Códice de Vael, escrito em um pergaminho que carrega consigo.", requiredLevel: "Sigilo Rubro", locked: true },
    ],
    relations: [
      { targetSlug: "aldren-quill", relation: "supervisiona as pesquisas de", note: "Acompanha pessoalmente os experimentos voláteis desde o incidente do laboratório leste." },
      { targetSlug: "theon-vael", relation: "tutora designada de", note: "Escolheu acompanhar o estudante após o episódio da carta selada." },
      { targetSlug: "lysandra-aster", relation: "estuda os escritos de", note: "Dedica suas noites às anotações marginais da fundadora." },
    ],
    relatedRecords: [
      { label: "O Códice de Vael", description: "Tomo cuja restauração ela coordena.", to: "/biblioteca", kind: "Livro" },
      { label: "Arquivos Secretos", description: "Setor sob sua custódia direta.", to: "/arquivos-secretos", kind: "Arquivo" },
    ],
    keywords: ["diretora", "guardiã", "selos", "códice", "conselho"], sigil: "✦", portrait: elaraPortrait,
  },
  {
    slug: "aldren-quill", name: "Prof. Aldren Quill", age: "52 anos", house: "Casa da Brasa", role: "professor", position: "Professor de Poções e Elixires",
    description: "Especialista em compostos voláteis, autor do Manual de Elixires Voláteis e figura temida e admirada nos laboratórios.",
    personality: ["Preciso", "Irônico", "Impaciente", "Protetor com os alunos dedicados"],
    biography: ["Aldren Quill perdeu dois dedos e um laboratório inteiro antes dos vinte e cinco anos — e transformou ambas as perdas em capítulos de seu manual. Sua carreira é marcada por avanços reais e por advertências formais em igual número.", "Recusou duas vezes um assento no Conselho Arcano, alegando que 'frascos não esperam reuniões'."],
    appearances: ["Aula inaugural de Poções do ano corrente", "Audiência sobre o incidente do laboratório leste", "Revisão do calendário arcano"],
    secrets: [{ id: "aldren-1", title: "A fórmula omitida", content: "A edição pública do Manual omite deliberadamente uma fórmula que reage ao ouro vivo. Aldren a entregou apenas à Diretora Voss.", requiredLevel: "Chancela Dourada", locked: true }],
    relations: [
      { targetSlug: "mara-quill", relation: "irmão de", note: "Não se falam desde a expulsão dela, mas ele guarda os relatórios do caso." },
      { targetSlug: "theon-vael", relation: "professor de", note: "Reconhece no aluno um talento que prefere não elogiar em voz alta." },
      { targetSlug: "elara-voss", relation: "responde diretamente a", note: "Única pessoa a quem entrega seus relatórios sem resmungar." },
    ],
    relatedRecords: [
      { label: "Manual de Elixires Voláteis", description: "Sua obra de referência.", to: "/biblioteca", kind: "Livro" },
      { label: "Casa da Brasa", description: "Sua casa de origem.", to: "/casas", kind: "Casa" },
    ],
    keywords: ["poções", "alquimia", "laboratório", "professor", "elixir"], sigil: "⚗", portrait: aldrenPortrait,
    teacher: {
      discipline: "Poções e Elixires",
      appearance: "Barba grisalha aparada com precisão, óculos de bronze sempre no alto da testa, mangas do jaleco marcadas por antigas queimaduras.",
      teachingMethod: "Demonstração seguida de erro controlado: cada aluno deve reproduzir a falha antes de acertar a fórmula, para aprender onde o perigo mora.",
      publicInfo: ["Aceita alunos de reforço às terças, no laboratório norte.", "Exige luvas de couro de dragão para qualquer prática acima do Círculo III.", "Corrige provas com tinta verde — 'vermelho é cor de acidente'."],
      restrictedInfo: [{ id: "aldren-r1", title: "Avaliações confidenciais", content: "Mantém um caderno paralelo com avaliações de alunos que ele considera candidatos a pesquisas do Conselho. Theon Vael está na primeira página.", requiredLevel: "Chancela Dourada", locked: true }],
    },
  },
  {
    slug: "celene-arcturus", name: "Profa. Celene Arcturus", age: "34 anos", house: "Casa do Véu", role: "professor", position: "Professora de Astronomia Arcana",
    description: "Leitora das nove esferas celestes, autora do tratado sobre o Astrolábio de Nym e responsável pelo Observatório.",
    personality: ["Contemplativa", "Precisa", "Gentil", "Distante"],
    biography: ["Filha de navegadores, Celene aprendeu a ler o céu antes de aprender a ler livros. Ingressou na Academia aos quinze anos e, aos vinte e nove, tornou-se a mais jovem titular da cátedra de Astronomia.", "Suas aulas no Observatório acontecem sempre à noite, sob qualquer clima: 'as nuvens também são um mapa'."],
    appearances: ["Medições do último equinócio", "Abertura do ano letivo no Observatório"],
    secrets: [{ id: "celene-1", title: "O eclipse que virá", content: "Suas medições indicam uma convergência de esferas dentro de dois anos — o evento descrito no Protocolo do Eclipse. Ela informou apenas a Diretora.", requiredLevel: "Sigilo Rubro", locked: true }],
    relations: [
      { targetSlug: "theon-vael", relation: "orientadora de observação de", note: "Autorizou o acesso do aluno ao Observatório fora do horário." },
      { targetSlug: "orin-de-valebruma", relation: "continua a cartografia de", note: "Atualiza as rotas celestes registradas pelo cartógrafo histórico." },
    ],
    relatedRecords: [
      { label: "O Astrolábio e os Nove Céus", description: "Seu guia de leitura das esferas.", to: "/biblioteca", kind: "Livro" },
      { label: "Astrolábio de Nym", description: "Instrumento central de suas aulas.", to: "/artefatos", kind: "Artefato" },
      { label: "Torre do Observatório", description: "Local de suas medições.", to: "/mapa", kind: "Lugar" },
    ],
    keywords: ["astronomia", "estrelas", "observatório", "professora", "eclipse"], sigil: "✧", portrait: celenePortrait,
    teacher: {
      discipline: "Astronomia Arcana",
      appearance: "Trajes escuros bordados com constelações em fio de ouro; um astrolábio em miniatura pendurado ao pescoço.",
      teachingMethod: "Leitura direta do céu: cada aluno mantém um diário de observação e defende suas interpretações diante da turma.",
      publicInfo: ["Suas aulas acontecem na Torre do Observatório, sempre após o anoitecer.", "Concede acesso noturno a alunos com diários de observação consistentes."],
      restrictedInfo: [{ id: "celene-r1", title: "Diário de convergências", content: "Um segundo diário, trancado na Torre, registra as datas prováveis da próxima convergência de esferas.", requiredLevel: "Sigilo Rubro", locked: true }],
    },
  },
  {
    slug: "theon-vael", name: "Theon Vael", age: "17 anos", house: "Casa da Aurora", role: "aluno", position: "Estudante do quinto ano",
    description: "Aluno de talento incomum para selos e magia ritual; carrega um sobrenome que aparece nos registros mais antigos da Academia.",
    personality: ["Determinado", "Curioso", "Impulsivo", "Leal"],
    biography: ["Theon chegou à Academia trazendo apenas uma mala, um sobrenome ilustre e uma carta selada que se recusa a abrir. Desde então, dividiu os professores entre o entusiasmo e a preocupação.", "É o único aluno do quinto ano com autorização para acessar o Observatório fora do horário — e, extraoficialmente, o único que a Diretora acompanha pessoalmente."],
    appearances: ["Vigília dos Fundadores", "Episódio da carta selada", "Exame de Selos do trimestre passado — nota máxima"],
    secrets: [{ id: "theon-1", title: "A carta selada", content: "A carta que carrega foi escrita por Arquimago Vael Serath e só poderá ser aberta diante da Chave Bronzeada.", requiredLevel: "Sigilo Rubro", locked: true }],
    relations: [
      { targetSlug: "elara-voss", relation: "é tutorado por", note: "A Diretora nunca explicou publicamente o motivo." },
      { targetSlug: "aldren-quill", relation: "é aluno de", note: "Melhor desempenho em Poções da turma, contra a vontade do próprio aluno." },
      { targetSlug: "livia-morn", relation: "rival de", note: "Competem pelo posto de representante dos alunos desde o primeiro ano." },
    ],
    relatedRecords: [
      { label: "O Códice de Vael", description: "Obra ligada ao seu sobrenome.", to: "/biblioteca", kind: "Livro" },
      { label: "Casa da Aurora", description: "Sua casa.", to: "/casas", kind: "Casa" },
    ],
    keywords: ["aluno", "selos", "vael", "aurora", "carta"], sigil: "❖", portrait: theonPortrait,
  },
  {
    slug: "ilyra-morn", name: "Ilyra Morn", age: "59 anos", house: "Sem casa", role: "funcionário", position: "Curadora dos Jardins do Norte",
    description: "Herborista responsável pelas estufas e jardins da Academia, autora do Herbário das Luas.",
    personality: ["Paciente", "Prática", "Silenciosa", "Afiada quando provocada"],
    biography: ["Ilyra nunca foi aluna da Academia: foi convidada a assumir os jardins após salvar a coleção de beladonas prateadas de uma geada arcana. Permanece desde então, respondendo apenas à Diretora.", "Sabe mais sobre os corredores e passagens da Academia do que muitos mestres — plantas crescem onde há correntes de ar, e correntes de ar revelam passagens."],
    appearances: ["Colheita da lua nova", "Revisão anual das estufas"],
    secrets: [{ id: "ilyra-1", title: "A passagem da estufa", content: "Uma entrada para a Cripta Inferior fica sob a terceira estufa. Ilyra a mantém oculta por acordo com a Diretora.", requiredLevel: "Chancela Dourada", locked: true }],
    relations: [
      { targetSlug: "livia-morn", relation: "tia de", note: "Trouxe a sobrinha para a Academia após a morte dos pais dela." },
      { targetSlug: "elara-voss", relation: "responde apenas a", note: "Acordo firmado quando assumiu os jardins." },
    ],
    relatedRecords: [
      { label: "Herbário das Luas", description: "Sua obra catalogada.", to: "/biblioteca", kind: "Livro" },
      { label: "Bosque dos Sussurros", description: "Fonte de espécies raras que cultiva.", to: "/mapa", kind: "Lugar" },
    ],
    keywords: ["herbologia", "jardins", "funcionária", "plantas", "lua"], sigil: "❧",
  },
  {
    slug: "livia-morn", name: "Lívia Morn", age: "17 anos", house: "Casa do Véu", role: "aluno", position: "Estudante do quinto ano",
    description: "Estudante de memória prodigiosa e ambição declarada: pretende ser a mais jovem Guardiã dos Arquivos da história.",
    personality: ["Competitiva", "Metódica", "Eloquente", "Desconfiada"],
    biography: ["Criada entre as estufas pela tia, Lívia decorou catálogos inteiros antes de aprender a escrever. Ingressou na Casa do Véu com as maiores notas de admissão da década.", "Coleciona aprovações formais e guarda, em um caderno de capa preta, a lista de tudo o que a Academia ainda não permitiu que ela lesse."],
    appearances: ["Debate anual entre as casas — vitória pela Casa do Véu", "Exame de Selos — segunda colocação, um ponto atrás de Theon Vael"],
    secrets: [{ id: "livia-1", title: "O caderno de capa preta", content: "Lívia já identificou três documentos cujo conteúdo a Academia nega existir, incluindo o Protocolo do Eclipse.", requiredLevel: "Chancela Dourada", locked: true }],
    relations: [
      { targetSlug: "theon-vael", relation: "rival de", note: "A rivalidade é respeitosa — e feroz." },
      { targetSlug: "ilyra-morn", relation: "sobrinha de", note: "Ajuda nas estufas às sextas, por escolha própria." },
    ],
    relatedRecords: [
      { label: "Casa do Véu", description: "Sua casa.", to: "/casas", kind: "Casa" },
      { label: "Arquivos Secretos", description: "Seu objetivo declarado de carreira.", to: "/arquivos-secretos", kind: "Arquivo" },
    ],
    keywords: ["aluna", "véu", "rival", "arquivos"], sigil: "☽",
  },
  {
    slug: "lysandra-aster", name: "Lysandra Aster", age: "Falecida (Era Primeira)", house: "Casa da Aurora", role: "personagem histórico", position: "Fundadora da Academia",
    description: "Fundadora da Casa da Aurora, autora dos Votos de Luz e do Tratado das Sete Chamas.",
    personality: ["Visionária", "Conciliadora", "Firme"],
    biography: ["Lysandra reuniu os primeiros mestres diante da chama da Aurora e redigiu os votos que ainda hoje abrem o ano acadêmico. É a figura mais citada — e menos conhecida — dos registros da fundação.", "Documentos recentes sugerem que parte de suas anotações foi deliberadamente retirada do Tratado antes da publicação."],
    appearances: ["Tratado das Sete Chamas", "Votos de Luz — recitados anualmente"],
    secrets: [{ id: "lysandra-1", title: "As anotações removidas", content: "As páginas retiradas do Tratado descrevem um oitavo fogo que Lysandra decidiu não acender.", requiredLevel: "Sigilo Rubro", locked: true }],
    relations: [
      { targetSlug: "elara-voss", relation: "tem seus escritos estudados por", note: "A Diretora dedica décadas às suas anotações marginais." },
    ],
    relatedRecords: [
      { label: "Tratado das Sete Chamas", description: "Seu relato fundador.", to: "/biblioteca", kind: "Livro" },
      { label: "Casa da Aurora", description: "A casa que fundou.", to: "/casas", kind: "Casa" },
    ],
    keywords: ["fundadora", "história", "asteria", "chamas", "votos"], sigil: "♜",
  },
  {
    slug: "soren-halvek", name: "Soren Halvek", age: "Desaparecido (Era Segunda)", house: "Casa do Véu", role: "personagem histórico", position: "Teórico da Transfiguração",
    description: "Autor dos Princípios da Matéria Mutável; desapareceu durante a catalogação de sua própria obra.",
    personality: ["Brilhante", "Obsessivo", "Enigmático"],
    biography: ["Soren publicou, em vida, apenas fragmentos de sua teoria sobre a alteração permanente da matéria. O volume completo chegou à Biblioteca após seu desaparecimento — e algumas páginas mudam de posição entre consultas.", "O Conselho jamais confirmou sua procedência, e o livro permanece catalogado como DESCONHECIDO."],
    appearances: ["Princípios da Matéria Mutável", "Atas do Conselho da Era Segunda"],
    secrets: [{ id: "soren-1", title: "A última página", content: "A última página do manuscrito original contém uma assinatura recente — datada deste ano.", requiredLevel: "Sigilo Rubro", locked: true }],
    relations: [{ targetSlug: "lysandra-aster", relation: "citou em seu manuscrito", note: "Reivindicou ter lido as anotações removidas da fundadora." }],
    relatedRecords: [
      { label: "Princípios da Matéria Mutável", description: "Sua obra de origem incerta.", to: "/biblioteca", kind: "Livro" },
      { label: "Espelho de Cinzas", description: "Artefato possivelmente criado por seu método.", to: "/artefatos", kind: "Artefato" },
    ],
    keywords: ["transfiguração", "matéria", "desconhecido", "histórico"], sigil: "◇",
  },
  {
    slug: "orin-de-valebruma", name: "Orin de Valebruma", age: "Falecido (Era Terceira)", house: "Sem casa", role: "personagem histórico", position: "Cartógrafo das Rotas Celestes",
    description: "Cartógrafo que mapeou as rotas dos dragões celestes e as primeiras passagens mutáveis da Academia.",
    personality: ["Metódico", "Aventureiro", "Discreto"],
    biography: ["Orin passou quarenta anos observando o céu e os corredores da Academia com o mesmo rigor. Seu Atlas dos Dragões Celestes permanece a referência padrão — e seu mapa das passagens, a versão mais confiável já registrada."],
    appearances: ["Atlas dos Dragões Celestes", "Primeiro mapa das passagens mutáveis"],
    secrets: [],
    relations: [{ targetSlug: "celene-arcturus", relation: "tem sua obra continuada por", note: "A professora atualiza suas rotas a cada equinócio." }],
    relatedRecords: [
      { label: "Atlas dos Dragões Celestes", description: "Sua obra-prima.", to: "/biblioteca", kind: "Livro" },
      { label: "Mapa da Academia", description: "Base cartográfica atual.", to: "/mapa", kind: "Lugar" },
    ],
    keywords: ["cartógrafo", "mapa", "dragões", "histórico"], sigil: "☾",
  },
  {
    slug: "mara-quill", name: "Mara Quill", age: "48 anos", house: "Casa da Brasa", role: "ex-aluno", position: "Ex-aluna expulsa; paradeiro registrado em Valebruma",
    description: "Expulsa após conduzir experimentos não autorizados com ouro vivo; seus relatórios permanecem sob custódia da Diretora.",
    personality: ["Audaciosa", "Ressentida", "Brilhante"],
    biography: ["Mara foi a aluna mais promissora de sua turma até a noite em que o laboratório leste ardeu em chamas douradas. A expulsão foi formal, rápida e — segundo testemunhas — estranhamente silenciosa.", "Registros de Valebruma indicam que ela continua pesquisando. O que exatamente, ninguém na Academia comenta."],
    appearances: ["Ata de expulsão da Era Quarta", "Relatório do incidente do laboratório leste"],
    secrets: [{ id: "mara-1", title: "O experimento real", content: "O incêndio não foi um acidente: Mara conseguiu fazer o ouro vivo responder a um juramento quebrado — e o Conselho decidiu que ninguém mais deveria saber como.", requiredLevel: "Sigilo Rubro", locked: true }],
    relations: [
      { targetSlug: "aldren-quill", relation: "irmã de", note: "Ele jamais falou publicamente sobre a expulsão." },
      { targetSlug: "elara-voss", relation: "tem seu caso custodiado por", note: "A Diretora mantém os relatórios em seu gabinete pessoal." },
    ],
    relatedRecords: [
      { label: "Transmutação do Ouro Vivo", description: "Anotações ligadas à sua pesquisa.", to: "/biblioteca", kind: "Livro" },
      { label: "Casa da Brasa", description: "Sua casa de origem.", to: "/casas", kind: "Casa" },
    ],
    keywords: ["ex-aluna", "ouro vivo", "expulsa", "brasa"], sigil: "△",
  },
];

export const getCharacterBySlug = (slug: string) => characters.find((c) => c.slug === slug);
export const getRelationsOf = (slug: string) => {
  const direct = characters.find((c) => c.slug === slug)?.relations.map((r) => ({ from: slug, ...r })) ?? [];
  const incoming = characters.flatMap((c) => c.relations.filter((r) => r.targetSlug === slug).map((r) => ({ from: c.slug, targetSlug: slug, relation: r.relation, note: r.note, incoming: true as const })));
  return { direct, incoming };
};
