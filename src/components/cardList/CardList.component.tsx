import React, { createElement, useState } from 'react';
import { injectClassNames } from 'utils/css';
import styles from './Card.module.scss';
import { GrSync } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";

const { loader } = styles;

type CardProps = {
    imageUrl?: String,
    phrase?: String,
    translation?: String,
    className?: string,
};


const CardList = (props: CardProps): JSX.Element => {
  const {
    className: argClassName = '',
    imageUrl,
    phrase,
    translation
  } = props;

  return (
    <div>
        
    </div>

  );
}

export default CardList;
