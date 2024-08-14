import {LibraryPage} from "../pages/LibraryPage"
import { TrackPage } from "../pages/TrackPage"
import HomePage from "../pages/HomePage"

export const privateRoutes = [
    {path: '/library', exact: true, component: LibraryPage},
    {path: '/', exact: true, component: HomePage}
]

export const publicRoutes = [
    {path: '/tracks/:id', exact: true, component: TrackPage },
    
]