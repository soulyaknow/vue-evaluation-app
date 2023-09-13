<script>
export default {
    props: {
        instructors: {
            type: Array,
            required: true,
        },
    },
};
</script>
<template>
    <div class="min-h-screen bg-blue-50">
        <!-- Access the instructor prop here -->
        <div class="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols-2 p-5">
            <div class="flex items-center bg-white rounded-xl border-8" v-for="(instructor, index) in instructors" :key="index">
                <button type="button" class="flex items-center">
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