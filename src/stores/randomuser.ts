import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import type { RandomUser } from '@/pkg/internal/dto/randomuser'


export const useRandomUsers = defineStore('randomusers', () => {
  const randomusers = reactive(new Array<RandomUser>())

  const detail = ref<RandomUser| null>(null)
  const isShowRandomUser = computed(() => (detail.value !== null))

  const setRandomUsers = (randomUsers: RandomUser[]) =>{
    randomusers.splice(0, randomusers.length, ...randomUsers)
  }
  
  const setDetail = (randomUser: RandomUser | null) =>{
    if (randomUser){
      detail.value = {...randomUser}
      return
    }
    detail.value ={
      thumbnail: "",
      first_name: "",
      last_name: "",
      status: "",
      dob: "",
      email: "",
      gender: "",
      title: "",
      country: ""
    } 
  }
  return { randomusers, setRandomUsers, setDetail, detail, isShowRandomUser}
})
