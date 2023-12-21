let clock = () => {
    setInterval(() => {
        const date = new Date();
        let hour = date.getHours();
        let ampm = hour >= 12 ? "PM" : "AM";
        hour = hour > 12 ? hour - 12 : hour;

        // formated HH:MM:SS AM/PM

        let formatedHour = String(hour).padStart(2,'0');
        let formatedMinutes = String(date.getMinutes()).padStart(2,'0');
        let formatedSeconds = String(date.getSeconds()).padStart(2,'0');

        console.log(`${formatedHour}:${formatedMinutes}:${formatedSeconds}:${ampm}`);


    },1000)
}

clock();