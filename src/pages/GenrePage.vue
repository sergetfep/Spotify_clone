<script lang="ts" setup>
import HeaderMenuVue from "@/components/Genre/HeaderMenu.vue";
import SongListVue from "@/components/Genre/SongList.vue";
</script>
<template>
    <div class="flex flex-col w-full">
        <header>
            <HeaderMenuVue />
        </header>
        <main>
            <SongListVue />
        </main>
    </div>
</template>
