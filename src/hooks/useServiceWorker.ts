import { useEffect, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'

interface ServiceWorkerState {
  needRefresh: boolean
  offlineReady: boolean
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
}

export const useServiceWorker = (): ServiceWorkerState => {
  const [offlineReady, setOfflineReady] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  const {
    needRefresh: [needRefreshValue, setNeedRefreshValue],
    offlineReady: [offlineReadyValue, setOfflineReadyValue],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {
      console.log('[PWA] Service Worker registered:', registration)
    },
    onRegisterError(error) {
      console.error('[PWA] Service Worker registration error:', error)
    },
    onOfflineReady() {
      console.log('[PWA] App ready to work offline')
      setOfflineReady(true)
      setOfflineReadyValue(true)
    },
    onNeedRefresh() {
      console.log('[PWA] New content available, please refresh')
      setNeedRefresh(true)
      setNeedRefreshValue(true)
    },
  })

  useEffect(() => {
    setOfflineReady(offlineReadyValue)
  }, [offlineReadyValue])

  useEffect(() => {
    setNeedRefresh(needRefreshValue)
  }, [needRefreshValue])

  return {
    needRefresh,
    offlineReady,
    updateServiceWorker,
  }
}
