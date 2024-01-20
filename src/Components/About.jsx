import React from "react";

export default function About() {
  return (
    <div name='about' className="w-full h-screen bg-slate-400 dark:bg-slate-900 px-4">
      <div className="flex flex-col justify-center items-center w-full h-full px-3">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-800 dark:text-gray-50">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[840px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-pretty text-4xl font-bold">
            <p className="text-gray-800 dark:text-gray-50">My name is <span className="text-cyan-300">Thomas</span> but some friends call me <strong className="text-cyan-300">Trimeas</strong>, which is basically my gaming nickname 😁.</p>
          </div>
          <div className="text-pretty text-gray-800 font-bold dark:text-gray-50">
            <p className="mb-4">
            I initially started studying accounting, but I've always been interested in programming. Since I was 4 years old, I've had a computer, and <strong className="text-cyan-300">English and coding have always fascinated me</strong>. I used to think it was extremely difficult, reserved for a select few, and would be impossible for me. Until one day, I did some research and enrolled in a <strong className="text-cyan-300">computer science degree</strong>.
            </p>
            <p>
            <strong className="text-cyan-300">I learned my first language C, basically in 3 days</strong>. That's when I realized it wasn't as complicated as I had thought. I kept learning, <strong className="text-cyan-300">delving into Java with Junit, MySQL for databases, and then my favorite language, JavaScript</strong>. Once I got to know it, I didn't stop—venturing into <strong className="text-cyan-300">React, Node with Express, Sequelize and others technologies</strong>. Essentially, I wanted to master JS. Nowadays, I could say there's still some way to go, but the important thing is that I learned that anything one sets their mind to can be achieved, just like in programming—<strong className="text-cyan-300"> anything you can imagine can be coded</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}