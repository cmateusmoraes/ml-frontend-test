import React from "react";

import styles from "./ErrorContainer.module.scss";

type ErrorContainerProps = {
  children: React.ReactNode;
};

function ErrorContainer({ children }: ErrorContainerProps) {
  return (
    <div className={styles.errorContainer} role="alert">
      <img
        src="/images/not-found.svg"
        alt="Erro"
        width="80"
        height="80"
        className={styles.icon}
      />
      <div className={styles.messageContainer}>{children}</div>
    </div>
  );
}

export default ErrorContainer;
