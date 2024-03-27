<template>
    <div class="wrapper-board">
        <ColumnItem :header="item.header" :color="item.color" :listItems="item.cardList" :stateIndex="item.column" v-for="(item, i) in store.board" :key="i" />
    </div>
</template>
<script setup lang="ts">
import { useBoardStore } from '~/store/boardStore';
const store = useBoardStore()
store.getCards()
</script>
<style lang="scss">
.wrapper-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 15px;
}
</style>