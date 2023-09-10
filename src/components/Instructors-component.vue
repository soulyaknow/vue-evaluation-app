<script>
export default{
    data(){
    return{
      instructor: [],
    };
  },
  methods: {
    getData() {
      fetch('')
      .then((data) => data.json())
      .then((data) => (this.instructor = data))
      .catch((err) => console.log(err));
    }
  },
  mounted(){
    this.getData();
  },
}

</script>
<template>
    <div class="min-h-screen bg-blue-50">
        <div class="mt-8 grid gap-10 lg:grid-cols-3 sm-grid-cols-2 p-5">
            <div class="flex items-center bg-white rounded-xl border-8">
                <button type="button" class="flex items-center">
                    <img src="../assets/idpicture.jpg" class="h-32 border-r-8">
                <div class="pt-1">
                    <div class="text-[15px] ml-2">Ms. Sophia Espiritu</div>
                    <div class="text-[15px] ml-2">BSIT</div>
                </div>
                </button>
            </div>
            <div class="flex items-center bg-white rounded-xl border-8">
                <button type="button" class="flex items-center">
                    <img src="../assets/idpicture.jpg" class="h-32 border-r-8">
                <div class="pt-1">
                    <div class="text-[15px] ml-2">Ms. Sophia Espiritu</div>
                    <div class="text-[15px] ml-2">BSIT</div>
                </div>
                </button>
            </div>
            <div class="flex items-center bg-white rounded-xl border-8">
                <button type="button" class="flex items-center">
                    <img src="../assets/idpicture.jpg" class="h-32 border-r-8">
                <div class="pt-1">
                    <div class="text-[15px] ml-2">Ms. Sophia Espiritu</div>
                    <div class="text-[15px] ml-2">BSIT</div>
                </div>
                </button>
            </div>
            <div class="flex items-center bg-white rounded-xl border-8">
                <button type="button" class="flex items-center">
                    <img src="../assets/idpicture.jpg" class="h-32 border-r-8">
                <div class="pt-1">
                    <div class="text-[15px] ml-2">Ms. Sophia Espiritu</div>
                    <div class="text-[15px] ml-2">BSIT</div>
                </div>
                </button>
            </div>
            <div class="flex items-center bg-white rounded-xl border-8">
                <button type="button" class="flex items-center">
                    <img src="../assets/idpicture.jpg" class="h-32 border-r-8">
                <div class="pt-1">
                    <div class="text-[15px] ml-2">Ms. Sophia Espiritu</div>
                    <div class="text-[15px] ml-2">BSIT</div>
                </div>
                </button>
            </div>
        </div>
    </div>
        
</template>