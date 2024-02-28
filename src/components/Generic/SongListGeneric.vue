<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";
import { toRefs } from "vue";

interface Song {
    id: number;
    title: string;
    duration: number;
    albumId: number;
    albumName?: string;
    imgPath?: string;
    songPath: string;
    artistName?: string;
    isLiked: boolean;
    genres: number[];
}

const store = useStore();
const { sortBy, searchBy, isSongPlaying, activeSongId } = storeToRefs(store);
const { convertDuration, revertLike, toggleSong } = store;

/* PROPS */
const props = defineProps<{
    songs: Song[];
}>();
const { songs } = toRefs(props);
</script>
<template>
    <div class="m-4 sm:m-16">
        <div class="flex flex-row xs:px-5">
            <input
                class="border-2 border-gray-200 rounded-lg text-black outline-none w-full min-w-60 max-w-xs xs:p-2"
                type="text"
                placeholder="Search"
                v-model="searchBy"
            />
            <select
                class="border-2 border-gray-200 rounded-lg ml-2 text-black outline-none w-full min-w-60 max-w-xs xs:p-2"
                v-model="sortBy"
            >
                <option value="title">TITLE</option>
                <option value="album">ALBUM</option>
                <option value="duration">DURATION</option>
            </select>
        </div>
        <table class="w-full mt-5">
            <thead>
                <tr>
                    <th class="text-left hidden xs:table-cell xs:pl-5">#</th>
                    <th class="text-left">TITLE</th>
                    <th class="text-left hidden xs:table-cell">ALBUM</th>
                    <th class="text-left"></th>
                    <th class="text-right pr-5 hidden sm:table-cell">
                        DURATION
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(song, index) in songs"
                    :key="song.id"
                    class="cursor-pointer group transition-all duration-200 hover:bg-gray-light"
                    @click="toggleSong(song.id)"
                >
                    <td class="text-left w-11 hidden xs:table-cell xs:pl-5">
                        <span class="group-hover:hidden">{{ index + 1 }}</span>
                        <button
                            class="hidden group-hover:block"
                            @click="toggleSong(song.id)"
                        >
                            <img
                                src="@/assets/stop.png"
                                alt="Stop"
                                class="w-4"
                                v-if="isSongPlaying && activeSongId === song.id"
                            />
                            <img
                                src="@/assets/play.png"
                                alt="Play"
                                class="w-4"
                                v-else
                            />
                        </button>
                    </td>
                    <td class="flex flex-row items-center py-2">
                        <img
                            :src="'album-covers/' + song.imgPath"
                            class="rounded-sm w-12 h-12"
                            alt="Song"
                        />
                        <div class="flex flex-col ml-2">
                            <span class="font-bold">{{ song.title }}</span>
                            <span class="text-sm text-gray-400">{{
                                song.artistName
                            }}</span>
                        </div>
                    </td>
                    <td class="text-left hidden xs:table-cell">
                        {{ song.albumName }}
                    </td>
                    <td>
                        <button @click="revertLike(song.id)">
                            <img
                                :src="
                                    song.isLiked
                                        ? 'heart-filled.png'
                                        : 'heart.png'
                                "
                                class="w-8 h-8 p-1"
                            />
                        </button>
                    </td>
                    <td class="text-right pr-5 hidden sm:table-cell">
                        {{ convertDuration(song.duration) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
