export const getGifs = async(category) => {
    const key = 'b7joEauhwJFR2xY7mGspDwtz4vyt2s01'
    const limit = 10
    const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${key}`

    const resp = await fetch(URL);
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}
