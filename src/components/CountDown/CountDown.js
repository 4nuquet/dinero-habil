import React, { useEffect, useState } from 'react'
import './CountDown.scss'

const CountDown = () => {

    const [date, setDate] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

    const dateLimit = new Date('2020, 12, 03').getTime();

    const decrementDate = () => {
        const deadLine = +new Date(`12/03/2020`) - +new Date();

        const days = Math.floor(deadLine / (1000 * 60 * 60 * 24));
        const hours = Math.floor((deadLine % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((deadLine % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((deadLine % (1000 * 60)) / 1000);
        const newDate = {
            days: Math.abs(days),
            hours: Math.abs(hours),
            minutes: Math.abs(minutes),
            seconds: Math.abs(seconds)
        }

        return newDate
    }

useEffect(() => {
    const timer = setTimeout( () => {setDate(decrementDate())}, 1000)
    return () => clearTimeout(timer);
})

    return (
        <div className='container-fluid bg-danger d-flex justify-content-around py-3'>
            <div className='text-center'><h1 className='text-offer text-white'>{''+date.days}</h1><span>DIAS</span></div>
            <div className='text-center'><h1 className='text-offer text-white'>:</h1></div>
            <div className='text-center'><h1 className='text-offer text-white'>{date.hours}</h1><span>HORAS</span></div>
            <div className='text-center'><h1 className='text-offer text-white'>:</h1></div>
            <div className='text-center'><h1 className='text-offer text-white'>{date.minutes}</h1><span>MINUTOS</span></div>
            <div className='text-center'><h1 className='text-offer text-white'>:</h1></div>
            <div className='text-center'><h1 className='text-offer text-white'>{date.seconds}</h1><span>SEGUNDOS</span></div>
        </div>
    )
}

export default CountDown
