<template>
  <div class="main">
    <NuxtPage  />
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from './store/authStore'
import { useBoardStore } from './store/boardStore';
const store = useAuthStore()
const boardStore = useBoardStore()
console.log(store.isAuth)



const state = reactive({
  expToken: 0,
  isExpire: false
})

function tokenExpired(token: any) {
  boardStore.expToken = JSON.parse(atob(token.split('.')[1])).exp
  if (Date.now() >= boardStore.expToken * 1000) {
    state.isExpire = false
  } else {
    state.isExpire = true
  }
  console.log(state.isExpire)
}

if (process.browser && localStorage.getItem('token')) {
  tokenExpired(localStorage.getItem('token'))
}

onMounted(() => {
  
  if (process.browser && !state.isExpire && !!localStorage.getItem('refresh')) {
    store.refreshToken(localStorage.getItem('refresh'))
    boardStore.onIsShuffle()
  }
  if (process.browser && !localStorage.getItem('refresh') && !localStorage.getItem('token')) {
    store.auth = false
  }

})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: antiquewhite;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  word-break: break-word;

  @media(max-width:768px) {
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
  }
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

p,
h1,
h2,
h3,
h4 {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000000;
}

button {
  background: #f3f3f3;
  border: none;
  border-radius: 4px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 0;
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}


.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    height: 36px;
    background: #f3f3f3;
    border-radius: 4px;
    border: none;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: #e69c9c;
      color: #fff;
    }
  }
}

.main {
  background: #424141;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}

.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-link {
  width: 100%;
  height: 36px;
  transition: all .3s ease-in-out;
  background: #f3f3f3;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
