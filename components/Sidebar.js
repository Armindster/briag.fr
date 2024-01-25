import React from "react";
import Image from "next/image";
import {IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoLogoCodepen} from "react-icons/io5";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-around w-1/3 p-16">
      <div className="flex-start aspect-square relative w-2/3 self-center">
        <Image className="rounded-full" src="/portrait.png" alt="Briag FROUX ROTRU" fill={true} />
      </div>
      <h2 className="font-bold self-center text-xl">Briag FROUX ROTRU</h2>
      <p>Je suis un étudiant passionné par l'informatique et le jeu vidéo. J'apprends vite et je suis autonome. Je cherche un stage pour valider mes études et entrer dans le monde du travail. Je suis disponible dès mars.</p>
      <div className="grid grid-cols-2 gap-x-4">
        <p className="border-r-4 border-white text-right pr-4">2020/2022</p>
        <p>Développeur chez Kmex</p>
        <p className="border-r-4 border-white text-right pr-4">2018/2024</p>
        <p>Étudiant à EPITECH</p>
        <p className="border-r-4 border-white text-right pr-4">2018</p>
        <p>Bac STI2D option SIN</p>
      </div>
      <div className="flex flex-col flex-end">
        <h3 className="font-bold mb-4 self-center">Contact</h3>
        <div className="flex flex-row flex-wrap justify-around">
          <a className="flex flex-row justify-around items-center border-black border-2 rounded-full p-2 hover:border-white ease-in duration-100" href="mailto:briag.froux@epitech.eu">
            <IoMailOutline className="mr-2"/>
            Mail
          </a>
          <a className="flex flex-row justify-around items-center border-black border-2 rounded-full p-2 hover:border-white ease-in duration-100" href="https://www.linkedin.com/in/briag-froux-rotru-92514a17a/">
            <IoLogoLinkedin className="mr-2"/>
            LinkedIn
          </a>
          <a className="flex flex-row justify-around items-center border-black border-2 rounded-full p-2 hover:border-white ease-in duration-100" href="https://www.github.com/Armindster">
            <IoLogoGithub className="mr-2"/>
            GitHub
          </a>
          <a className="flex flex-row justify-around items-center border-black border-2 rounded-full p-2 hover:border-white ease-in duration-100" href="https://www.codepen.io/Armindster">
            <IoLogoCodepen className="mr-2"/>
            Codepen
          </a>
        </div>
      </div>
    </div>
  );
};
