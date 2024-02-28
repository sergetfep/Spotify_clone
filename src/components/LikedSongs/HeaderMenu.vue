<script lang="ts" setup>
import HeaderGenericVue from "@/components/Generic/HeaderGeneric.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { likedSongs } = storeToRefs(store);
</script>
<template>
    <div class="bg-gradient-to-b from-indigo-700 to-background">
        <HeaderGenericVue />
        <div class="flex flex-row flex-wrap gap-5 mt-5 p-4">
            <img
                src="@/assets/liked.png"
                alt="Liked"
                class="rounded w-60 h-60"
            />
            <div class="flex flex-col justify-end">
                <span class="font-bold text-lg">Playlist</span>
                <h1 class="font-extrabold text-6xl">Liked Songs</h1>
                <p class="text-sm mt-2">
                    {{ likedSongs.length }} songs are listed here.
                </p>
            </div>
        </div>
    </div>
</template>
