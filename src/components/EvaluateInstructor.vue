<script>
import Swal from 'sweetalert2'
    export default{
        props: {
            instructors: {
                type: Array,
                required: true,
            },
        },
        methods: {
            profile(){
                Swal.fire({
                    title: 'Evaluate Now?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes',
                    position: 'center-top',
                }).then((result) => {
                if (result.isConfirmed) {
                    
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
                    }
                })
            }
        }
    }
</script>
<template>
    <div class="min-h-screen bg-blue-50">
        <div class="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols-2 p-5">
            <div class="flex items-center bg-white rounded-xl border-8" v-for="(instructor, index) in instructors" :key="index">
                <button type="button" class="flex items-center" @click="profile">
                    <img src="../assets/idpicture.jpg" class="h-32 border-r-8">
                <div class="pt-1">
                    <div class="text-[15px] ml-2">{{ instructor.Name }}</div>
                    <div class="text-[15px] ml-2">{{ instructor.Department }}</div>
                </div>
                </button>
            </div>
        </div>
    </div>
</template>