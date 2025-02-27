'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoCodepen,
  IoCaretDown,
  IoCaretUp,
} from 'react-icons/io5';
import styles from './sidebar.module.css';

export default function Sidebar() {
  const [isFolded, setIsFolded] = useState(true);

  const toggleSidebar = () => {
    setIsFolded(!isFolded);
  };

  const renderArrow = useMemo(() => {
    if (isFolded) {
      return <IoCaretDown />;
    }
    return <IoCaretUp />;
  }, [isFolded]);

  return (
    <div className={`${styles.sidebar} ${isFolded ? styles.folded : ''}`}>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {renderArrow}
      </button>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.info}>
            <Image
              src="/img/portrait.png"
              className={styles.portrait}
              alt="Briag FROUX ROTRU"
              width={100}
              height={100}
            />
            <hgroup className={styles.name}>
              <h1>Briag FROUX ROTRU</h1>
              <p>Développeur full stack et mobile</p>
            </hgroup>
          </div>
          <p>
            Je suis diplômé BAC+5 passionné par l&apos;informatique et le jeu vidéo.
            J&apos;apprends vite et je suis autonome. Je suis disponible dès que possible.
          </p>
        </div>
        <table className={styles.history} width="100%">
          <tbody>
            <tr>
              <td>2024</td>
              <td>Développeur full stack et mobile chez KLAVA Innovation</td>
            </tr>
            <tr>
              <td>2020/2022</td>
              <td>Développeur logiciel chez KMEX Consulting</td>
            </tr>
            <tr>
              <td>2018/2024</td>
              <td>Étudiant à EPITECH</td>
            </tr>
          </tbody>
        </table>
        <table className={styles.history} width="100%">
          <tbody>
            <tr>
              <td>2024</td>
              <td
                title="Certificat RNCP5588 de niveau 7"
              >
                Titre d&apos;Expert en Technologie de l&apos;Informatique
              </td>
            </tr>
            <tr>
              <td>2018</td>
              <td>Bac STI2D option SIN</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.linksContainer}>
        <h2>Contacts</h2>
        <div className={styles.links}>
          <a
            href="mailto:briag.fr@gmail.com"
            className={styles.link}
          >
            <IoMailOutline />
            Mail
          </a>
          <a
            href="https://www.linkedin.com/in/briag-froux-rotru-92514a17a/"
            className={styles.link}
          >
            <IoLogoLinkedin />
            LinkedIn
          </a>
          <a
            href="https://www.github.com/Armindster"
            className={styles.link}
          >
            <IoLogoGithub />
            GitHub
          </a>
          <a
            href="https://www.codepen.io/Armindster"
            className={styles.link}
          >
            <IoLogoCodepen />
            CodePen
          </a>
        </div>
      </div>
    </div>
  );
};
