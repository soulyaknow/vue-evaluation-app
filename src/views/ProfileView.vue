<template>
    <div class="w-full min-h-screen bg-sky-950 font-serif flex">
      <Sidebar></Sidebar>
      <div class="flex-auto">
        <div class="flex flex-col">
          <div class="flex flex-col bg-sky-900">
            <div class="flex flex-row space-x-3">
              <span class="font-bold text-white p-3 text-[25px]">User Profile</span>
            </div>              
          </div>
            <Profile></Profile>
        </div>
      </div>
    </div>
</template>
<script>
import Sidebar from '../components/Sidebar-component.vue'
import Profile from '../components/Profile-component.vue'

export default{
    name: 'Profile-Page',
    components: {
    Sidebar,
    Profile,
  },
}

</script>