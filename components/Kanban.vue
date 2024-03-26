<template>
    <div class="wrapper-board">
        <ColumnItem :header="item.header" :color="item.color" v-for="(item, i) in headers" :key="i" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            headers: [
                { header: 'ON HOLD', color: '#ea824b' },
                { header: 'IN PROGRESS', color: '#4390bb' },
                { header: 'NEEDS REVIEW', color: '#f1cb58' },
                { header: 'APPROWED', color: '#52b268' },
            ]
        }
    }
}
</script>
<style lang="scss">
.wrapper-board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 15px;
}
</style>