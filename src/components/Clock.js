import React, { useState, useEffect } from 'react';

const Clock = () => {
    const calculateTimeLeft = () => {
        const summerDate = new Date('June 21, 2025 00:00:00');
        const now = new Date();
        const difference = summerDate - now;

        let timeLeft = {};

        if (difference > 0) {
            const addLeadingZero = (num) => (num < 10 ? `0${num}` : num);

            timeLeft = {
                days: addLeadingZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
                hours: addLeadingZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
                minutes: addLeadingZero(Math.floor((difference / 1000 / 60) % 60)),
                seconds: addLeadingZero(Math.floor((difference / 1000) % 60))
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div>
            <div>
                {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
            </div>
        </div>
    );
};

export default Clock;