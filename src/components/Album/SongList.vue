<script lang="ts" setup>
import SongListGenericVue from "@/components/Generic/SongListGeneric.vue";

import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { activeAlbumSongs } = storeToRefs(store);
</script>
<template>
    <SongListGenericVue :songs="activeAlbumSongs" />
</template>
