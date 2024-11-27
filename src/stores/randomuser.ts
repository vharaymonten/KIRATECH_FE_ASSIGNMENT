import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { RandomUser } from '@/pkg/internal/dto/randomuser'


export const useRandomUsers = defineStore('randomusers', () => {
  const randomusers = reactive(new Array<RandomUser>())


  const setRandomUsers = (randomUsers: RandomUser[]) =>{
    randomusers.splice(0, randomusers.length, ...randomUsers)
  }
  return { randomusers, setRandomUsers}
})
