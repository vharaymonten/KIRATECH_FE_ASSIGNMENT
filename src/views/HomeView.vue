<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import { useRandomUsers } from '@/stores/randomuser'
import axios from '@/pkg/internal/axios'
import type { RandomUser, RandomUserAPIRepsonse } from '@/pkg/internal/dto/randomuser'
import { transformRandomUserApiResponse } from '@/pkg/internal/transformer/randomuser'
import TableUserCard from '@/components/TableUserCard.vue'
import HeaderProfile from '@/components/HeaderProfile.vue'

interface APISearchProp {
  page?: number
}
interface UISearchSort {
  isAsc: boolean
  name: string
}

const { randomusers, setRandomUsers } = useRandomUsers()

const searchParams = ref<APISearchProp>()

const sortSearch = ref<UISearchSort>({
  isAsc: true,
  name: '',
})
const sortSearchFn = (users: RandomUser[]) => {
  const filtered = users.filter((user) =>
    (user.first_name + ' ' + user.last_name)
      .toLowerCase()
      .includes(sortSearch.value.name.toLowerCase()),
  )
  const sortedUsers = filtered.sort((a, b) => {
    const nameA = a.first_name + ' ' + a.last_name
    const nameB = b.first_name + ' ' + b.last_name

    if (sortSearch.value.isAsc) {
      return nameA.localeCompare(nameB) // Ascending order
    } else {
      return nameB.localeCompare(nameA) // Descending order
    }
  })
  return sortedUsers
}

const isFetching = ref(false)

const fetchFn = async (props: APISearchProp) => {
  try {
    isFetching.value = true
    const data = (await axios.get('/api/', { params: { ...props, results: 10 } }))
      .data as RandomUserAPIRepsonse
    setRandomUsers(transformRandomUserApiResponse(data))
  } catch (e) {
    if (`${import.meta.env.DEV}`) {
      console.error('Error on onFetching Logic  ; ', e)
    }
  } finally {
    setTimeout(() => {
      isFetching.value = false
    }, 500)
  }
}
onMounted(async () => {
  fetchFn({})
})
watch(searchParams, (newValue) => {
  fetchFn({ ...newValue })
})

const refresh = () => {
  searchParams.value = { ...searchParams.value }
}
const pagination = (nextpage: boolean) => {
  const currentPage = searchParams.value?.page || 1
  if (currentPage == 1 && !nextpage) return
  const newPage = currentPage + (nextpage ? 1 : -1)

  searchParams.value = { ...searchParams.value, page: newPage }
}
const changeSortOrder = () => {
  sortSearch.value = { ...sortSearch.value, isAsc: !sortSearch.value.isAsc }
}
</script>

<template>
  <div id="header">
    <HeaderProfile />
  </div>
  <div>
    <div class="flex items-center space-x-2 mb-4">
      <!-- Search Input -->
      <div class="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          v-model="sortSearch.name"
          class="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none focus:border-blue-500"
        />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
        </div>
      </div>

      <!-- Sort Button -->
      <button
        @click="changeSortOrder"
        class="flex items-center px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
      >
        {{ sortSearch.isAsc ? 'Asc' : 'Desc' }}
      </button>
    </div>

    <div class="flex flex-1 gap-2">
      <button
        :disabled="isFetching"
        @click="() => pagination(false)"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Prev Page
      </button>
      <button
        :disabled="isFetching"
        @click="() => pagination(true)"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Next Page
      </button>
      <button
        :disabled="isFetching"
        @click="refresh"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      >
        Refresh
      </button>
    </div>
    <span class="p-4">Current Page {{ searchParams?.page || 1 }}</span>
    <div class="relative inline-block" v-show="isFetching">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-4 h-4 rounded-full bg-blue-500 animate-ping"></div>
      </div>
      <span class="text-sm">fetching...</span>
    </div>

    <TableUserCard v-bind:randomUsers="sortSearchFn(randomusers)" />
  </div>
</template>
