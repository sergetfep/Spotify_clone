<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/index'
import { onMounted, watch } from 'vue'

let audioElement: HTMLAudioElement
/* MOUNTED */
onMounted(() => {
  /* WATCH */
  watch(
    () => volume?.value,
    (newVal, oldVal) => {
      audioElement.volume = newVal / 100
      lastVolume.value = oldVal < 20 ? 20 : oldVal
    }
  )
  watch(
    () => isSongPlaying.value,
    (newVal) => {
      if (newVal) {
        audioElement.play()
      } else {
        audioElement.pause()
      }
    }
  )
  watch(
    () => activeSongId.value,
    () => {
      audioElement.onloadeddata = () => {
        audioElement.currentTime = 0
        audioElement.play()
      }
    }
  )
  audioElement = document.getElementById('audio') as HTMLAudioElement
  audioElement.onloadeddata = () => {
    audioElement.currentTime =
      !isNaN(audioElement.duration) && !isNaN(songSeconds.value)
        ? Math.floor((songSeconds.value * audioElement.duration) / 100)
        : 0
    if (isSongPlaying.value) {
      audioElement.play()
    }
  }
  audioElement.ontimeupdate = () => {
    songSeconds.value = isNaN((audioElement.currentTime * 100) / audioElement.duration)
      ? 0
      : (audioElement.currentTime * 100) / audioElement.duration
  }
  audioElement.volume = volume.value / 100
})
const store = useStore()
const { activeSong, activeSongId, volume, lastVolume, isSongPlaying, songSeconds } =
  storeToRefs(store)
const { revertLike, prevSong, nextSong, toggleSong, toggleVolume } = store

const toggleVolumePlay = () => {
  audioElement.volume = toggleVolume() / 100
}
const toggleSongPlay = (songId: number) => {
  audioElement.pause()
  if (!isSongPlaying.value) {
    toggleSong(songId)
    audioElement.play()
  } else {
    isSongPlaying.value = false
  }
}
const prevSongPlay = () => {
  audioElement.onloadeddata = () => {
    audioElement.play()
  }
  toggleSong(prevSong())
}
const nextSongPlay = () => {
  audioElement.onloadeddata = () => {
    audioElement.play()
  }
  toggleSong(nextSong())
}
const resumePlaying = () => {
  audioElement.currentTime = (songSeconds.value / 100) * audioElement.duration
  audioElement.play()
  isSongPlaying.value = true
}
// const pausePlaying = () => {
//     audioElement.pause();
//     isSongPlaying.value = false;
// };
</script>
<template>
  <audio
    id="audio"
    ref="audio"
    :src="'songs/' + activeSong?.songPath"
    preload="auto"
    :onended="nextSongPlay"
  >
    <p>Your browser does not support the <code>audio</code> element.</p>
  </audio>
  <div
    class="fixed bottom-0 left-0 w-screen flex flex-row justify-around py-3 bg-gray-dark border-t-2 border-gray-lightest px-5 xs:px-20"
  >
    <div class="flex flex-row items-center mr-auto basis-1/2 xs:basis-1/4">
      <img class="w-16 h-16 hidden xs:block" :src="'album-covers/' + activeSong?.imgPath" />
      <div class="flex flex-col xs:ml-2">
        <span class="text-lg font-bold">{{ activeSong.title }}</span>
        <span class="text-xs text-gray-400">{{ activeSong.artistName }}</span>
      </div>
      <button @click="revertLike(activeSong.id)" class="hidden xs:block xs:ml-5">
        <img :src="activeSong.isLiked ? 'heart-filled.png' : 'heart.png'" class="w-8 h-8 p-1" />
      </button>
    </div>
    <div class="flex flex-col items-center basis-1/4 xs:basis-1/2">
      <div class="flex flex-row justify-evenly w-full">
        <button @click="prevSongPlay">
          <img src="@/assets/prev.png" alt="Prev" class="w-8 h-8 p-1" />
        </button>
        <button @click="toggleSongPlay(activeSong.id)">
          <img :src="isSongPlaying ? './stop.png' : './play.png'" alt="Play" class="w-8 h-8 p-1" />
        </button>
        <button @click="nextSongPlay">
          <img src="@/assets/next.png" alt="Next" class="w-8 h-8 p-1" />
        </button>
      </div>
      <input
        type="range"
        class="w-3/4 h-1.5 bg-white accent-gray-300 rounded outline-none slider-thumb mt-4 cursor-pointer hover:accent-primary-normal"
        min="0"
        max="100"
        step=".01"
        @input="resumePlaying"
        v-model="songSeconds"
      />
    </div>
    <div class="ml-auto my-auto items-center basis-1/4 flex flex-row justify-end">
      <button @click="toggleVolumePlay">
        <img
          :src="volume == 0 ? 'muted.png' : 'volume.png'"
          alt="Volume"
          class="w-8 h-8 p-1 mr-2 hidden xs:block"
        />
      </button>
      <input
        type="range"
        class="w-1/2 h-1 bg-white accent-gray-300 rounded outline-none slider-thumb text-right cursor-pointer hover:accent-primary-normal"
        min="0"
        max="100"
        step="0.01"
        v-model="volume"
      />
    </div>
  </div>
</template>
