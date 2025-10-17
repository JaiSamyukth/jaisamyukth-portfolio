// Centralized copy strings for the portfolio
export const COPY = {
  acts: {
    one: {
      text: "This is nothing.",
    },
    two: {
      text: "This is something.",
    },
    three: {
      lines: [
        "Everything came from nothing.",
        "A million-dollar idea is worth nothing without execution.",
      ],
    },
    four: {
      question: "Who am I?",
      answer: "I am a Completionist.",
      description: "I execute. From spark to finished product. No half-built bridges, no abandoned drafts.",
    },
    five: {
      heading: "Zap me.",
      email: "jaisamyukth@gmail.com",
      success: "Summoned.",
      error: "Courier lost. Try again.",
      placeholders: [
        "Your next startup idea",
        "An impossible dream", 
        "The system your business is missing",
        "The project you gave up on",
      ],
    },
  },
  blueprint: {
    nodes: {
      idea: {
        title: "Idea → Tabble",
        subtitle: "Luxury dining management system. Three roles: customer, chef, admin.",
        href: "#", // TODO: Replace with actual Tabble link
      },
      design: {
        title: "Design → Magnum Opus",
        subtitle: "Narrative portfolio designed and built end-to-end by me.",
        href: "#",
      },
      development: {
        title: "Development → Genrec AI",
        subtitle: "Co-founder & architect. Enterprise AI systems, CRM, learning pipelines.",
        href: "https://genrecai.com",
      },
      deployment: {
        title: "Deployment → AWS Projects",
        subtitle: "FastAPI, React, Postgres, NGINX on EC2 with CI/CD.",
        href: "#", // TODO: Replace with actual repo/demo link
      },
      product: {
        title: "Product → Ventures in Motion",
        subtitle: "Ideas shipped into reality. No unfinished bridges.",
        href: "#",
      },
    },
  },
  toolbar: {
    tooltips: ["Connect", "Build", "Speak", "Glimpse"],
    links: {
      ventures: "My Ventures",
      manifesto: "My Manifesto", 
      blueprint: "The Blueprint",
      socials: "Socials",
    },
  },
} as const;
