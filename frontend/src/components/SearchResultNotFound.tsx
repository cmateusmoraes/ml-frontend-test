import React from "react";

import styles from "./SearchResultNotFound.module.scss";

function NoResults() {
  return (
    <div className={styles.searchResultNoFound}>
      <img
        src="/images/not-found.svg"
        alt="Nenhum resultado encontrado"
        width="80"
        height="80"
        className={styles.icon}
      />
      <div className={styles.messageContainer}>
        <h3>Não há anúncios que correspondam à sua busca</h3>
        <ul>
          <li>
            <strong>Revise</strong> a <strong>ortografia</strong> da palavra.
          </li>
          <li>
            Utilize <strong>palavras mais genéricas</strong> ou menos palavras.
          </li>
          <li>
            <a href="/categorias" className={styles.link}>
              Navegue pelas categorias
            </a>{" "}
            para encontrar um produto semelhante.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NoResults;
