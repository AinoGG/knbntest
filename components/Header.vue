<template>
    <div class="header">
        <button class="logout-btn" @click="logout">LOGOUT</button>
    </div>
    <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
            <span></span>
        </label>

        <div class="menu__box">
            <button class="menu__item" @click="logout">LOGOUT</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '../store/authStore'
const store = useAuthStore()
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
    z-index: 999;
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
</style>