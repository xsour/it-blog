import Link from "next/link";
import { categories } from "@/lib/categories";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <main className="container">
      <div className="card">
        <h1>IT Blog</h1>
        <p className="muted">
          Мінімальний SSR starter для командного проєкту. Це не фінальна версія,
          а стартова база для Lab 1.
        </p>
      </div>

      <div className="card">
        <h2>Категорії</h2>
        <p className="muted">
          Формат URL: англійська, lowercase, kebab-case.
        </p>
        <div>
          {categories.map((category) => (
            <div key={category.slug} style={{ marginBottom: 12 }}>
              <Link href={`/categories/${category.slug}`}>
                <strong>{category.name}</strong>
              </Link>
              <div className="muted">{category.description}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
