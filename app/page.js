import React from "react";
import Sidebar from "@components/Sidebar";
import Card from "@components/Card";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen min-w-screen max-h-screen max-w-screen">
      <Sidebar className="z-0"/>
      <div className="flex-1 flex flex-col bg-gradient-to-b from-cyan-500 to-black overflow-y-auto">
        <Card
          title="EasyTerms"
          description="EasyTerms est une application mobile innovante qui permet de résumer rapidement les conditions générales d'utilisation (CGU) de différentes applications. En quelques clics, les utilisateurs peuvent accéder à une synthèse claire et concise des termes et conditions souvent longs et complexes que l'on trouve dans les CGU. EasyTerms est un outil pratique pour les utilisateurs qui souhaitent comprendre rapidement les engagements qu'ils prennent en utilisant une application donnée. Avec une base de données en constante évolution, EasyTerms est la solution idéale pour tous ceux qui cherchent à comprendre les CGU sans passer des heures à les lire en entier."
          images={["/easyterms/accueil.jpg", "/easyterms/resume.jpg", "/easyterms/statistiques.jpg"]}
          link="https://easyterms.dorik.io/"
        />
        <Card
          title="Jhonny and Jhon"
          description="Vous incarnez Jhonny et Jhon. Jhonny est aveugle et Jhon est en fauteuil roulant. Votre objectif est de faire sortir Jhonny et Jhon du bâtiment aussi vite que possible en utilisant leurs deux capacités. Vous devrez collecter des objets et des clés pour déverrouiller les portes afin de vous échapper."
          images={["/jhonny-and-jhon/menu.png", "/jhonny-and-jhon/jeu1.png", "/jhonny-and-jhon/jeu2.png"]}
          link="https://superzikoure.itch.io/jhonny-and-jhon"
        />
      </div>
    </main>
  );
}
