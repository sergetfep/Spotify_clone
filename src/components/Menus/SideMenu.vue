<script lang="ts" setup>
import sidemenu from "@/components/Menus/sidemenu.json";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/stores/index";

const store = useStore();
const { albums } = store;

let route = ref(useRoute());
</script>
<template>
    <div class="w-40 min-h-screen bg-black pb-28">
        <router-link to="/">
            <img
                src="@/assets/hikotify-wide.png"
                class="mx-auto w-full mb-5 p-2"
                alt="Logo"
            />
        </router-link>
        <div class="flex flex-col justify-center items-center">
            <router-link
                :to="item.route"
                v-for="(item, index) in sidemenu"
                :key="index"
                class="w-full flex flex-row cursor-pointer my-1 p-2 rounded-md"
                :class="{ 'bg-primary-normal': item.route === route.path }"
            >
                <div class="flex justify-start w-full">
                    <div
                        class="inline-block w-8 h-8 mr-3 bg-white"
                        :style="{
                            '-webkit-mask':
                                'url(' +
                                item.icon +
                                '.svg) 0 0/32px 32px no-repeat',
                            mask:
                                'url(' +
                                item.icon +
                                '.svg) 0 0/32px 32px no-repeat',
                        }"
                    ></div>
                    <span class="font-semibold my-auto text-xl">{{
                        item.name
                    }}</span>
                </div>
            </router-link>
        </div>
        <hr class="my-5" />
        <div class="flex flex-col justify-center items-center">
            <router-link
                to="/liked-songs"
                class="w-full flex flex-row cursor-pointer my-1 p-2 rounded-md"
            >
                <div class="flex justify-start w-full items-center">
                    <img
                        src="@/assets/liked.png"
                        alt="Liked"
                        class="inline-block w-10 h-10 mr-3"
                    />
                    <span class="font-semibold my-auto text-md"
                        >Liked Songs</span
                    >
                </div>
            </router-link>
            <router-link
                :to="'/albums/' + item.id"
                v-for="(item, index) in albums"
                :key="index"
                class="w-full flex flex-row cursor-pointer my-1 p-2 rounded-md"
            >
                <div class="flex justify-start w-full items-center">
                    <img
                        :src="'album-covers/' + item.image"
                        alt="Logo"
                        class="inline-block w-10 h-10 mr-3"
                    />
                    <span class="font-semibold my-auto text-md">{{
                        item.name
                    }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
