<script lang="ts" setup>
import SongListGenericVue from "@/components/Generic/SongListGeneric.vue";

import { storeToRefs } from "pinia";
import { useStore } from "@/stores/index";

const store = useStore();
const { activeGenreSongs } = storeToRefs(store);
</script>
<template>
    <SongListGenericVue :songs="activeGenreSongs" />
</template>
