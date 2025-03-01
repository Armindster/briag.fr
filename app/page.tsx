import styles from './page.module.css';
import Card from '@/components/card';
import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.content}>
        <Card
          title="KLAVA Innovation"
          subtitle="Développeur mobile et full stack - React Native / Firebase / WordPress"
          content={`KLAVA Innovation développe des solutions numériques pour aider les personnes
souffrant d'addictions. Leur solution phare, Quitoxil, est un dispositif médical certifié CE sur
smartphone qui accompagne les utilisateurs dans leur sevrage tabagique. Il propose des thérapies
cognitivo-comportementales personnalisées, des articles rédigés par des professionnels de la santé
pour mieux comprendre l'addiction au tabac et une assistance avec de patients-experts.`}
          image="https://klava-innovation.com/wp-content/uploads/2021/02/KLAVA-INNOVATION-LOGO-2021-large-.png"
          link="https://klava-innovation.com/"
        />
        <Card
          title="KMEX Consulting"
          subtitle="Développeur logiciel - C++ / C#/.NET"
          content={`KMEX Consulting est une entreprise de service spécialisée dans la mise en place
de solution de gestion pour les entreprises du Bâtiment et des Travaux Publics. KMEX est également
éditeur de logiciels de Suivi budgétaire de chantiers.`}
          image="https://www.kmex.fr/wp-content/uploads/2021/10/logo-kmex.png"
          link="https://www.kmex.fr/"
        />
        <Card
          title="EasyTerms"
          subtitle="Développeur mobile - React Native"
          content={`EasyTerms est une application mobile innovante qui permet de résumer rapidement
les conditions générales d'utilisation (CGU) de différentes applications. En quelques clics, les
utilisateurs peuvent accéder à une synthèse claire et concise des termes et conditions souvent
longs et complexes que l'on trouve dans les CGU. EasyTerms est un outil pratique pour les
utilisateurs qui souhaitent comprendre rapidement les engagements qu'ils prennent en utilisant une
application donnée. Avec une base de données en constante évolution, EasyTerms est la solution
idéale pour tous ceux qui cherchent à comprendre les CGU sans passer des heures à les lire en
entier.`}
          image="https://cdn.dorik.com/6401e90495c7c300a9cb4867/6401ea9995c7c300a9cb487f/images/easy_terms_clear_8091nr9u.png"
          link="https://easyterms.dorik.io/"
        />
        <Card
          title="Jhonny and Jhon"
          subtitle="Conception et programmation - Godot 3.1"
          content={`Vous incarnez Jhonny et Jhon. Jhonny est aveugle et Jhon est en fauteuil
roulant. Votre objectif est de faire sortir Jhonny et Jhon du bâtiment aussi vite que possible en
utilisant leurs deux capacités. Vous devrez collecter des objets et des clés pour déverrouiller les
portes afin de vous échapper.`}
          image="https://img.itch.zone/aW1nLzE5NTI4NjUucG5n/315x250%23c/APAiaL.png"
          link="https://superzikoure.itch.io/jhonny-and-jhon"
        />
      </div>
    </div>
  );
}
