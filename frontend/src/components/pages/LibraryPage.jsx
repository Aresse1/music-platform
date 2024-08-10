import Library from "../Library"
import AddTrack from "../UI/AddTrack"

const LibraryPage = () => {
    

    return (
        <div>
            <h1>Library</h1>
            <Library/>
                Добавить трек
                <AddTrack/>
        </div>
    )
}

export {LibraryPage}