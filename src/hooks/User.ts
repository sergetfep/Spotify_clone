import { createGlobalState } from '@vueuse/core'
import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'

export const userStore = createGlobalState(() => {
  const telegramSession = useLocalStorage<string>('my-login', null)
  const user = computed(() => {
    return telegramSession.value == null ? null : JSON.parse(telegramSession.value)
  })

  const router = useRouter()

  const login = () => {
    ;(window as any).Telegram?.Login?.auth?.(
      { bot_id: 6777321955, request_access: true },
      async (data: any) => {
        if (data) {
          telegramSession.value = JSON.stringify(data)
          router.push('/')
        }
      }
    )
  }
  const logout = () => {
    telegramSession.value = null
  }

  return { user, login, logout }
})
