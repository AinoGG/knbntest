<template>
    <div class="login-buttons page" v-if="!store.auth">
        <button class="login-button__reg">
            <NuxtLink to="/registration">Регистрация</NuxtLink>
        </button>
        <button class="login-button__log">
            <NuxtLink to="/login">Логин</NuxtLink>
        </button>
    </div>
    <Kanban  v-if="store.auth"/>
</template>
<script lang="ts" setup>
import { useAuthStore } from '../store/authStore'
import Kanban from '../components/Kanban.vue';
const store = useAuthStore()
console.log(store.auth)

onMounted(() => {
    if(process.browser && !!localStorage.getItem('token')) {
        store.auth = true
    }
})
console.log()
</script>
<style lang="scss">
.login-buttons {
    display: flex;
    gap: 8px;

    button {
        width: max-content;
        padding: 0px 8px;
        height: 36px;
        transition: all .3s ease-in-out;

        cursor: pointer;

        a {
            transition: all .3s ease-in-out;
        }

        &:hover {
            background: #f08888;

            a {
                color: #fff;
            }
        }
    }
}
</style>
