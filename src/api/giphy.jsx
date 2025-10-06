const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=erY2jrWo7BWJOgFq6F9d4DFG9Ev9mUBm&q=${query}`;    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
};
export { getGifs };