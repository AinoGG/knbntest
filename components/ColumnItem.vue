<template>
    <div class="column-board">
        <h2 class="column-board__header" :style="{ background: color }">{{ header }} ({{ 0 }}) </h2>
        <div class="column-board-box">
            <ul class="column-board__list">
                <li draggable="true" class="column-board__list-item" v-for="(item, i) in props.listItems" :key="i">
                    <p class="list-item__id">
                        <b>ID:</b> {{ item.id }}
                    </p>
                    <p class="list-item__text">
                        {{ item.text }}
                    </p>
                    <button type="button" @click="deleteListItem(item, store.board[props.stateIndex].cardList)" class="list-item__button">X</button>
                </li>
            </ul>
            <div class="column-board-text" v-if="state.textareaVisible">
                <textarea name="card-text" :id="color" cols="30" rows="10" v-model="state.textareaValue"
                    @input="() => console.log(state.textareaValue)"></textarea>
                <div class="card-text__buttons" v-if="state.textareaValue.length > 0">
                    <button class="active-button" type="button" @click="addCard">
                        Добавить карточку</button>
                    <button class="close-button" @click="textareaOn">X</button>
                </div>
            </div>
            <button type="button" @click="textareaOn" v-if="state.textareaValue.length === 0">+ Добавить
                карточку</button>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useBoardStore } from '../store/boardStore'

const store = useBoardStore()

interface StateColumn {
    textareaVisible: boolean,
    textareaValue: string
}

interface ListItem {
    id: string,
    text: string,
}

interface DefaultProps<T> {
    header: string,
    color: string,
    listItems: T[],
    stateIndex: number
}
const props = defineProps<DefaultProps<ListItem>>();

const state = reactive<StateColumn>({
    textareaVisible: false,
    textareaValue: ''
})

function textareaOn() {
    state.textareaVisible = !state.textareaVisible
    state.textareaValue = ''
}

function addCard() {
    store.addCard(store.board[props.stateIndex], { id: '123', text: state.textareaValue })
    textareaOn()
}


function deleteListItem(item:any, array: any) {
    if(array.find((itemList: any) => itemList.id === item.id)) {
        array.splice(array.indexOf(item), 1)
    }
}


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
            position: relative;
            .list-item__id {
                b {
                    color: #e8edee;
                }
            }

            button.list-item__button{
                position: absolute;
                top: 8px;
                right: 8px;
                margin-top: 0;
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