import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'animate.css';


function App() {

  const [select, setSelect] = useState(1);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-stone-800">

      {select == 1 ? (
        <div>
          <div className="flex flex-col items-center animate__animated animate__zoomIn">
            <div className="flex flex-row items-center gap-2 text-5xl font-black text-slate-100 tracking-widest">
              HANGMAN <Icon className="text-rose-700" icon="bxs:skull" />
            </div>
            <button onClick={() => setSelect(2)}
              className="flex flex-row items-center gap-2 text-2xl text-slate-900 font-bold p-2 px-12 bg-zinc-100 rounded hover:bg-sky-900 duration-200 hover:text-slate-100 mt-10">
              PLAY <Icon className="text-2xl" icon="entypo:game-controller" />
            </button>
            <button onClick={() => setSelect(3)}
              className="text-2xl text-slate-900 font-bold p-2 px-14 bg-zinc-100 rounded hover:bg-sky-900 duration-200 hover:text-slate-100 mt-7">
              CREDIT
            </button>
            <button onClick={() => setSelect(4)}
              className="text-2xl text-slate-900 font-bold p-2 px-10 bg-zinc-100 rounded hover:bg-sky-900 duration-200 hover:text-slate-100 mt-7">
              HOW TO PLAY
            </button>
          </div>
        </div>)
        :

        (<div>{select == 2 ? (<div>HI</div>) : (


          <div>{select == 3 ? (<div className="flex flex-col gap-3 animate__animated animate__backInLeft">
            <div className="font-bold text-2xl text-sky-200 tracking-widest">MADE BY DANIEL FROM MRGA</div>
            <div className="flex justify-center font-bold text-lg text-sky-200 tracking-wider">CONTACT ME: teddy#7727</div>
            <div className="flex flex-row items-center gap-2 justify-center mt-5">
              <Icon onClick={() => setSelect(1)} className="text-xl text-slate-100 hover:text-rose-400 duration-300" icon="bi:arrow-left-square-fill" />
              <button className="font-bold text-xl text-lime-400">BACK TO LAST PAGE</button>
            </div>
          </div>)


            : (<div className="flex flex-col gap-3 animate__animated animate__backInLeft">
              <div className="text-sky-200 tracking-wider font-semibold">
                JUST GUESS THE WORD, YOU HAVE TO SURVIVE AS MUCH AS POSSIBLE. STORE MAYBE CAN BUY SOMETHING USEFUL. YOU ONLY HAVE 11 LIVES FOR EACH QUESTION.
              </div>
              <div className="text-sky-200 tracking-wider font-semibold flex justify-center">
                SURVIVE TEN MINUTES =)
              </div>
              <div className="flex flex-row items-center gap-2 justify-center mt-5">
                <Icon onClick={() => setSelect(1)} className="text-xl text-slate-100 hover:text-rose-400 duration-300" icon="bi:arrow-left-square-fill" />
                <button className="font-bold text-xl text-lime-400 ">BACK TO LAST PAGE</button>
              </div>
            </div>)}</div>)}</div>)

      }
    </div>
  )
}

export default App
