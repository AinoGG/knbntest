<template>
    <div class="wrapper-board">
        <ColumnItem :ws="state.connection" :header="item.header" :color="item.color" :listItems="item.cardList"
            :stateIndex="item.column" v-for="(item, i) in store.board" :key="i" />
    </div>
    <!-- <button @click="sendMEssage('hi')">send</button> -->
</template>
<script setup lang="ts">
import { useAuthStore } from '../store/authStore'
import { useBoardStore } from '../store/boardStore';
const storeAuth = useAuthStore()
const store = useBoardStore()
store.getCards()

interface State {
    connection: any
}

const state = reactive<State>({
    connection: null,
})

storeAuth.refreshToken(localStorage.getItem('refresh'))

// state.connection = new WebSocket(`wss://trello.backend.tests.nekidaem.ru/events/?token=${localStorage.getItem('token')}`)

// function sendMEssage(message:any) {
//     state.connection.send(message)
// }

// console.log(state.connection)

onMounted(() => {
    // setTimeout(() => {
    //     state.connection.onopen = (event: any) => {
    //         console.log(event);
    //         console.log('success connected WS');
    //     }
    // }, 2000)
})
</script>
<style lang="scss">
.wrapper-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 15px;
    @media(max-width:768px) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>