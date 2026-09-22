export const libraryCategories = [
  "História", "Feitiçaria", "Poções", "Herbologia", "Criaturas", "Alquimia", "Astronomia", "Transfiguração", "Artefatos", "Documentos proibidos",
] as const;

export type LibraryCategory = (typeof libraryCategories)[number];
export type BookStatus = "DISPONÍVEL" | "RESTRITO" | "DESCONHECIDO" | "DESBLOQUEADO";
export type UnlockMethod = "senha" | "evento da campanha" | "código" | "conquista" | "ação do mestre";

export interface RelatedDocument {
  label: string;
  description: string;
  to: "/personagens" | "/criaturas" | "/artefatos" | "/feiticos" | "/mapa" | "/casas" | "/arquivos-secretos";
  kind: "Personagem" | "Criatura" | "Artefato" | "Feitiço" | "Lugar" | "Casa" | "Arquivo";
  keywords: string[];
}

export interface ArcaneBook {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: LibraryCategory;
  description: string;
  accessLevel: string;
  status: BookStatus;
  sigil: string;
  volume: string;
  keywords: string[];
  content: string[];
  notes: string[];
  related: RelatedDocument[];
  unlockMethods?: UnlockMethod[];
}

export const arcaneBooks: ArcaneBook[] = [
  {
    slug: "codice-de-vael", title: "O Códice de Vael", author: "Arquimago Vael Serath", date: "Era Primeira, 143", category: "Feitiçaria", description: "Fragmentos restaurados do mais antigo tratado conhecido sobre magia ritual e selos de contenção.", accessLevel: "Círculo VII", status: "DISPONÍVEL", sigil: "✦", volume: "Cod. V–81", keywords: ["ritual", "selos", "restauração", "vael", "dragão", "dracônico"],
    content: ["Vael inicia seu tratado afirmando que todo feitiço deixa uma impressão no lugar onde foi pronunciado. Essas marcas, invisíveis aos olhos comuns, podem ser lidas como uma segunda escrita.", "O oitavo fragmento descreve o encontro do autor com um dragão de bronze nas montanhas de Nym. A criatura teria ensinado a forma original do selo de contenção, em troca da preservação de seu verdadeiro nome.", "As páginas finais registram o Rito da Chama Quietude, cuja execução exige três conjuradores e um artefato capaz de conservar memória."],
    notes: ["A tradução do fragmento VIII permanece sob revisão de Mestra Elara Voss.", "Não pronunciar em voz alta as inscrições da margem inferior."],
    related: [{label:"Mestra Elara Voss",description:"Responsável pela restauração do códice.",to:"/personagens",kind:"Personagem",keywords:["vael","dragão"]},{label:"Dragões de Bronze",description:"Registro de criaturas associadas aos selos de Vael.",to:"/criaturas",kind:"Criatura",keywords:["dragão","dracônico"]},{label:"A Chave Bronzeada",description:"Artefato citado no terceiro fragmento.",to:"/artefatos",kind:"Artefato",keywords:["dragão","bronze"]}],
  },
  {
    slug: "herbario-das-luas", title: "Herbário das Luas", author: "Ilyra Morn", date: "Era Terceira, 28", category: "Herbologia", description: "Propriedades arcanas de plantas colhidas sob cada fase lunar, com notas sobre cultivo e conservação.", accessLevel: "Círculo II", status: "DISPONÍVEL", sigil: "❧", volume: "Herb. L–12", keywords: ["lua", "plantas", "cura", "jardim", "poções"],
    content: ["Toda raiz possui duas naturezas: aquela que absorve da terra e aquela que recebe da lua. Colhê-la no momento incorreto não destrói seu poder, mas altera profundamente sua intenção.", "A beladona prateada deve ser cortada somente quando a lua nova estiver oculta. Sob lua cheia, suas folhas produzem um vapor que induz sonhos proféticos."],
    notes: ["Exemplar anotado pela curadora dos Jardins do Norte."],
    related: [{label:"Bosque dos Sussurros",description:"Habitat de espécies lunares raras.",to:"/mapa",kind:"Lugar",keywords:["herbologia","lua"]},{label:"Poção do Sono Lúcido",description:"Preparado que utiliza beladona prateada.",to:"/feiticos",kind:"Feitiço",keywords:["poção","ervas"]}],
  },
  {
    slug: "tratado-das-sete-chamas", title: "Tratado das Sete Chamas", author: "Lysandra Aster", date: "Era Primeira, 19", category: "História", description: "Relato fundador sobre as sete escolas elementais e a criação dos primeiros votos de Asteria.", accessLevel: "Círculo III", status: "DESBLOQUEADO", sigil: "♜", volume: "Hist. A–07", keywords: ["fundação", "asteria", "casas", "chamas", "lysandra"],
    content: ["Antes de existirem casas, havia sete fogueiras acesas ao redor de uma torre sem nome. Cada chama representava uma promessa: proteger, ensinar, descobrir, recordar, transformar, curar e vigiar.", "Lysandra reuniu os primeiros mestres diante da chama da Aurora e redigiu os votos que ainda hoje iniciam o ano acadêmico."],
    notes: ["Documento desbloqueado durante a Vigília dos Fundadores."],
    related: [{label:"Lysandra Aster",description:"Fundadora e autora deste tratado.",to:"/personagens",kind:"Personagem",keywords:["fundadora","asteria"]},{label:"Casa da Aurora",description:"Linhagem formada em torno da primeira chama.",to:"/casas",kind:"Casa",keywords:["chama","lysandra"]}],
  },
  {
    slug: "manual-de-elixires-volateis", title: "Manual de Elixires Voláteis", author: "Prof. Aldren Quill", date: "Era Quarta, 61", category: "Poções", description: "Procedimentos seguros para preparar compostos que reagem à presença de magia elemental.", accessLevel: "Círculo IV", status: "DISPONÍVEL", sigil: "⚗", volume: "Pot. Q–33", keywords: ["elixir", "poção", "alquimia", "fogo", "laboratório"],
    content: ["Um elixir volátil não é necessariamente explosivo. O termo descreve preparados cuja natureza muda segundo o campo mágico do alquimista.", "Jamais misture sal de salamandra a uma solução lunar sem antes neutralizar seu pulso térmico."],
    notes: ["Uso permitido apenas nos laboratórios supervisionados."],
    related: [{label:"Casa da Brasa",description:"Especialistas em reagentes elementais.",to:"/casas",kind:"Casa",keywords:["fogo","poções"]},{label:"Lince de Ferro",description:"Suas limalhas aparecem em uma fórmula histórica.",to:"/criaturas",kind:"Criatura",keywords:["alquimia"]}],
  },
  {
    slug: "atlas-dos-dragoes-celestes", title: "Atlas dos Dragões Celestes", author: "Orin de Valebruma", date: "Era Terceira, 92", category: "Criaturas", description: "Rotas migratórias, constelações e sinais usados para observar dragões acima das nuvens.", accessLevel: "Círculo V", status: "DISPONÍVEL", sigil: "☾", volume: "Best. D–09", keywords: ["dragão", "dragões", "celeste", "astronomia", "orin", "mapa", "criaturas"],
    content: ["Os dragões celestes não seguem as estações terrestres. Sua migração responde ao movimento de constelações que já desapareceram do céu visível.", "Orin observou que as escamas de um dragão celeste refletem mapas diferentes conforme o ponto de observação. O fenômeno tornou possível localizar três passagens suspensas sobre Asteria."],
    notes: ["As coordenadas do apêndice foram atualizadas no último equinócio."],
    related: [{label:"Orin de Valebruma",description:"Cartógrafo e autor das observações.",to:"/personagens",kind:"Personagem",keywords:["dragão","mapa"]},{label:"Dragões de Bronze",description:"Família terrestre relacionada às espécies celestes.",to:"/criaturas",kind:"Criatura",keywords:["dragão"]},{label:"Astrolábio de Nym",description:"Instrumento utilizado nas observações.",to:"/artefatos",kind:"Artefato",keywords:["dragão","astronomia"]}],
  },
  {
    slug: "principios-da-materia-mutavel", title: "Princípios da Matéria Mutável", author: "Soren Halvek", date: "Era Segunda, 205", category: "Transfiguração", description: "Fundamentos, limites e paradoxos da alteração permanente de formas materiais.", accessLevel: "Círculo VI", status: "DESCONHECIDO", sigil: "◇", volume: "Trans. H–02", keywords: ["forma", "matéria", "transfiguração", "paradoxo"],
    content: ["A catalogação deste volume está incompleta. Algumas páginas parecem mudar de posição entre consultas."],
    notes: ["Procedência ainda não confirmada pelo Conselho."],
    related: [{label:"Espelho de Cinzas",description:"Artefato possivelmente criado a partir deste método.",to:"/artefatos",kind:"Artefato",keywords:["matéria","forma"]}],
  },
  {
    slug: "astrolabio-e-os-nove-ceus", title: "O Astrolábio e os Nove Céus", author: "Celene Arcturus", date: "Era Quarta, 12", category: "Astronomia", description: "Guia de leitura das nove esferas celestes e de seus efeitos sobre os portais da Academia.", accessLevel: "Círculo IV", status: "DISPONÍVEL", sigil: "✧", volume: "Astr. C–19", keywords: ["céu", "estrelas", "astrolábio", "portais", "nym"],
    content: ["As nove esferas não são lugares, mas ritmos. Quando dois ritmos coincidem, as distâncias entre certos pontos deixam de obedecer às medidas comuns."],
    notes: ["Consultar junto ao mapa do Observatório."],
    related: [{label:"Astrolábio de Nym",description:"Instrumento central do estudo.",to:"/artefatos",kind:"Artefato",keywords:["astronomia","nym"]},{label:"Torre do Observatório",description:"Local indicado para as medições.",to:"/mapa",kind:"Lugar",keywords:["estrelas"]}],
  },
  {
    slug: "chave-bronzeada", title: "Dossiê da Chave Bronzeada", author: "Conselho Arcano", date: "Data suprimida", category: "Artefatos", description: "Relatório técnico sobre a chave que abre uma passagem diferente a cada equinócio.", accessLevel: "Chancela Dourada", status: "RESTRITO", sigil: "⚿", volume: "Art. R–01", keywords: ["chave", "bronze", "porta", "equinócio", "dragão", "artefato"], content: [], notes: [], unlockMethods: ["senha", "evento da campanha", "código", "conquista", "ação do mestre"],
    related: [{label:"A Chave Bronzeada",description:"Ficha pública do artefato.",to:"/artefatos",kind:"Artefato",keywords:["chave","dragão"]},{label:"A Décima Primeira Porta",description:"Arquivo possivelmente relacionado à chave.",to:"/arquivos-secretos",kind:"Arquivo",keywords:["porta","restrito"]}],
  },
  {
    slug: "protocolo-do-eclipse", title: "Protocolo do Eclipse", author: "Autoria expurgada", date: "Data selada", category: "Documentos proibidos", description: "Procedimentos preservados para um evento astronômico que ainda não ocorreu.", accessLevel: "Sigilo Rubro", status: "RESTRITO", sigil: "◉", volume: "Proib. E–00", keywords: ["eclipse", "proibido", "ritual", "evento", "segredo"], content: [], notes: [], unlockMethods: ["evento da campanha", "código", "ação do mestre"],
    related: [{label:"Arquivos Secretos",description:"Setor responsável pela custódia do protocolo.",to:"/arquivos-secretos",kind:"Arquivo",keywords:["eclipse","proibido"]},{label:"Torre do Observatório",description:"Ponto de observação citado no lacre externo.",to:"/mapa",kind:"Lugar",keywords:["eclipse"]}],
  },
  {
    slug: "transmutacao-do-ouro-vivo", title: "Transmutação do Ouro Vivo", author: "Magister Othar", date: "Era Segunda, 77", category: "Alquimia", description: "Anotações sobre um metal que reage a juramentos e conserva a memória de seus portadores.", accessLevel: "Círculo VIII", status: "DESBLOQUEADO", sigil: "△", volume: "Alq. O–77", keywords: ["ouro", "metal", "memória", "alquimia", "artefato"],
    content: ["O ouro vivo não é extraído: é convencido. Sua matéria reconhece promessas pronunciadas com intenção verdadeira e se organiza ao redor delas.", "Uma liga imperfeita foi utilizada na Chave Bronzeada. Isso explicaria sua capacidade de recordar portas que já não existem."],
    notes: ["Desbloqueado pela conquista: Voz do Metal."],
    related: [{label:"A Chave Bronzeada",description:"Artefato forjado com liga de ouro vivo.",to:"/artefatos",kind:"Artefato",keywords:["ouro","alquimia"]},{label:"Mestra Elara Voss",description:"Conduziu a análise contemporânea do metal.",to:"/personagens",kind:"Personagem",keywords:["ouro"]}],
  },
];

export const getBookBySlug = (slug: string) => arcaneBooks.find((book) => book.slug === slug);

export interface SearchResult { id: string; title: string; description: string; kind: string; to: RelatedDocument["to"]; keywords: string[]; }
export const externalSearchEntries: SearchResult[] = [
  {id:"char-elara",title:"Mestra Elara Voss",description:"Guardião-mor, restauradora do Códice de Vael e pesquisadora de dragões.",kind:"Personagem",to:"/personagens",keywords:["dragão","vael","arquivos"]},
  {id:"char-orin",title:"Orin de Valebruma",description:"Cartógrafo das rotas dos dragões celestes.",kind:"Personagem",to:"/personagens",keywords:["dragão","mapa","astronomia"]},
  {id:"creature-dragons",title:"Dragões de Bronze",description:"Criaturas antigas associadas aos selos de contenção.",kind:"Criatura",to:"/criaturas",keywords:["dragão","bronze","vael"]},
  {id:"artifact-key",title:"A Chave Bronzeada",description:"Artefato ligado a passagens, equinócios e relatos dracônicos.",kind:"Artefato",to:"/artefatos",keywords:["dragão","chave","bronze"]},
];
