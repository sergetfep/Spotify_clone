<script lang="ts" setup>
import { useStore } from "@/stores/index";

const store = useStore();
const { genres } = store;
</script>
<template>
    <div class="p-5">
        <h3 class="font-extrabold text-xl">Genres</h3>
        <div class="flex flex-row gap-5 flex-wrap">
            <router-link
                :to="'/genres/' + genre.id"
                v-for="genre in genres"
                :key="genre.id"
                class="mt-5 mx-auto p-5 bg-gray-dark flex flex-col cursor-pointer w-full-20 sm:w-1/2-20 lg:w-1/3-20 xl:w-1/6-20"
            >
                <img :src="genre.image" alt="genre" class="rounded w-full" />
                <span class="font-bold text-xl mt-2">{{
                    genre.name + " Songs"
                }}</span>
            </router-link>
        </div>
    </div>
</template>
