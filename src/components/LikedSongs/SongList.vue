<script lang="ts" setup>
import SongListGenericVue from "@/components/Generic/SongListGeneric.vue";

import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { likedSongs } = storeToRefs(store);
</script>
<template>
    <SongListGenericVue :songs="likedSongs" />
</template>
