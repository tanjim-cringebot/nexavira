'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function OurTeam() {
  const teamMembers = [
    {
      id: 'kuddus-pagla',
      name: "Kuddus Pagla",
      role: "The Full Stack Phenom of Demra",
      sections: [
        {
          title: "Introduction",
          content: "Full Name: Kuddus Pagla (real name lost in database migration)\nOrigin: Demra 12 No Goli, near Mama'r Dokan"
        },
        {
          title: "Profession(s)",
          content: [
            "🌐 Full-stack Dev (self-declared, Stack Overflow-banned)",
            "🤖AI/ML 'Guru' (trained a model to predict breakups)",
            "🎤Rooftop Rapper (Top hit: 'BSP Terminal Flow')",
            "🎮GPU Dealer (operates from uncle's pharmacy, payment via bKash or cha)"
          ].join('\n')
        },
        {
          title: "Backstory",
          content: "💭 Kuddus Pagla was born during a load-shedding while 'Nescafe Beats' played from a neighbor's cracked Nokia.\nFirst coded HTML on a cracked PSP, hosted his website from a microwave that 'vibrated just right.'\n\nFun Fact: He once replaced a broken router with a hot water flask. Internet was slow but warm."
        },
        {
          title: "Skills",
          content: [
            "⚛ React, Node, MongoDB (says he's 'MERN certified by Mirpur Tech Point')",
            "🐍 Python, TensorFlow, and mid-tier rap battles",
            "🧑🏻‍💻 Built an LLM trained on mamar dokan'er gossip",
            "📱 Makes deepfakes of himself giving TED Talks about AI ethics while eating fuchka",
            "🛠️ Replaces broken servers with vibes and extension cords"
          ].join('\n')
        },
        {
          title: "Startups & Projects",
          content: [
            "🚕 Ricksh-AI: Uber for rickshaws, crashes if the driver's name is Poltu.",
            "🧠 ChotpotiGPT: Chatbot for ordering street food using NLP powered by grandma's handwriting samples.",
            "🍛 BiriyaniGAN: Neural network that generates biriyani recipes. Accidentally made 'C++ Polao with JSX chutney.'",
            "📡 WiFind: ML-powered app that locates the nearest Wi-Fi based on local tea stall debates.",
            "🛏 BhaierBnB: Rent your cousin's bed when he's at coaching. Comes with one broken fan and loud aunties."
          ].join('\n')
        },
        {
          title: "Gear & Look",
          content: [
            "➖ USB stick worn like a gold chain",
            "🚦 RGB-lit panjabi with built-in hotspot",
            "🔋 One AirPod, one kolshi-sized power bank",
            "💻 Laptop that runs hotter than his bars",
            "🎒 Bag sticker: 'Demra > Silicon Valley'"
          ].join('\n')
        },
        {
          title: "Upcoming Album",
          content: [
            "🎤 'Code Lagse Na, Flow Lagse':",
            "- BSP Terminal Flow",
            "- Merge Conflict, Merge Conflict (feat. Biltu Bhai)",
            "- Hot Reload My Heart",
            "- CI/CD till I Die",
            "- Jhamelar Stack",
            "- Mama'r WiFi is Down (Outro)"
          ].join('\n')
        }
      ],
      image: "/team/ths.png",
      color: "#6366f1"
    },
    {
      id: 'boka-bhai',
      name: "Boka Bhai",
      role: "The Full-Stack Juggler Who Never Learned CSS Grid",
      sections: [
        {
          title: "Introduction",
          content: "Full Name: Boka Bhai (alias: 'The Legendary Code Guru of Mirpur')\nOrigin: Somewhere between 'Bro, check this out' and 'Wait, it works now?'"
        },
        {
          title: "Profession(s)",
          content: [
            "🖼 Frontend Dev (still using inline CSS because 'who needs external files?')",
            "</> JavaScript Magician (can turn a 1-line code into a 50-line disaster)",
            "🎨 Self-Taught Designer (his design sense is 'asymmetric' for a reason)",
            "👨🏻‍💻 Backend Biker (his server runs like a bike with a broken muffler)"
          ].join('\n')
        },
        {
          title: "Backstory",
          content: "💭 Boka Bhai first learned to code by copying and pasting from Stack Overflow at 2 AM. After learning HTML, he claimed he was a 'web designer' and that he'd 'conquered CSS.' When told about frameworks, he simply said, 'Too many dependencies, bhai, I'll stick with tables.' He once tried to learn Git, but his first commit was literally just: 'It works now, promise.'\n\nFun Fact: His version of 'debugging' involves restarting the computer three times and praying."
        },
        {
          title: "Skills",
          content: [
            "🌐 HTML/CSS (still wonders what Flexbox is)",
            "🔗 JavaScript (his only knowledge is how to create an infinite loop)",
            "⚛ React (he's just waiting for it to make sense)",
            "🛢️ PHP (still using echo like it's PHP 4)",
            "🛠️ GitHub (has 23 commits, 3 are 'hello world')",
            "📷 Photoshop (still uses 1998's version because it has all the 'cool effects')"
          ].join('\n')
        },
        {
          title: "Startups & Projects",
          content: [
            "🌍 MyFirstWebsite.com: A website with a very questionable domain name, containing a single image of a cat and the text 'Coming soon (but who knows when).'",
            "🎮 GamerAPI: An API that gets your gaming stats, then crashes for no reason but says 'Error 404: Player Not Found.'",
            "🖼️ DesignLikePro: A service that 'automatically' generates your website layout using only Comic Sans and bright neon colors.",
            "🛠️ CodeSnack: A snack delivery service that doesn't deliver snacks but does send you a confusing error message after you press 'Order.'"
          ].join('\n')
        },
        {
          title: "Gear & Look",
          content: [
            "💻 Laptop: Crashes when it tries to open more than 2 tabs",
            "⌨️ Keyboard: Missing letters but makes him 'unique'",
            "🖥️ Monitors: One is a 12-year-old CRT monitor",
            "📟 VS Code Theme: Bright neon (because 'dark mode gives him headaches')"
          ].join('\n')
        },
        {
          title: "Greatest Hits",
          content: [
            "🎤 Famous Quotes:",
            "- 'Code ta kaj korena, kintu dekhte to acchi!'",
            "- 'React e jodi thik hoy, PHP te ki problem?'",
            "- 'Inline CSS ta rakha chhilo keno, bhai?'",
            "- 'JQuery? Arre, seta to hoye gechhe!'",
            "- '404 ta jodi website e hoy, amake keno blame korbe?'"
          ].join('\n')
        }
      ],
      image: "/team/rr.png",
      color: "#34d399"
    }
  ];

  const [storyIndices, setStoryIndices] = useState(() => 
    teamMembers.map(() => 0)  // Initialize with 0 for each member
  );
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStoryIndices(prevIndices => 
        prevIndices.map((index, memberIndex) => {
          const maxIndex = teamMembers[memberIndex].sections.length - 1;
          return index >= maxIndex ? 0 : index + 1;
        })
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [teamMembers]);

  const handleSlideClick = (memberIndex, direction) => {
    setStoryIndices(prevIndices => 
      prevIndices.map((index, idx) => {
        if (idx !== memberIndex) return index;
        
        const length = teamMembers[memberIndex].sections.length;
        if (direction === 'next') {
          return index >= length - 1 ? 0 : index + 1;
        } else {
          return index <= 0 ? length - 1 : index - 1;
        }
      })
    );
  };

  const renderMemberContent = (member, index) => {
    const isEven = index % 2 === 0;
    const sectionIndex = Math.min(storyIndices[index] || 0, member.sections.length - 1);
    const currentSection = member.sections[sectionIndex];
    
    const ImageSection = (
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative aspect-square w-full max-w-lg mx-auto">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover rounded-2xl shadow-2xl"
            priority
          />
          {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent" /> */}
        </div>
      </div>
    );

    const ContentSection = (
      <div className={`w-full lg:w-1/2 text-white ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-bold mb-4 text-green-500">
              {member.name}
            </h2>
            <p className="text-xl text-gray-400">{member.role}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white/90">
              {currentSection?.title || 'Loading...'}
            </h3>
            <div className="relative h-[400px] overflow-y-auto whitespace-pre-line pr-2">
              <p 
                key={`${member.id}-section-${sectionIndex}`}
                className={`text-lg leading-[2] ${styles.fadeInUp}`}
              >
                {currentSection?.content || ''}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/10">
            <button
              onClick={() => handleSlideClick(index, 'prev')}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              ← Previous
            </button>
            <span className="text-gray-400">
              {currentSection?.title} ({sectionIndex + 1} / {member.sections.length})
            </span>
            <button
              onClick={() => handleSlideClick(index, 'next')}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    );

    return (
      <div className={`flex flex-col lg:flex-row items-start gap-16 pt-80 lg:gap-24 ${
        index === 0 ? 'pt-32 pb-16' : 'py-16'
      } ${
        index !== teamMembers.length - 1 ? 'border-b border-white/5' : ''
      }`}>
        {ImageSection}
        {ContentSection}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {teamMembers.map((member, index) => (
          <div key={member.id}>
            {renderMemberContent(member, index)}
          </div>
        ))}
      </div>
    </div>
  );
}
