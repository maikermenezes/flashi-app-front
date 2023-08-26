import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.scss';
import Icon from 'components/icon';

const { logo } = styles;

export default function Logo(): JSX.Element {
  return (
    <div className={ logo }>
      <Link href="/">
        {/* <Icon asset="flashi" /> */}
        flAshI
      </Link>
    </div>
  );
}
