<template>
    <div class="column-board">
        <h2 class="column-board__header" :style="{ background: color }">{{ header }} ({{ 0 }}) </h2>
        <div class="column-board-box">
            <ul class="column-board__list">
                <li draggable="true" class="column-board__list-item">
                    <p class="list-item__id">
                        <b>ID:</b> 1242312312
                    </p>
                    <p class="list-item__text">
                        *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, animi quasi sequi
                        nesciunt consectetur cumque harum repellendus, impedit consequuntur, expedita ratione mollitia
                        dolor iste dicta quo veniam accusamus dolorem totam?
                    </p>
                </li>
                <li dra class="column-board__list-item">
                    <p class="list-item__id">
                        <b>ID:</b> 1242312312
                    </p>
                    <p class="list-item__text">
                        *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, animi quasi sequi
                        nesciunt consectetur cumque harum repellendus, impedit consequuntur, expedita ratione mollitia
                        dolor iste dicta quo veniam accusamus dolorem totam?
                    </p>
                </li>
                <li class="column-board__list-item">
                    <p class="list-item__id">
                        <b>ID:</b> 1242312312
                    </p>
                    <p class="list-item__text">
                        *Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, animi quasi sequi
                        nesciunt consectetur cumque harum repellendus, impedit consequuntur, expedita ratione mollitia
                        dolor iste dicta quo veniam accusamus dolorem totam?
                    </p>
                </li>
            </ul>
            <div class="column-board-text" v-if="state.textareaVisible">
                <textarea name="card-text" :id="color" cols="30" rows="10" v-model="state.textareaValue"
                    @input="() => console.log(state.textareaValue)"></textarea>
                <div class="card-text__buttons" v-if="state.textareaValue.length > 0">
                    <button class="active-button" type="button">
                    Добавить карточку</button>
                <button class="close-button" @click="textareaOn">X</button>
                </div>
            </div>
            <button type="button" @click="textareaOn" v-if="state.textareaValue.length === 0">+ Добавить карточку</button>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useBoardStore } from '../store/boardStore'

const store = useBoardStore()

const state = reactive({
    textareaVisible: false,
    textareaValue: ''
})

function textareaOn() {
    state.textareaVisible = !state.textareaVisible
    state.textareaValue = ''
}

defineProps(['header', 'color'])

</script>

<style lang="scss">
.column-board {
    color: aliceblue;
    background: #2d2e32;
    height: max-content;
    .column-board-box {
        padding: 8px;

        button {
            margin-top: 8px;
            background: transparent;
            max-width: 100%;
            color: #6f7175;
            cursor: pointer;
        }
    }

    h2 {
        font-size: 24px;
        font-weight: 400;
        padding: 5px;
        width: 100%;
    }

    &__list {
        display: grid;
        gap: 16px;

        &-item {
            background: #1f1f21;
            color: #929194;
            padding: 16px 8px;
            font-size: 14px;

            .list-item__id {
                b {
                    color: #e8edee;
                }
            }
        }
    }

    &-text {
        margin-top: 8px;

        textarea {
            width: 100%;
            background: #505050;
            color: #818481;
            padding: 5px;
            resize: none;
        }

        button.active-button {
            color: #aaadaa;
            background: #5f6165;
            padding: 8px;
        }

        .close-button {
            margin-left: 16px;
        }
    }
}
</style>