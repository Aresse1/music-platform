import {LibraryPage} from "../pages/LibraryPage"
import { SearchPage } from "../pages/SearchPage"
import { TrackPage } from "../pages/TrackPage"
import HomePage from "../pages/HomePage"

export const privateRoutes = [
    {path: '/library', exact: true, component: LibraryPage},
    {path: '/', exact: true, component: HomePage},
    {path: '/search:id', exact: true, component: SearchPage}
]

export const publicRoutes = [
    {path: '/tracks/:id', exact: true, component: TrackPage },
    
]