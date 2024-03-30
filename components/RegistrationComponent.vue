<template>
    <div class="login">        
        <div class="login-forms">
            <form action="registration" class="login-form">
                <input type="text" placeholder="username" v-model="store.userForm">
                <input type="text" placeholder="useremail" v-model="store.emailForm">
                <input type="password" placeholder="password" v-model="store.passForm">
                <button @click.prevent="clickSubmit" type="submit">Отправить</button>
                <NuxtLink class="back-link" to="/">Вернуться</NuxtLink>
            </form>            
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '../store/authStore'
import { useRouter } from 'vue-router'
import { useBoardStore } from '../store/boardStore'
const router = useRouter()
const store = useAuthStore()
const boardStore = useBoardStore()
function clickSubmit() {
    boardStore.loading = true
    store.registration(store.userForm, store.emailForm, store.passForm)
    router.push('/')
}
</script>

