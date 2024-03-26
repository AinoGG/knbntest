<template>
    <div class="login">
        <div class="login-buttons" v-if="!state.choose">
            <button class="login-button__reg" @click="chooseAction('reg')">Регистрация</button>
            <button class="login-button__log" @click="chooseAction('log')">Логин</button>
        </div>
        <div class="login-forms" v-else>
            <form action="registration" class="login-form" v-if="state.action === 'reg'">
                <input type="text" placeholder="username" v-model="store.userForm">
                <input type="text" placeholder="useremail" v-model="store.emailForm">
                <input type="password" placeholder="password" v-model="store.passForm">
                <button @click.prevent="clickSubmit" type="submit">SUBMIT</button>
            </form>
            <form action="login" class="login-form" v-if="state.action === 'log'">
                <input type="text" placeholder="username" v-model="store.userForm">
                <input type="password" placeholder="password" v-model="store.passForm">
                <button @click.prevent="clickSubmit" type="submit">SUBMIT</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from '../store/authStore'
import { reactive } from 'vue'
const state = reactive({
    choose: false,
    action: ''
})
const store = useAuthStore()
function chooseAction(param: string) {
    state.action = param,
        state.choose = !state.choose
}
function clickSubmit() {
    if (state.action === 'reg') {
        store.registration(store.userForm, store.emailForm, store.passForm)
    } else if (state.action === 'log') {
        store.login(store.userForm, store.passForm)
    }
}
</script>

<style lang="scss">
.login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &-buttons {
        display: flex;
        gap: 8px;

        button {
            width: 100px;
            height: 36px;
            transition: all .3s ease-in-out;
            cursor: pointer;

            &:hover {
                background: #f08888;
                color: #fff;
            }
        }
    }
}

.login-form {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
        height: 32px;
        background: #f3f3f3;
        padding: 0px 10px;
        border: none;
    }

    button {
        height: 32px;
        background: #f3f3f3;
        border-radius: 8px;
        border: none;
        font-weight: 700;
        transition: all .3s ease-in-out;
        cursor: pointer;

        &:hover {
            background: #e69c9c;
            color: #fff;
        }
    }
}
</style>