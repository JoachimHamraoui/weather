export const fetchTimezone = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://timeapi.io/api/time/current/coordinate?latitude=${lat}&longitude=${lon}`
        );
        const data = await response.json();
        console.log('Timezone', data.time);
        return data;
    } catch (error) {
        console.log(error);
    }
};