<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue';
import { ref } from 'vue';

import { useNotifications } from '@/stores/notifications';
const message = "hellow"
const refDone = ref(false)

const {notifications} = useNotifications()

</script>

<template>
  <main>
    <TodoItem :name="message" v-model:readModel="refDone"/>
    <div v-if="refDone" >Done</div>
    <div>
      <ol v-for="item in notifications" :key="item.id">
        <div>{{ item.message }}</div>

      </ol>

    </div>
  </main>
</template>
