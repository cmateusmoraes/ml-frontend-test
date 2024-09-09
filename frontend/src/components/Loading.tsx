import React from "react";

import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.loading}>
      <img
        src="/images/loading.svg"
        alt="Cargando..."
        width="80"
        height="80"
        className={styles.icon}
      />
      <p>Cargando...</p>
    </div>
  );
}

export default Loading;
