import React, { useMemo } from 'react';
import { Props } from './raindrop';
import styles from './raindrop.module.css';
import { rand } from '@/utils';

export default function Raindrop(
  props: Props,
) {
  const renderRaindrops = useMemo(() => {
    const raindrops = [];

    for (var i = 0; i < 40; i++) {
      const delay = rand(0, 2000);
      const top = rand(-20, 130);
      const left = rand(-10, 100);

      raindrops.push(
        <div
          key={`raindrop-${i}`}
          className={styles.raindrop}
          style={{
            left: `${left}vw`,
            top: `${top}vh`,
            animationDelay: `${delay}ms`,
          }}
        >
          <div
            className={styles.raindrop}
            style={{
              animationDelay: `${delay + 150}ms`,
            }}
          />
        </div>,
      );
    }
    return raindrops;
  }, []);

  return (
    <div>
      <div className={styles.canva}>
        {renderRaindrops}
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  );
}
