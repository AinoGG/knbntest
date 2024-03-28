<template>
    <div class="header" v-if="store.auth">
        <button class="logout-btn" @click="logout">LOGOUT</button>
    </div>
    <div class="hamburger-menu" v-if="store.auth">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
            <span></span>
        </label>

        <div class="menu__box">
            <button class="menu__item" @click="logout">LOGOUT</button>
        </div>
    </div>
    <div class="login-buttons page" v-if="!store.auth && !props.loading">
        <button class="login-button__reg">
            <NuxtLink to="/registration">Регистрация</NuxtLink>
        </button>
        <button class="login-button__log">
            <NuxtLink to="/login">Логин</NuxtLink>
        </button>
    </div>
    <Kanban v-if="store.auth && !props.loading" />
    <div class="loading" v-if="loading">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin:auto;background:#424141;display:block;" width="200px" height="200px" viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <g transform="translate(50 50)">
                <g>
                    <animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2s"
                        repeatCount="indefinite"></animateTransform>
                    <path
                        d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146712 L24.742744050198738 16.964569457146712 L30.399598299691117 22.621423706639092 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639092 -30.399598299691117 L-16.964569457146712 -24.742744050198738 A30 30 0 0 1 -5.500000000000011 -29.491524206117255 L-5.500000000000011 -29.491524206117255 L-5.500000000000012 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"
                        fill="#e15b64"></path>
                </g>
            </g>
        </svg>
    </div>
</template>
<script lang="ts" setup>
import Kanban from '../components/Kanban.vue';
import { useAuthStore } from '../store/authStore'
const store = useAuthStore()


const props = defineProps([
    'loading'
])

function logout() {
    store.auth = false
    if (process.browser) {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh')
    }
}



</script>
<style lang="scss">
#menu__toggle {
    opacity: 0;
}

#menu__toggle:checked+.menu__btn>span {
    transform: rotate(45deg);
}

#menu__toggle:checked+.menu__btn>span::before {
    top: 0;
    transform: rotate(0deg);
}

#menu__toggle:checked+.menu__btn>span::after {
    top: 0;
    transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
    left: 0 !important;
}

.menu__btn {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
    display: none;

    @media(max-width:768px) {
        display: block;
    }
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #616161;
    transition-duration: .25s;
}

.menu__btn>span::before {
    content: '';
    top: -8px;
}

.menu__btn>span::after {
    content: '';
    top: 8px;
}

.menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #ECEFF1;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;

    button {
        background: #333;
        color: #fff;
        padding: 10px;
        margin-left: 10px;
    }
}

.menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
}

.menu__item:hover {
    background-color: #CFD8DC;
}


.header {
    width: 100%;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 20px;
    height: 60px;

    @media(max-width:768px) {
        height: 45px;
    }

    button.logout-btn {
        height: 36px;
        width: 100px;

        @media(max-width:768px) {
            display: none;
        }
    }


}

.loading {
    display: flex;
    align-items: center;
    height: 100vh;
}

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
