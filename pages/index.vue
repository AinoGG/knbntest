<template>
    <Header v-if="store.auth"/>
    <div class="login-buttons page" v-if="!store.auth && !boardStore.loading">
        <button class="login-button__reg">
            <NuxtLink to="/registration">Регистрация</NuxtLink>
        </button>
        <button class="login-button__log">
            <NuxtLink to="/login">Логин</NuxtLink>
        </button>
    </div>
    <Kanban v-if="store.auth" />
    <Loader v-if="boardStore.loading"/>
</template>
<script lang="ts" setup>
import Header from '../components/Header.vue'
import Kanban from '../components/Kanban.vue';
import Loader from '../components/Loader.vue'
import { useAuthStore } from '../store/authStore'
import { useBoardStore } from '../store/boardStore'

const store = useAuthStore()
const boardStore = useBoardStore()


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
