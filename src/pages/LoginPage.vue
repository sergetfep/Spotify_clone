<template>
  <div class="flex-1 flex items-center justify-center">
    <button
      @click="login"
      class="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
    >
      Логин
    </button>
    <!-- {{ JSON.stringify(user) }} -->
  </div>
</template>
<script lang="ts" setup>
import { userStore } from '../hooks/User'

const { user, login } = userStore()
</script>
