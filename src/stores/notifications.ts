import { ref } from 'vue'
import { defineStore } from 'pinia'


export interface INotification{
  id: string
  sent_at: Date
  read: boolean
  message: string
}

export const useNotifications = defineStore('notifications', () => {
  const notifications = ref(new Array<INotification>())

  const addNotification = (notification: INotification) =>{
    notifications.value.push(notification)
  }
  const readNotification = (id: string) =>{
    const notif = notifications.value.find((notification) => notification.id == id)
    if (notif){
      notif.read = true
    }
  }
  return { notifications, addNotification, readNotification}
})
