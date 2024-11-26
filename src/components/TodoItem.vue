<script setup lang="ts">
import { watch } from 'vue';
import { useNotifications } from '@/stores/notifications';

const props = defineProps<
  {name: string}
>()


const readModel = defineModel("readModel")
const { addNotification } = useNotifications()

watch(readModel, async (newValue) =>{
  if (newValue === true){
    addNotification({
      message: props.name,
      sent_at: new Date(),
      id: Date.now().toString(),
      read: false
    })
  }
})
</script>

<template>
  <div>{{ name }}</div>
  <input type="checkbox" v-model="readModel">
</template>