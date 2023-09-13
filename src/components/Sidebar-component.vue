<script>
export default{
        data() {
            return {

            }
        },
        methods: {
            settings(){
                document.querySelector("#profile").style.display = "block";
                document.querySelector("#reset").style.display = "block";
                document.querySelector("#submenu").classList.toggle('hidden');
            },
            eval(){
                document.querySelector("#instructor").style.display = "block";
                document.querySelector("#security").style.display = "block";
                document.querySelector("#cpcmenu").classList.toggle('hidden');
            },
            open(){
                document.querySelector(".sidebar").classList.toggle('left-[-250px]');
            }
        }
        
}
</script>

<template>
        <aside class="w-[250px]">
            <span class="absolute text-white text-4x1 top-5 left-4 cursor-pointer" @click="open">
                <i class="bi bi-filter-left px-5 p-1 bg-blue-700 rounded-md"></i>
            </span>
        <div class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-250px] p-2 w-[250px] overflow-y-auto text-center bg-sky-900">
            <div class="text-gray-100 text-x1">
                <div class="p-2 mt-1 flex items-center">
                    <img src="../assets/cpc_logo.png" class="h-32 pb-2 animate-bounce hover:animate-spin">
                    <h1 class="font-bold text-gray-200 text-[15px] ml-2">CPC Evaluation</h1>
                    <i class="bi bi-x-square-fill pb-20 cursor-pointer lg:hidden" @click="open"></i>
                </div>
                <hr class="my-2 text-gray-600">
            </div>
            
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-blue-50 text-zinc-600">
                <i class="bi bi-search text-sm"></i>
                <input type="text" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none placeholder-text-zinc-600" placeholder="Search">
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600">
                <router-link to='/landing'>
                <i class="bi bi-filter-circle-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200">Dashboard</span>
                </router-link>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600" @click="eval">
                <i class="bi bi-clipboard-data-fill"></i>
                <div class="flex justify-between w-full items-center">
                    <span class="text-[15px] ml-4 text-gray-200">Evaluation</span>
                    <span class="text-sm" id="arrow">
                        <i class="bi bi-chevron-down"></i>
                    </span>
                </div>
            </div>

            <div class="text-left text-sm font-thin mt-2 w-4/5 mx-auto text-white" id="cpcmenu">
                <router-link to='/evaluateInstructor'>          
                <h1 class="cursor-pointer p-2 hover:bg-blue-700 rounded-md mt-1 hidden" id="instructor"><i class="bi bi-person-circle pr-2"></i>Instructor</h1>
                </router-link>
                <router-link to='/CpcPersonel'> 
                <h1 class="cursor-pointer p-2 hover:bg-blue-700 rounded-md mt-1 hidden" id="security"><i class="bi bi-person-circle pr-2"></i>Security Personel</h1>
                </router-link>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600">
                <router-link to='/ranking'>
                <i class="bi bi-clipboard2-pulse-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200">Rankings</span>
                </router-link>
            </div>
            
            <hr class="my-4 text-gray-600">

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600" @click="settings">
                <i class="bi bi-gear-fill"></i>
                <div class="flex justify-between w-full items-center">
                    <span class="text-[15px] ml-4 text-gray-200">Settings</span>
                    <span class="text-sm" id="arrow">
                        <i class="bi bi-chevron-down"></i>
                    </span>
                </div>
            </div>

            <div class="text-left text-sm font-thin mt-2 w-4/5 mx-auto text-white" id="submenu">
                <router-link to='/profile'>          
                <h1 class="cursor-pointer p-2 hover:bg-blue-700 rounded-md mt-1 hidden" id="profile"><i class="bi bi-person-circle pr-2"></i>Profile</h1>
                </router-link>
                <router-link to="/fpassword">
                <h1 class="cursor-pointer p-2 hover:bg-blue-700 rounded-md mt-1 hidden" id="reset"><i class="bi bi-key-fill pr-2"></i>Reset Password</h1>
                </router-link>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600">
                <router-link to='/'>
                <i class="bi bi-box-arrow-right"></i>
                <span class="text-[15px] ml-4 text-gray-200">Logout</span>
                </router-link>
            </div>
        </div>
        </aside>
</template>

<style>
</style>
