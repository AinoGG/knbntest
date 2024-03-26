<template>
    <div class="login">        
        <div class="login-forms">            
            <form action="login" class="login-form">
                <input type="text" placeholder="username" v-model="store.userForm">
                <input type="password" placeholder="password" v-model="store.passForm">
                <button @click.prevent="clickSubmit" type="submit">Отправить</button>
                <NuxtLink class="back-link" to="/">Вернуться</NuxtLink>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '../store/authStore'

const store = useAuthStore()
function clickSubmit() {
    store.login(store.userForm, store.passForm)
}
</script>

