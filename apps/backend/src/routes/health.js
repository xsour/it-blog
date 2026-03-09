import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend",
  });
});

router.get("/categories", (_req, res) => {
  res.status(200).json({
    data: [
      {
        name: "JavaScript / Frontend",
        slug: "javascript-frontend",
      },
      {
        name: "Backend та DevOps",
        slug: "backend-devops",
      },
      {
        name: "Штучний інтелект та ML",
        slug: "ai-ml",
      },
      {
        name: "Кібербезпека",
        slug: "cybersecurity",
      },
      {
        name: "Огляди інструментів та технологій",
        slug: "tools-reviews",
      },
    ],
  });
});

export default router;
