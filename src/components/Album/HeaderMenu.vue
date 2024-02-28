<script lang="ts" setup>
import HeaderGenericVue from "@/components/Generic/HeaderGeneric.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { activeAlbum } = storeToRefs(store);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const colors: any = {
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
        :class="`bg-gradient-to-b ${
            colors[activeAlbum.backgroundColor]
        } to-background`"
    >
        <HeaderGenericVue />
        <div class="flex flex-row flex-wrap gap-5 mt-5 p-4">
            <img
                :src="'album-covers/' + activeAlbum.image"
                alt="Liked"
                class="rounded w-60 h-60"
            />
            <div class="flex flex-col justify-end">
                <span class="font-bold text-lg">Album</span>
                <h1 class="font-extrabold text-5xl">
                    {{ activeAlbum.name }}
                </h1>
                <p class="text-sm mt-2">
                    {{ activeAlbum.year }}
                </p>
            </div>
        </div>
    </div>
</template>
