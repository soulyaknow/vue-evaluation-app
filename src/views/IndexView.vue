 <script>
import Sidebar from '../components/Sidebar-component.vue'
import Instructors from '../components/Instructors-component.vue'
import axios from 'axios'

export default {
  name: "Home-component",
  data() {
    return {
      user: null,
      instructors: [
        {
          Name: 'Sophia Espiritu',
          Department: 'BSIT'
        },
        {
          Name: 'Dariane Sureta',
          Department: 'BEED'
        },
        {
          Name: 'Ann Sarmiento',
          Department: 'BSHM'
        }
      ],
    } 
  },
  async created(){
    const response = await axios.get('user');
    
    this.user = response.data;
  },
  components: {
    Sidebar,
    Instructors,
  },
};
</script>
<template>
    <div class="w-full min-h-screen bg-sky-950 font-serif flex">
      <Sidebar></Sidebar>
      <div class="flex-auto">
        <div class="flex flex-col">
          <div class="flex flex-col bg-sky-900">
            <div class="flex flex-row space-x-3">
              <span class="font-bold text-white p-1 text-[30px]">Instructors</span>
            </div>      
            <span class="text-white p-1 text-[12px]">Year 2023 | Year 2024</span>         
          </div>
          <!-- Pass the instructor data as a prop -->
            <Instructors :instructors="instructors"></Instructors>
        </div>
      </div>
    </div>
</template>

<style>
</style>