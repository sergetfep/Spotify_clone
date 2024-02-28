import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LikedSongs from "../pages/LikedSongs.vue";
import AlbumPage from "../pages/AlbumPage.vue";
import LibraryPage from "../pages/LibraryPage.vue";
import GenrePage from "../pages/GenrePage.vue";
import SearchPage from "../pages/SearchPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/search",
            name: "search",
            component: SearchPage,
        },
        {
            path: "/collection",
            name: "library",
            component: LibraryPage,
        },
        {
            path: "/liked-songs",
            name: "liked-songs",
            component: LikedSongs,
        },
        {
            path: "/albums/:albumId",
            name: "albums",
            component: AlbumPage,
        },
        {
            path: "/genres/:genreId",
            name: "genres",
            component: GenrePage,
        },
    ],
});

export default router;
