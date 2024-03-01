import React from "react";

export default function About() {
  return (
    <div name='about' className="flex justify-center items-center w-full h-full px-24 py-60 bg-[#bcd2d0] dark:bg-slate-900">
      <div className="flex flex-col justify-center items-center w-full h-full px-3 gap-y-10">
        <div className="sm:text-right pb-10">
          <p className="text-4xl font-bold inline border-b-4 dark:text-gray-50 border-[#378d86] dark:border-cyan-300">
            About
          </p>
        </div>
        <div className="flex flex-col gap-y-10 w-full">
          <div className="sm:text-pretty text-4xl font-bold">
            <p className="dark:text-gray-50">Hi, my name is <span className="text-[#378d86] dark:text-cyan-300">Thomas</span>, a passionate developer, 
             currently a <span className="text-[#378d86] dark:text-cyan-300">Full stack developer and System manager</span>.</p>
          </div>
          <div className="text-prettyfont-bold dark:text-gray-50 w-full">
            <p className="mb-4">
             I initially started studying accounting, but I've always been interested in programming. Since I was 4 years old, I've had a computer, and <strong className="text-[#378d86] dark:text-cyan-300">
              English and coding have always fascinated me</strong>. 
              I used to think it was extremely difficult, reserved for a select few, and would be impossible for me.
               Until one day, I did some research and enrolled in a <strong className="text-[#378d86] dark:text-cyan-300">computer science degree</strong>.
            </p>
            <p>
            That's when I realized it 
            wasn't as complicated as I had thought. I kept learning, <strong className="text-[#378d86] dark:text-cyan-300">delving into Java with Junit, MySQL 
            for databases, and then my favorite language, JavaScript</strong>. 
            Once I got to know it, I didn't stop—venturing into <strong className="text-[#378d86] dark:text-cyan-300">React, Node with Express, Sequelize and others 
            technologies</strong>. Essentially, I wanted to master JS. Nowadays, I could say there's still some way to go, but the important thing 
            is that I learned that anything one sets their mind to can be achieved, just like in programming—<strong className="text-[#378d86] dark:text-cyan-300"> 
            anything you can imagine can be coded</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}