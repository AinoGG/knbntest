<template>
  <div class="main">
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: antiquewhite;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

p, h1, h2, h3, h4{
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
