<template>
  <main class="flex items-center justify-center h-screen min-h-screen bg-sky-950 mix-blend-darken">
    <form @submit.prevent="handleSubmit">
        <div class="bg-sky-900 w-96 p-10 rounded-md shadow-sm">
            <div class="flex items-center justify-center mb-6">
                <img src="../assets/cpc_logo.png" class="h-32 pb-2.5 animate-bounce"/>
            </div>
            <input v-model="studentid" class="w-full py-2 animate-bounce bg-blue-50 text-zinc-600 px-1 rounded-md outline-none mb-6 text-center" type="text" placeholder="Student ID"/>
            <input v-model="password" class="w-full py-2 animate-bounce bg-blue-50 text-zinc-600 px-1 rounded-md outline-none mb-6 text-center" type="password" placeholder="Password"/>
            <button type="submit" class="bg-blue-500 py-2 w-full text-gray-100 rounded-md hover:bg-blue-600 transition-colors">Login</button>
        </div>
    </form>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login-page',
  data() {
    return{
      studentid: '',
      password: '',
    }
  },
  methods: {
    
    async handleSubmit(){ 
      const response = await axios.post('/login', {
        studentid: this.studentid,
        password: this.password
      });
      
      localStorage.setItem('token', response.data.token);
      this.$router.push('/');
    }
  }
}
</script>
