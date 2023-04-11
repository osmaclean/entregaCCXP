; (function () {
    'use strict'

    const day = document.getElementById('day');
    const hour = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const launch = '1 dec 2023';

    function countdown() {
        const dataLaunch = new Date(launch);
        const today = new Date();

        const totalSecond = (dataLaunch - today) / 1000;
        const finalDay = Math.floor(totalSecond / 60 / 60 / 24);
        const finalHours = Math.floor(totalSecond / 60 / 60) % 24;
        const finalMinutes = Math.floor(totalSecond / 60) % 60;
        const finalSeconds = Math.floor(totalSecond) % 60;

        const formattedDay = formatTime(finalDay);
        const formattedHour = formatTime(finalHours);
        const formattedMinutes = formatTime(finalMinutes);
        const formattedSeconds = formatTime(finalSeconds);

        day.innerText = `${formattedDay}D`;
        hour.innerText = `${formattedHour}H`;
        minutes.innerText = `${formattedMinutes}M`;
        seconds.innerText = `${formattedSeconds}S`;

        day.style.fontWeight = '600';
        hour.style.fontWeight = '600';
        minutes.style.fontWeight = '600';
        seconds.style.fontWeight = '600';

    };

    function formatTime(t) {
        return t < 10 ? `0${t}` : t;
    };

    countdown();
    setInterval(countdown, 1000);


})();