<script setup lang="ts">
import { RouterView } from "vue-router";
import SideMenuVue from "@/components/Menus/SideMenu.vue";
import AlertGenericVue from "./components/Generic/AlertGeneric.vue";
import SongControlFooterVue from "./components/Generic/SongControlFooter.vue";

import { useRoute } from "vue-router";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const route = useRoute();

const store = useStore();
const { activeAlbumId, activeGenreId, activeSongId, isSongPlaying } =
    storeToRefs(store);
watch(
    () => route.params.albumId,
    (newValue) => {
        if (newValue) {
            activeGenreId.value = 0;
            activeAlbumId.value = parseInt(newValue.toString());
        }
    }
);
watch(
    () => route.params.genreId,
    (newValue) => {
        if (newValue) {
            activeAlbumId.value = 0;
            activeGenreId.value = parseInt(newValue.toString());
        }
    }
);

window.addEventListener("beforeunload", () => {
    isSongPlaying.value = false;
});
</script>

<template>
    <div class="flex flex-row text-white">
        <SideMenuVue />
        <RouterView class="bg-background min-h-screen text-base pb-20" />
        <AlertGenericVue />
        <SongControlFooterVue v-if="activeSongId !== 0" />
    </div>
</template>
