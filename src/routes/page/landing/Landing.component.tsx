import React from 'react';
import Image from 'components/image';
import styles from './Landing.module.scss';

const {
  wrapper,
  landing,
  landingText,
  landingImage,
  landingNavigationWrapper
} = styles;

export default function Landing(): JSX.Element {
  return (
    <div className={ wrapper }>
      <div className={ landing }>
        <Image
          className={ landingImage }
          src="/assets/landing.png"
          alt="Desktop & Mobile PWA Application"
          width="450px"
          height="310px"
        />
      </div>
    </div>
  );
}
