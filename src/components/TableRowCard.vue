<script setup lang="ts">
import type { RandomUser } from '@/pkg/internal/dto/randomuser';
import { defineProps} from 'vue'
import dayjs from 'dayjs';

const props = defineProps<{
  user: RandomUser,
  toggle: () => void

}>()

const onClick = () =>{
  props.toggle()
}

</script>
<template>
  <div @click="onClick" class="max-w rounded  shadow-md p-4 mb-5  hover:border-cyan-500 hover:shadow-lg hover:border-2" style="width: 800px;" >
    <div class="flex w-full justify-items-start" >
      <div class="w-2/12 ">{{ dayjs(user.dob).format('YYYY-MM-DD')}}</div>
      <div class="w-4/12">{{ user.first_name + " "  + user.last_name }}</div>
      <div class="w-2/12">{{ user.gender }}</div>
      <div class="w-2/12">{{ user.country  }}</div>
      <div class="w-4/12">{{ user.email }}</div>

    </div>
  </div>
</template>
