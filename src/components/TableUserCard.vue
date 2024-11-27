<script setup lang="ts">
import type { RandomUser } from '@/pkg/internal/dto/randomuser'
import TableRowCard from './TableRowCard.vue';
import UserDetailModel from './UserDetailModel.vue';
import { ref } from 'vue';
defineProps<{
  randomUsers: RandomUser[]
}>()
const isShow = ref(false)
const toggle = () =>{
  isShow.value = !isShow.value
}
const selectedUser = ref<RandomUser| null>(null)
</script>
<template>
  <div class="container" style="width: 900px">
    <div class="flex justify-items-start">
      <div class="w-2/12">Date</div>
      <div class="w-4/12">Name</div>
      <div class="w-2/12">Gender</div>
      <div class="w-2/12">Country</div>
      <div class="w-4/12">Email</div>
    </div>
    <TableRowCard v-for="(item, index) in randomUsers" :key="index" :user="item" :toggle="() =>{
      toggle()
      selectedUser = {...item}

    }"/>
    <UserDetailModel :toggle="toggle" v-show="isShow" :detail="selectedUser"/>
  </div>
</template>
