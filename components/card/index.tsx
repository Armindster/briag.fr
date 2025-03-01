import React from 'react';
import Image from 'next/image';
import styles from './card.module.css';
import { Props } from './card';

export default function Card({
  title,
  content,
  image,
  link,
}: Props) {
  return (
    <a href={link} className={styles.card} target="_blank">
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Image
        src={image}
        alt="Briag FROUX ROTRU"
        width={100}
        height={100}
        className={styles.image}
      />
    </a>
  );
}
