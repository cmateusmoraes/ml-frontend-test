import React from "react";
import { Link } from "react-router-dom";

import styles from "./Breadcrumb.module.scss";

type BreadcrumbProps = {
  categories: string[];
};

function Breadcrumb({ categories }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      role="navigation"
      className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            <Link to={`/category/${category.toLowerCase()}`}>
              <span>{category}</span>
            </Link>
          </li>
        ))}
      </ol>

      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: categories.map((category, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: category,
              item: `/category/${category.toLowerCase()}`,
            })),
          }),
        }}
      />
    </nav>
  );
}

export default Breadcrumb;
