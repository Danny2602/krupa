export const GridGifs = ({ gifs }) => {
    return (
        <div>
            {gifs.map(gif => (
                <img key={gif.id} src={gif.images.original.url} alt="" />
            ))}
        </div>
    )
}