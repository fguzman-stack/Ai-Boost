"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "es" | "en" | "fr" | "de" | "pt" | "it";

const baseTranslations = {
  es: {
    nav: { platform: "Plataforma", tools: "Herramientas", pricing: "Precios", contact: "Contacto", demo: "Probar gratis" },
    home: {
      eyebrow: "La inteligencia que trabaja a tu ritmo",
      title: "Ideas brillantes,\nconvertidas en movimiento.",
      description: "Una plantilla premium para negocios de inteligencia artificial: crea, piensa y avanza con herramientas de IA listas para personalizar.",
      primary: "Explorar la plataforma",
      secondary: "Ver cómo funciona",
      trusted: "Potencia creativa para equipos que no esperan",
      signal: "MODO DEMO ACTIVO",
      signalText: "Sin tarjeta · Resultados simulados",
      toolsEyebrow: "Tu nuevo espacio de trabajo",
      toolsTitle: "Cuatro atajos para llegar más lejos.",
      toolsText: "Prueba el flujo, descubre el potencial y conecta tus propias claves cuando estés listo.",
      featureEyebrow: "Diseñado para el ritmo real",
      featureTitle: "Menos pestañas.\nMás cosas hechas.",
      featureText: "AI-Boost Pro reúne las piezas que tu equipo usa cada día en una interfaz rápida, clara y lista para crecer.",
      points: ["Resultados en segundos", "Tus claves siempre protegidas", "Sin configuración complicada"],
      pricingEyebrow: "Una inversión que escala",
      pricingTitle: "Empieza pequeño.\nPiensa en grande.",
      personal: "Personal",
      personalText: "Para probar nuevas ideas y trabajar más rápido.",
      agency: "Studio",
      agencyText: "Para equipos y agencias que convierten IA en ventaja.",
      buy: "Elegir este plan",
      finale: "Tu próxima gran idea ya está esperando.",
      finaleText: "Abre AI-Boost Pro y dale forma en minutos.",
    },
    tools: {
      chat: { label: "01 · Conversación", title: "Chat inteligente", text: "Piensa en voz alta. La IA te ayuda a encontrar el siguiente paso.", placeholder: "Escribe una pregunta...", empty: "¿En qué estás trabajando hoy?", send: "Enviar", you: "Tú", ai: "IA" },
      summary: { label: "02 · Claridad", title: "Resumen preciso", text: "Convierte textos largos en decisiones fáciles de compartir.", placeholder: "Pega el texto que quieres resumir...", action: "Resumir texto", loading: "Resumiendo...", result: "Resultado" },
      content: { label: "03 · Creación", title: "Contenido que avanza", text: "Un buen punto de partida para blogs, FAQs y campañas.", placeholder: "¿Sobre qué quieres escribir?", action: "Crear borrador", loading: "Generando...", result: "Borrador" },
      image: { label: "04 · Visión", title: "Imágenes con intención", text: "Describe una dirección visual y deja que la idea aparezca.", placeholder: "Describe la imagen que imaginas...", action: "Crear imagen", loading: "Generando...", result: "Vista previa simulada" },
    },
    contact: { eyebrow: "Hablemos", title: "Demos forma a\ntu próxima idea.", text: "Cuéntanos qué estás construyendo y te mostraremos cómo convertir AI-Boost Pro en la experiencia de tu negocio.", name: "Nombre", email: "Correo electrónico", message: "Cuéntanos sobre tu proyecto...", send: "Enviar consulta", direct: "O escríbenos directamente", response: "Respondemos normalmente en menos de 24 horas.", availability: "Disponible para nuevos proyectos", detail: "Plantillas, personalización e integraciones de IA." },
    services: { eyebrow: "Para cada ambición", title: "Una base sólida\npara negocios de IA.", text: "Una plantilla flexible para lanzar, validar y hacer crecer productos y servicios basados en inteligencia artificial.", cards: [{ title: "Agencias de IA", text: "Presenta tus servicios con una experiencia que comunica capacidad desde el primer scroll." }, { title: "SaaS inteligente", text: "Explica tu producto, demuestra su valor y lleva a tus visitantes hacia la acción." }, { title: "Consultoría", text: "Convierte conocimiento experto en una presencia digital clara, confiable y memorable." }, { title: "Equipos creativos", text: "Combina storytelling, herramientas interactivas y una identidad lista para evolucionar." }], processTitle: "De la idea al lanzamiento", process: ["Elige tu dirección", "Personaliza el contenido", "Conecta tus APIs", "Lanza con confianza"], cta: "Hablar sobre mi proyecto" },
    footer: { note: "Herramientas para hacer que las buenas ideas sucedan.", rights: "Todos los derechos reservados.", contact: "Hablemos" },
  },
  en: {
    nav: { platform: "Platform", tools: "Tools", pricing: "Pricing", contact: "Contact", demo: "Try for free" },
    home: {
      eyebrow: "Intelligence that moves at your pace",
      title: "Bright ideas,\nturned into momentum.",
      description: "A premium template for AI businesses: create, think and move forward with intelligent tools ready to customize.",
      primary: "Explore the platform",
      secondary: "See how it works",
      trusted: "Creative power for teams that do not wait",
      signal: "DEMO MODE ACTIVE",
      signalText: "No card · Simulated results",
      toolsEyebrow: "Your new workspace",
      toolsTitle: "Four shortcuts to go further.",
      toolsText: "Try the flow, discover the potential and connect your own keys when you are ready.",
      featureEyebrow: "Built for the real pace",
      featureTitle: "Fewer tabs.\nMore done.",
      featureText: "AI-Boost Pro brings together the pieces your team uses every day in a fast, clear interface ready to grow.",
      points: ["Results in seconds", "Your keys stay protected", "No complicated setup"],
      pricingEyebrow: "An investment that scales",
      pricingTitle: "Start small.\nThink big.",
      personal: "Personal",
      personalText: "For exploring new ideas and moving faster.",
      agency: "Studio",
      agencyText: "For teams and agencies turning AI into an edge.",
      buy: "Choose this plan",
      finale: "Your next big idea is already waiting.",
      finaleText: "Open AI-Boost Pro and shape it in minutes.",
    },
    tools: {
      chat: { label: "01 · Conversation", title: "Smart chat", text: "Think out loud. AI helps you find the next step.", placeholder: "Ask a question...", empty: "What are you working on today?", send: "Send", you: "You", ai: "AI" },
      summary: { label: "02 · Clarity", title: "Precise summaries", text: "Turn long text into decisions that are easy to share.", placeholder: "Paste the text you want to summarize...", action: "Summarize text", loading: "Summarizing...", result: "Result" },
      content: { label: "03 · Creation", title: "Content that moves", text: "A strong starting point for blogs, FAQs and campaigns.", placeholder: "What do you want to write about?", action: "Create draft", loading: "Generating...", result: "Draft" },
      image: { label: "04 · Vision", title: "Images with intent", text: "Describe a visual direction and let the idea appear.", placeholder: "Describe the image you imagine...", action: "Create image", loading: "Generating...", result: "Simulated preview" },
    },
    contact: { eyebrow: "Let’s talk", title: "Let’s shape\nyour next idea.", text: "Tell us what you are building and we will show you how to turn AI-Boost Pro into your business experience.", name: "Name", email: "Email address", message: "Tell us about your project...", send: "Send enquiry", direct: "Or email us directly", response: "We usually reply within 24 hours.", availability: "Available for new projects", detail: "Templates, customization and AI integrations." },
    services: { eyebrow: "For every ambition", title: "A strong foundation\nfor AI businesses.", text: "A flexible template to launch, validate and grow products and services powered by artificial intelligence.", cards: [{ title: "AI agencies", text: "Present your services through an experience that communicates capability from the first scroll." }, { title: "Smart SaaS", text: "Explain your product, prove its value and guide visitors toward action." }, { title: "Consulting", text: "Turn expert knowledge into a digital presence that feels clear, trusted and memorable." }, { title: "Creative teams", text: "Combine storytelling, interactive tools and an identity ready to evolve." }], processTitle: "From idea to launch", process: ["Choose your direction", "Customize the content", "Connect your APIs", "Launch with confidence"], cta: "Talk about my project" },
    footer: { note: "Tools that make good ideas happen.", rights: "All rights reserved.", contact: "Let’s talk" },
  },
} as const;

