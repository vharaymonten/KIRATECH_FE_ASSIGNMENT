<template>
    <div class="flex items-center p-6 text-white rounded-lg shadow-md mb-4">
      <!-- Logo Section -->
      <div class="flex items-center justify-center mr-6">
        <img src="@/assets/Logo.png" alt="Logo" class="h-12 w-auto" />
      </div>
  
      <!-- Profile Section -->
      <div class="flex flex-col flex-grow">
        <!-- Profile Picture and Name -->
        <div class="flex items-center mb-2">
          <img src="@/assets/Avatar.png" alt="Profile Picture" class="h-16 w-16 rounded-full mr-4">
          <div class="flex flex-col">
            <span class="text-lg font-semibold">Jivha Ramond Lie</span>
            <span class="text-sm text-gray-300">Last online: 2 days ago</span>
          </div>
        </div>
  
        <!-- Action Buttons -->
        <div class="flex space-x-4">
          <a class="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100">Add Friend</a>
        </div>
      </div>
    </div>
  </template>
  
  
  <style scoped>
  /* Scoped styles for specific tweaks if needed */
  </style>
  