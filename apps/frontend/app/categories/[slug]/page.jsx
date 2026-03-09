import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/lib/categories";

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Category not found | IT Blog",
    };
  }

  return {
    title: `${category.name} | IT Blog`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="container">
      <div className="card">
        <a href="/">← На головну</a>
        <h1>{category.name}</h1>
        <p className="muted">{category.description}</p>
      </div>

      <div className="card">
        <h2>Slug</h2>
        <span className="tag">{category.slug}</span>
      </div>

      <div className="card">
        <h2>Що далі</h2>
        <p className="muted">
          Сюди фронтенд потім підключить список статей категорії через API.
        </p>
      </div>
    </main>
  );
}
