<template>
    <div class="login-buttons page">
        <button class="login-button__reg">
            <NuxtLink to="/registration">Регистрация</NuxtLink>
        </button>
        <button class="login-button__log">
            <NuxtLink to="/login">Логин</NuxtLink>
        </button>
    </div>
</template>
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
