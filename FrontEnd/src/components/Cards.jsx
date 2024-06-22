import React, { useState } from 'react'
import { GiZigzagHieroglyph } from "react-icons/gi";
import { Data } from '../data';

const Cards = () => {
    const [data, setData] = useState(Data);
  return (
    <section className="min-h-screen p-20 w-full" style={{ background: "#181818" }}>
      <h1 className="font-bold text-center" style={{fontSize: "1.5rem"}}>BOOK HUB DISTINCTIVES</h1>
      <div className="flex justify-center items-center">
            <GiZigzagHieroglyph className="text-yellow-400" style={{ fontSize: "4rem" }} />
          </div>
      <div className="flex justify-center items-center flex-wrap" >
  {data.map((elem) => (
    <div className="flex items-center justify-center flex-col w-[27%] p-4 m-8" key={elem.id}>
      <elem.icon className="text-gray-400 hover:text-yellow-400 mb-4" style={{ fontSize: "8rem" }} />
      <h1 className="mb-2 font-bold" style={{fontSize: "1.5rem"}}>{elem.title}</h1>
      <p className="text-center" style={{color:"#cbcbcb"}}>{elem.description}</p>
    </div>
  ))}
</div>
      </section>
  )
}

export default Cards
