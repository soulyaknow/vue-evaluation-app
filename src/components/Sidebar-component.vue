<script>
export default{
        data() {
            return {

            }
        },
        methods: {
            click(){
                document.querySelector("#profile").style.display = "block";
                document.querySelector("#submenu").classList.toggle('hidden');
            },
            open(){
                document.querySelector(".sidebar").classList.toggle('left-[-300px]');
            }
        }
    }
</script>

<template>
    <body class="h-screen min-h-screen bg-sky-950 font-serif">
            <span class="absolute text-white text-4x1 top-5 left-4 cursor-pointer" @click="open()">
                <i class="bi bi-filter-left px-5 p-1 bg-blue-700 rounded-md"></i>
            </span>
        <div class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-sky-900">
            <div class="text-gray-100 text-x1">
                <div class="p-2.5 mt-1 flex items-center">
                    <!-- <i class="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i> -->
                    <img src="../assets/cpc_logo.png" class="h-32 pb-2.5">
                    <h1 class="font-bold text-gray-200 text-[15px] ml-3">CPC Evaluation</h1>
                    <i class="bi bi-x-square-fill ml-8 pb-20 cursor-pointer lg:hidden" @click="open()"></i>
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

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600">
                <router-link to='/evaluate'>
                <i class="bi bi-clipboard-data-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200">Evaluation</span>
                </router-link>
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600">
                <router-link to='/ranking'>
                <i class="bi bi-clipboard2-pulse-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200">Rankings</span>
                </router-link>
            </div>
            
            <hr class="my-4 text-gray-600">

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600" @click="click()">
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
            </div>

            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-blue-600">
                <router-link to='/logout'>
                <i class="bi bi-box-arrow-right"></i>
                <span class="text-[15px] ml-4 text-gray-200">Logout</span>
                </router-link>
            </div>
        </div>
    </body>
</template>

<style>
</style>