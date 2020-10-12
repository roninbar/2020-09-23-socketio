export const getInfo = (function () {
    let userId = 0;
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    async function getInfoAsync(url) {
        if (!userId) {
            const response = await fetch(url);
            if (200 <= response.status && response.status < 300) {
                ({ results: [] } = await response.json());
            }
            else {
                throw new Error(`Failed to fetch ${url}.`);
            }
        }
        return userId;
    }
    return getInfoAsync;
})();