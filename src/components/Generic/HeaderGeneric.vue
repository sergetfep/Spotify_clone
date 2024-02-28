<template>
  <div class="flex flex-row p-4">
    <div class="my-auto">
      <button
        class="bg-gray-darkest rounded-full w-7 h-7 disabled:cursor-not-allowed disabled:opacity-60 xs:w-10 xs:h-10"
        @click="$router.go(-1)"
        :disabled="!$router.options.history.state.back"
      >
        &#9665;
      </button>
      <button
        class="bg-gray-darkest rounded-full w-7 h-7 ml-5 disabled:cursor-not-allowed disabled:opacity-60 xs:w-10 xs:h-10"
        @click="$router.go(1)"
        :disabled="!$router.options.history.state.forward"
      >
        &#9655;
      </button>
    </div>
    <div
      v-if="user"
      class="flex flex-row ml-auto bg-gray-darkest rounded-full gap-1 cursor-pointer hover:bg-gray-light"
      @click="logout"
    >
      <img
        :src="user?.photo_url ?? 'https://via.placeholder.com/40'"
        alt="PP"
        class="rounded-full p-1 w-10 h-10 hidden xs:block"
      />
      <span class="py-2 px-1">{{ user?.username }}</span>
      <span class="py-2 px-1 mr-2">&#9660;</span>
    </div>
    <div
      v-else
      class="flex flex-row ml-auto bg-gray-darkest rounded-full gap-1 cursor-pointer hover:bg-gray-light px-6 py-3"
      @click="$router.push('/login')"
    >
      Войти
    </div>
  </div>
</template>

<script lang="ts" setup>
import { userStore } from '@/hooks/User'

const { user, logout } = userStore()
</script>
