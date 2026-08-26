/**
 * ============================================================
 * CONFIGURAÇÕES DA CLÍNICA — EDITE AQUI
 * ============================================================
 * Este arquivo centraliza todas as informações que devem ser
 * substituídas pelos dados reais da Lovatte & Freire Odontologia.
 * Campos marcados com "// SUBSTITUIR" precisam de atenção.
 * ============================================================
 */

const siteConfig = {
  clinicName: 'Lovatte & Freire Odontologia',
  city: 'Guapimirim',
  state: 'RJ',

  phone: {
    display: '(21) 2632-2809',
    // SUBSTITUIR: link "tel:" — mantenha apenas números, com DDI 55
    href: 'tel:+552126322809',
  },

  // SUBSTITUIR: número real de WhatsApp (com DDI 55 + DDD, sem espaços/símbolos)
  // e a mensagem inicial, se desejar.
  whatsapp: {
    number: '5521999999999', // <-- número placeholder, TROCAR pelo real
    message: 'Olá! Gostaria de agendar uma avaliação na Lovatte & Freire Odontologia.',
    get link() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`
    },
  },

  // SUBSTITUIR: endereço completo real da clínica
  address: {
    line1: 'Endereço a confirmar', // <-- placeholder
    line2: 'Guapimirim - RJ',
    // SUBSTITUIR: coloque o CEP real, se desejar exibir
    zip: '',
  },

  // SUBSTITUIR: instagram real (com @) e link do perfil
  instagram: {
    handle: '@lovattefreire', // <-- placeholder, confirmar handle real
    link: 'https://instagram.com/', // <-- SUBSTITUIR pelo link real do perfil
  },

  // SUBSTITUIR: horário real de atendimento
  hours: [
    { days: 'Segunda a sexta', time: 'Horário a confirmar' },
    { days: 'Sábado', time: 'Horário a confirmar' },
  ],

  // SUBSTITUIR: embed real do Google Maps assim que o endereço for definido
  googleMapsEmbedUrl: '',

  // Itens de exemplo — o proprietário deve confirmar quais tratamentos
  // são realmente oferecidos antes de publicar o site.
  specialtiesNote:
    'Os itens abaixo são exemplos e devem ser confirmados/editados pela clínica antes da publicação.',
  specialties: [
    {
      title: 'Clínica Geral',
      description: 'Cuidados odontológicos essenciais para a saúde do seu sorriso.',
    },
    {
      title: 'Estética Odontológica',
      description: 'Procedimentos voltados à harmonia e beleza do sorriso.',
    },
    {
      title: 'Ortodontia',
      description: 'Alinhamento dental com acompanhamento próximo e cuidadoso.',
    },
    {
      title: 'Implantodontia',
      description: 'Soluções para reposição dentária com foco em conforto e função.',
    },
    {
      title: 'Harmonização do Sorriso',
      description: 'Ajustes estéticos pensados para valorizar seu sorriso natural.',
    },
    {
      title: 'Odontopediatria',
      description: 'Atendimento odontológico dedicado aos pequenos pacientes.',
    },
  ],

  // Placeholders — substituir por fotos reais da clínica antes de publicar.
  galleryPlaceholders: [
    'Foto real da recepção',
    'Foto real do consultório',
    'Foto real da sala de espera',
    'Foto real da fachada',
    'Foto real do ambiente',
    'Foto real da estrutura',
  ],

  // Depoimentos reais devem ser inseridos aqui — NUNCA inventados.
  testimonialsPlaceholders: [1, 2, 3],

  // Casos reais de antes/depois devem ser inseridos aqui pela clínica,
  // sempre com autorização do paciente. NENHUM caso ou resultado foi
  // inventado — os itens abaixo são apenas placeholders de layout.
  beforeAfterNote:
    'Espaço reservado para casos reais, com autorização do paciente. Nenhum resultado é garantido.',
  beforeAfterCases: [
    {
      label: 'Caso 1',
      treatment: 'Tratamento a especificar',
      // SUBSTITUIR: caminho das fotos reais (coloque os arquivos na pasta public/)
      beforeImage: '/antes1.png',
      afterImage: '/depois1.png',
    },
    {
      label: 'Caso 2',
      treatment: 'Tratamento a especificar',
      beforeImage: '/antes2.png',
      afterImage: '/depois2.png',
    },
    // Para os 2 casos que você já adicionou, inclua aqui mais dois objetos
    // seguindo o mesmo modelo acima, com os nomes reais dos arquivos que
    // você colocou na pasta public/ (ex.: '/antes3.png', '/depois3.png').
  ],

  // Serviço adicional oferecido pela clínica. Textos e benefícios abaixo
  // são de caráter geral — revisar/ajustar conforme o equipamento e o
  // protocolo real utilizados pela clínica antes de publicar.
  laserHairRemoval: {
    eyebrow: 'Serviço adicional',
    title: 'Depilação a laser',
    description:
      'Além dos cuidados com o sorriso, a Lovatte & Freire Odontologia também oferece depilação a laser, unindo praticidade e bem-estar em um só lugar.',
    benefits: [
      'Atendimento no mesmo espaço de confiança da clínica',
      'Procedimento realizado por equipe qualificada',
      'Avaliação individual antes do início do tratamento',
      'Agendamento fácil pelo WhatsApp',
    ],
    // SUBSTITUIR: liste aqui as áreas realmente atendidas, se desejar exibir
    // Ex.: ['Axilas', 'Pernas', 'Buço', 'Costas']
    areasNote: 'Áreas atendidas a confirmar com a clínica.',
  },

  // Página dedicada de fotos — Depilação a laser.
  // Substituir os 4 placeholders abaixo por fotos reais do ambiente,
  // equipamento e procedimento assim que estiverem disponíveis.
  laserGalleryPage: {
    title: 'Depilação a laser',
    intro:
      'Fotos do espaço e do procedimento de depilação a laser na Lovatte & Freire Odontologia.',
    photos: [
      'Foto 1 — a inserir',
      'Foto 2 — a inserir',
      'Foto 3 — a inserir',
      'Foto 4 — a inserir',
    ],
  },

  // Página dedicada de fotos — Antes e depois (tratamento dos dentes).
  // Reaproveita os casos de siteConfig.beforeAfterCases (2 casos = 4 fotos,
  // sendo 1 "antes" e 1 "depois" por caso). Adicione mais casos aqui e em
  // beforeAfterCases conforme novos exemplos reais forem autorizados.
  dentalGalleryPage: {
    title: 'Antes e depois do tratamento dos dentes',
    intro:
      'Compare os casos abaixo arrastando o controle. Fotos reais, publicadas apenas com autorização do paciente.',
  },
}

export default siteConfig
