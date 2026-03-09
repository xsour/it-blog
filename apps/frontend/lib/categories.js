export const categories = [
  {
    name: "JavaScript / Frontend",
    slug: "javascript-frontend",
    description: "Новини фронтенду, React, Next.js та екосистеми JavaScript.",
  },
  {
    name: "Backend та DevOps",
    slug: "backend-devops",
    description: "API, серверна розробка, Railway, Docker та CI/CD.",
  },
  {
    name: "Штучний інтелект та ML",
    slug: "ai-ml",
    description: "Огляди AI, LLM, автоматизації та ML-інструментів.",
  },
  {
    name: "Кібербезпека",
    slug: "cybersecurity",
    description: "Практики безпеки, аналіз ризиків та захист застосунків.",
  },
  {
    name: "Огляди інструментів та технологій",
    slug: "tools-reviews",
    description: "Огляди фреймворків, платформ та інженерних інструментів.",
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((category) => category.slug === slug);
}
