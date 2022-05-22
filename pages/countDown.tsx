
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = (props : any) => {

    const { timeTillDate, timeFormat } = props;
    const [currentInterval, setCurrentInterval] = useState<any>(null);
    const [countTime, setCountTime] = useState<any>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        createTimer();
        return () => {
            setCurrentInterval(null);
        }
    }, []);

    const createTimer = () => {
        const interval = setInterval(() => {
            const then:any = moment(timeTillDate, timeFormat);
            const now:any = moment();
            const countdown:any = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            setCountTime({ days, hours, minutes, seconds });
        }, 1000);
    
        setCurrentInterval(interval);
    }
    
    return (
        <div>
            <h1 className="countdown-title">Anniversary starts in:</h1>
            <div className='countdown-wrapper'>
                <div className='countdown-item'>
                    { countTime.days } 
                    <span>Days</span>
                </div>
                <span className='gap-symbol'>:</span>
                <div className='countdown-item'>							
                    { countTime.hours } 
                    <span>Hours</span>
                </div>
                <span className='gap-symbol'>:</span>
                <div className='countdown-item'>
                    {countTime.minutes} 
                    <span>Minutes</span>
                </div>
                <span className='gap-symbol'>:</span>
                <div className='countdown-item'>
                    {countTime.seconds} 
                    <span>Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
