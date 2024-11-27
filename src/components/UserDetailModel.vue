<script setup lang="ts">
import dayjs from "dayjs";
// import { computed } from "vue";
import type { RandomUser } from "@/pkg/internal/dto/randomuser";


defineProps<{toggle: ()=> void, detail: RandomUser| null}>()


</script>


<template>
  <div
    class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 w-96">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold">
          {{ detail?.title }} {{ detail?.first_name }} {{ detail?.last_name }}
        </h2>
        <button class="text-gray-500 hover:text-gray-800" @click="toggle">✕</button>
      </div>
      <div class="flex justify-center">
        <img class="rounded" v-bind:src="detail?.thumbnail" alt="Default avatar">
      </div>

      <div class="space-y-4">
        <p><strong>Date:</strong> {{ dayjs(detail?.dob).format("YYYY-MM-DD") }}</p>
        <p><strong>Status:</strong> {{ detail?.status }}</p>
        <p><strong>Gender:</strong> {{ detail?.gender }}</p>
        <p><strong>Country:</strong> {{ detail?.country }}</p>
        <p><strong>Email:</strong> {{ detail?.email }}</p>
      </div>
    </div>
  </div>
</template>

