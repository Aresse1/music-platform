import {LibraryPage} from "../pages/LibraryPage"
import { TrackPage } from "../pages/TrackPage"

export const privateRoutes = [
    {path: '/library', exact: true, component: LibraryPage}
]

export const publicRoutes = [
    {path: '/tracks/:id', exact: true, component: TrackPage },
    
]