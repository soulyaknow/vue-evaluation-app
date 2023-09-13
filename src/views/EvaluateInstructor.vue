<script>
import Sidebar from '../components/Sidebar-component.vue'
import EvaluateInstructor from '../components/EvaluateInstructor.vue'

export default {
  data() {
    return {
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
  name: "Sidebar-component",
  components: {
    Sidebar,
    EvaluateInstructor,
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
              <span class="font-bold text-white p-1 text-[30px]">Evaluate Instructor</span>
            </div>  
            <span class="text-white p-1 text-[12px]">1st Semester</span>    
            <!-- <span class="text-white p-1 text-[12px]">Year 2023 | Year 2024</span> -->
          </div>
        <EvaluateInstructor :instructors="instructors"></EvaluateInstructor>
        </div>
      </div>
    </div>
</template>

<style>
</style>