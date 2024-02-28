<script lang="ts" setup>
import { useStore } from "@/stores/index";
import { storeToRefs } from "pinia";

const store = useStore();
const { alertMessage } = storeToRefs(store);
</script>
<template>
    <div
        v-if="alertMessage.trim() !== ''"
        class="absolute bottom-5 left-1/2 bg-secondary-normal rounded-lg p-2 text-xl font-bold"
    >
        {{ alertMessage }}
    </div>
</template>
