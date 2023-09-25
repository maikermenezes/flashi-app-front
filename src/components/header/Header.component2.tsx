import React, { memo, useEffect } from "react";
import Icon from "components/icon";
import Items from "components/header/items";
import Logo from "components/header/logo";
import ThemeToggler from "components/header/themeToggler";
import styles from "./Header.module.scss";

const OFFLINE = "offline";

const { header, headerControls, offline, offlineIcon } = styles;

const handleNetworkChange = (): void => {
  const {
    documentElement: { classList },
  } = document;

  if (!navigator.onLine) {
    classList.add(OFFLINE);

    return;
  }

  classList.remove(OFFLINE);
};

export default memo(function Header(): JSX.Element {
  return (
    <>
      <header className={header}>
        <nav>
          <Items />
        </nav>
      </header>
    </>
  );
});
