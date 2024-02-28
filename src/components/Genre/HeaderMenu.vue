<script lang="ts" setup>
import HeaderGenericVue from "@/components/Generic/HeaderGeneric.vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { activeGenre } = storeToRefs(store);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const colors: any = {
    red: "from-red-700",
    yellow: "from-yellow-700",
    purple: "from-purple-700",
    zinc: "from-zinc-700",
    blue: "from-blue-700",
    green: "from-green-700",
};
</script>
<template>
    <div
        :class="`bg-gradient-to-b ${
            colors[activeGenre.backgroundColor]
        } to-background`"
    >
        <HeaderGenericVue />
        <div class="flex flex-row flex-wrap gap-5 mt-5 p-4">
            <img
                :src="activeGenre.image"
                alt="Liked"
                class="rounded w-40 h-40 xs:w-60 xs:h-60"
            />
            <div class="flex flex-col justify-end">
                <span class="font-bold text-lg">Genre</span>
                <h1 class="font-extrabold text-5xl">
                    {{ activeGenre.name + " Songs" }}
                </h1>
            </div>
        </div>
    </div>
</template>
