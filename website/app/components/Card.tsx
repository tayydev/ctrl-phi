import React from 'react'

interface CardProps {
    title: string;
    desc: string;
  }

const Card: React.FC<CardProps> = ({title, desc}) => {
  return (
    <div className='p-5'>
        <button className="block max-w-xs p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="font-normal text-gray-700">{desc}</p>
        </button>
    </div>
  )
}

export default Card