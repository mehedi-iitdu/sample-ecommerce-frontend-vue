<template>
    <div class="relative min-h-screen md:flex">
        <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <a
                href="#"
                class="block p-4 text-white font-bold"
            >eCommerce</a>


            <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>


        <div class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <a
                href="#"
                class="text-white flex items-center space-x-2 px-4"
            >
                <span class="text-2xl font-extrabold">eCommerce</span>
            </a>
            <nav>
                 <router-link 
                    to="/"
                    class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                    Home</router-link>
                 <router-link 
                    to="/order"
                    class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                    Order</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    mounted(){
        const btn = document.querySelector(".mobile-menu-button");
        const sidebar = document.querySelector(".sidebar");

        // add our event listener for the click
        btn.addEventListener("click", () => {
            sidebar.classList.toggle("-translate-x-full");
        });
    }
}
</script>