const translations = {
  ...baseTranslations,
  fr: {
    ...baseTranslations.en,
    nav: { platform: "Plateforme", tools: "Outils", pricing: "Tarifs", contact: "Contact", demo: "Essayer gratuitement" },
    home: { ...baseTranslations.en.home, eyebrow: "L’intelligence au rythme de votre travail", title: "Des idées brillantes,\ntransformées en élan.", description: "Un modèle premium pour les entreprises d’IA, avec des outils prêts à personnaliser.", primary: "Explorer la plateforme", secondary: "Voir comment ça marche", trusted: "Une puissance créative pour les équipes qui avancent", toolsEyebrow: "Votre nouvel espace de travail", toolsTitle: "Quatre raccourcis pour aller plus loin.", toolsText: "Testez le flux, découvrez le potentiel et connectez vos propres clés quand vous êtes prêt.", featureEyebrow: "Pensé pour le rythme réel", featureTitle: "Moins d’onglets.\nPlus de résultats.", finale: "Votre prochaine grande idée vous attend déjà.", finaleText: "Ouvrez AI-Boost Pro et donnez-lui forme en quelques minutes." },
    footer: { note: "Des outils pour donner vie aux bonnes idées.", rights: "Tous droits réservés.", contact: "Parlons-en" },
    contact: { eyebrow: "Parlons-nous", title: "Donnons forme à\nvotre prochaine idée.", text: "Dites-nous ce que vous construisez et nous vous montrerons comment adapter AI-Boost Pro à votre activité.", name: "Nom", email: "Adresse e-mail", message: "Parlez-nous de votre projet...", send: "Envoyer la demande", direct: "Ou écrivez-nous directement", response: "Nous répondons généralement sous 24 heures.", availability: "Disponible pour de nouveaux projets", detail: "Templates, personnalisation et intégrations IA." },
    services: { eyebrow: "Pour chaque ambition", title: "Une base solide\npour les entreprises d’IA.", text: "Un template flexible pour lancer, valider et développer des produits et services basés sur l’intelligence artificielle.", cards: [{ title: "Agences IA", text: "Présentez vos services avec une expérience qui inspire confiance dès le premier écran." }, { title: "SaaS intelligent", text: "Expliquez votre produit, démontrez sa valeur et guidez vos visiteurs vers l’action." }, { title: "Conseil", text: "Transformez votre expertise en une présence digitale claire, fiable et mémorable." }, { title: "Équipes créatives", text: "Associez storytelling, outils interactifs et identité prête à évoluer." }], processTitle: "De l’idée au lancement", process: ["Choisissez votre direction", "Personnalisez le contenu", "Connectez vos APIs", "Lancez en confiance"], cta: "Parler de mon projet" },
  },
  de: {
    ...baseTranslations.en,
    nav: { platform: "Plattform", tools: "Werkzeuge", pricing: "Preise", contact: "Kontakt", demo: "Kostenlos testen" },
    home: { ...baseTranslations.en.home, eyebrow: "Intelligenz, die in Ihrem Tempo arbeitet", title: "Starke Ideen,\nin Bewegung gebracht.", description: "Eine Premium-Vorlage für KI-Unternehmen mit sofort anpassbaren intelligenten Werkzeugen.", primary: "Plattform entdecken", secondary: "So funktioniert es", trusted: "Kreative Kraft für Teams, die weiterdenken", toolsEyebrow: "Ihr neuer Arbeitsbereich", toolsTitle: "Vier Abkürzungen für mehr Fortschritt.", toolsText: "Testen Sie den Ablauf, entdecken Sie das Potenzial und verbinden Sie Ihre eigenen Schlüssel.", featureEyebrow: "Für den echten Arbeitsrhythmus", featureTitle: "Weniger Tabs.\nMehr geschafft.", finale: "Ihre nächste große Idee wartet bereits.", finaleText: "Öffnen Sie AI-Boost Pro und gestalten Sie sie in Minuten." },
    footer: { note: "Werkzeuge, die gute Ideen Wirklichkeit werden lassen.", rights: "Alle Rechte vorbehalten.", contact: "Sprechen wir" },
    contact: { eyebrow: "Sprechen wir", title: "Lassen Sie uns\nIhre Idee formen.", text: "Erzählen Sie uns, was Sie entwickeln. Wir zeigen Ihnen, wie AI-Boost Pro zu Ihrem Unternehmen passt.", name: "Name", email: "E-Mail-Adresse", message: "Erzählen Sie uns von Ihrem Projekt...", send: "Anfrage senden", direct: "Oder direkt schreiben", response: "Wir antworten normalerweise innerhalb von 24 Stunden.", availability: "Verfügbar für neue Projekte", detail: "Vorlagen, Anpassung und KI-Integrationen." },
    services: { eyebrow: "Für jede Vision", title: "Eine starke Basis\nfür KI-Unternehmen.", text: "Eine flexible Vorlage für den Start, die Validierung und das Wachstum von Produkten und Services mit künstlicher Intelligenz.", cards: [{ title: "KI-Agenturen", text: "Präsentieren Sie Ihre Leistungen mit einer Erfahrung, die sofort Kompetenz vermittelt." }, { title: "Intelligentes SaaS", text: "Erklären Sie Ihr Produkt, zeigen Sie seinen Wert und führen Sie Besucher zur Aktion." }, { title: "Beratung", text: "Machen Sie aus Expertise eine klare, vertrauenswürdige und einprägsame digitale Präsenz." }, { title: "Kreativteams", text: "Verbinden Sie Storytelling, interaktive Tools und eine Identität, die mitwächst." }], processTitle: "Von der Idee zum Launch", process: ["Richtung wählen", "Inhalte anpassen", "APIs verbinden", "Sicher starten"], cta: "Über mein Projekt sprechen" },
  },
  pt: {
    ...baseTranslations.en,
    nav: { platform: "Plataforma", tools: "Ferramentas", pricing: "Preços", contact: "Contato", demo: "Experimentar grátis" },
    home: { ...baseTranslations.en.home, eyebrow: "Inteligência no ritmo do seu trabalho", title: "Ideias brilhantes,\ntransformadas em movimento.", description: "Um template premium para negócios de IA, com ferramentas inteligentes prontas para personalizar.", primary: "Explorar a plataforma", secondary: "Veja como funciona", trusted: "Potência criativa para equipes que não esperam", toolsEyebrow: "Seu novo espaço de trabalho", toolsTitle: "Quatro atalhos para ir mais longe.", toolsText: "Teste o fluxo, descubra o potencial e conecte suas próprias chaves quando estiver pronto.", featureEyebrow: "Feito para o ritmo real", featureTitle: "Menos abas.\nMais resultados.", finale: "Sua próxima grande ideia já está esperando.", finaleText: "Abra o AI-Boost Pro e dê forma a ela em minutos." },
    footer: { note: "Ferramentas para fazer boas ideias acontecerem.", rights: "Todos os direitos reservados.", contact: "Vamos conversar" },
    contact: { eyebrow: "Vamos conversar", title: "Vamos dar forma\nà sua próxima ideia.", text: "Conte o que você está construindo e mostraremos como transformar o AI-Boost Pro na experiência do seu negócio.", name: "Nome", email: "E-mail", message: "Conte sobre o seu projeto...", send: "Enviar mensagem", direct: "Ou escreva diretamente", response: "Normalmente respondemos em até 24 horas.", availability: "Disponível para novos projetos", detail: "Templates, personalização e integrações de IA." },
    services: { eyebrow: "Para cada ambição", title: "Uma base forte\npara negócios de IA.", text: "Um template flexível para lançar, validar e crescer produtos e serviços baseados em inteligência artificial.", cards: [{ title: "Agências de IA", text: "Apresente seus serviços com uma experiência que comunica capacidade desde o primeiro scroll." }, { title: "SaaS inteligente", text: "Explique seu produto, mostre seu valor e conduza visitantes à ação." }, { title: "Consultoria", text: "Transforme conhecimento em uma presença digital clara, confiável e memorável." }, { title: "Times criativos", text: "Combine storytelling, ferramentas interativas e uma identidade pronta para evoluir." }], processTitle: "Da ideia ao lançamento", process: ["Escolha sua direção", "Personalize o conteúdo", "Conecte suas APIs", "Lance com confiança"], cta: "Falar sobre meu projeto" },
  },
  it: {
    ...baseTranslations.en,
    nav: { platform: "Piattaforma", tools: "Strumenti", pricing: "Prezzi", contact: "Contatti", demo: "Prova gratis" },
    home: { ...baseTranslations.en.home, eyebrow: "L’intelligenza al ritmo del tuo lavoro", title: "Idee brillanti,\ntrasformate in slancio.", description: "Un template premium per aziende di IA, con strumenti intelligenti pronti da personalizzare.", primary: "Esplora la piattaforma", secondary: "Scopri come funziona", trusted: "Potenza creativa per team che non aspettano", toolsEyebrow: "Il tuo nuovo spazio di lavoro", toolsTitle: "Quattro scorciatoie per andare oltre.", toolsText: "Prova il flusso, scopri il potenziale e collega le tue chiavi quando sei pronto.", featureEyebrow: "Progettato per il ritmo reale", featureTitle: "Meno schede.\nPiù risultati.", finale: "La tua prossima grande idea ti sta già aspettando.", finaleText: "Apri AI-Boost Pro e trasformala in pochi minuti." },
    footer: { note: "Strumenti per trasformare le buone idee in realtà.", rights: "Tutti i diritti riservati.", contact: "Parliamone" },
    contact: { eyebrow: "Parliamone", title: "Diamo forma\nalla tua prossima idea.", text: "Raccontaci cosa stai costruendo e ti mostreremo come trasformare AI-Boost Pro nell’esperienza del tuo business.", name: "Nome", email: "Email", message: "Raccontaci del tuo progetto...", send: "Invia richiesta", direct: "Oppure scrivici direttamente", response: "Rispondiamo normalmente entro 24 ore.", availability: "Disponibili per nuovi progetti", detail: "Template, personalizzazione e integrazioni IA." },
    services: { eyebrow: "Per ogni ambizione", title: "Una base solida\nper aziende di IA.", text: "Un template flessibile per lanciare, validare e far crescere prodotti e servizi basati sull’intelligenza artificiale.", cards: [{ title: "Agenzie IA", text: "Presenta i tuoi servizi con un’esperienza che comunica competenza fin dal primo scroll." }, { title: "SaaS intelligente", text: "Spiega il prodotto, dimostrane il valore e porta i visitatori verso l’azione." }, { title: "Consulenza", text: "Trasforma la tua esperienza in una presenza digitale chiara, affidabile e memorabile." }, { title: "Team creativi", text: "Unisci storytelling, strumenti interattivi e un’identità pronta a evolvere." }], processTitle: "Dall’idea al lancio", process: ["Scegli la direzione", "Personalizza i contenuti", "Collega le API", "Lancia con fiducia"], cta: "Parliamo del mio progetto" },
  },
} as const;

type Translation = (typeof translations)[Language];
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; t: Translation }>({ language: "es", setLanguage: () => undefined, t: translations.es });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("ai-boost-language");
    if (saved === "es" || saved === "en" || saved === "fr" || saved === "de" || saved === "pt" || saved === "it") setLanguageState(saved);
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("ai-boost-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}