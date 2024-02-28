<script lang="ts" setup>
import { useStore } from "@/stores/index";

const store = useStore();
const { albumWithArtistName, likedSongs } = store;
</script>
<template>
    <div class="grid grid-cols-library gap-6 columns-5 p-5">
        <router-link
            to="/liked-songs"
            class="flex flex-col col-span-2 p-5 rounded bg-gradient-to-br from-blue-600 to-fuchsia-600 cursor-pointer"
        >
            <p class="line-clamp-4">
                <span
                    v-for="(song, index) in likedSongs"
                    :key="song.id"
                    class="contents"
                >
                    <span class="font-bold mr-1">{{ song.artistName }}</span>
                    {{ song.title }}
                    <span class="mr-1" v-if="index !== likedSongs.length - 1"
                        >•</span
                    >
                </span>
            </p>
            <span class="text-2xl font-bold mt-auto">Liked Songs</span>
            <span>{{ likedSongs.length }} liked songs</span>
        </router-link>
        <router-link
            :to="'/albums/' + album.id"
            class="flex flex-col gap-2 px-5 py-2 rounded bg-gray-dark hover:bg-gray-lightest cursor-pointer transition-all duration-200"
            v-for="album in albumWithArtistName"
            :key="album.id"
        >
            <img
                :src="`album-covers/${album.image}`"
                alt="Album"
                class="rounded w-30 h-30"
            />
            <span class="font-bold text-xl">{{ album.name }}</span>
            <span class="text-lg mt-auto">{{ album.year }}</span>
        </router-link>
    </div>
</template>
