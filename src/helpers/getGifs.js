
export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=wsQ7bU7HRPiNJYGnf5ht5MBb7bQubDIA`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            console.log(img)
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        return gifs;
    }