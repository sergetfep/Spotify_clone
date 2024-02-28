<script lang="ts" setup>
import HeaderGenericVue from "@/components/Generic/HeaderGeneric.vue";
import { useStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useStore();
const { homePageBackground } = storeToRefs(store);
const { favoriteAlbums } = store;
const messages = [
    "Good Night",
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
];
const time = new Date().getHours();
const message = messages[Math.floor(time / 6)];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const colors: any = {
    primary: "from-primary-dark",
    blue: "from-blue-700",
    red: "from-red-700",
    yellow: "from-yellow-700",
    fuchsia: "from-fuchsia-700",
    orange: "from-orange-700",
    green: "from-green-700",
    cyan: "from-cyan-700",
    pink: "from-pink-700",
};
</script>
<template>
    <div
        class="bg-gradient-to-b to-background"
        :class="colors[homePageBackground]"
    >
        <HeaderGenericVue />
        <h2 class="pl-4 mt-4 text-4xl font-bold">{{ message }}</h2>
        <div class="flex flex-row flex-wrap mt-5 p-1 gap-3 xs:p-4 xs:gap-5">
            <router-link
                to="/liked-songs"
                class="w-full-20 flex flex-row items-center mx-auto bg-gray-lightest cursor-pointer h-16 xs:h-24 sm:w-1/2-20 md:w-1/3-20"
                @mouseover="homePageBackground = 'blue'"
                @mouseleave="homePageBackground = 'primary'"
            >
                <img
                    src="@/assets/liked.png"
                    alt="Liked"
                    class="rounded w-16 h-16 xs:w-24 xs:h-24"
                />
                <span class="font-bold ml-1 p-1">Liked Songs</span>
            </router-link>
            <router-link
                :to="'/albums/' + album.id"
                v-for="(album, index) in favoriteAlbums"
                :key="index"
                class="w-full-20 flex flex-row items-center mx-auto bg-gray-lightest cursor-pointer h-16 xs:h-24 sm:w-1/2-20 md:w-1/3-20"
                @mouseover="homePageBackground = album.backgroundColor"
                @mouseleave="homePageBackground = 'primary'"
            >
                <img
                    :src="'album-covers/' + album.image"
                    alt="Album"
                    class="rounded w-16 h-16 xs:w-24 xs:h-24"
                />
                <span class="font-bold ml-1 p-1">{{ album.name }}</span>
            </router-link>
        </div>
    </div>
</template>
