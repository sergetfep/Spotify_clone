<script setup lang="ts">
import HeaderMenuVue from "@/components/Menus/HeaderMenu.vue";
import GenreSongsVue from "@/components/Home/GenreSongs.vue";
</script>
<template>
    <div class="flex flex-col w-full">
        <header>
            <HeaderMenuVue />
        </header>
        <main>
            <GenreSongsVue />
        </main>
    </div>
</template>
