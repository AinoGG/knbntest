<template>
    <div class="column-board">
        <h2 class="column-board__header" :style="{ background: color }">{{ header }} ({{ listItems.length }}) </h2>
        <div class="column-board-box">
            <ul @dragover.prevent @dragenter.prevent class="column-board__list" @drop="dropEvent($event, stateIndex)">
                <li @dragenter="() => state.check = item.id" @dragleave="() => state.check = false" draggable="true"
                    @dragstart="dragEvent($event, item, stateIndex)" class="column-board__list-item"
                    v-for="item in props.listItems" :key="item.id">
                    <div class="column-board__list-box">
                        <p class="list-item__id">
                            <b>ID:</b> {{ item.id }}
                        </p>
                        <p class="list-item__text">
                            {{ item.text }}
                        </p>
                        <button type="button" @click="deleteListItem(item, store.board[props.stateIndex].cardList)"
                            class="list-item__button">X</button>
                    </div>
                    <div class="slot opacity" v-if="state.check === item.id">

                    </div>
                </li>
                <li class="slot opacity" v-if="props.listItems.length === 0 && !state.textareaVisible">

                </li>

            </ul>
            <div class="column-board-text" v-if="state.textareaVisible">
                <textarea name="card-text" :id="color" cols="30" rows="10" v-model="state.textareaValue"
                    @input="() => console.log(state.textareaValue)"></textarea>
                <div class="card-text__buttons" v-if="state.textareaValue.length > 0">
                    <button class="active-button" type="button" @click="addCard()">
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
import { useAuthStore } from '../store/authStore'

const store = useBoardStore()
const authStore = useAuthStore()

interface StateColumn {
    textareaVisible: boolean,
    textareaValue: string,
    counter: number,
    id: string | any,
    check: any
}

interface ListItem {
    id: string,
    text: string,
    sec_num: number
}

interface DefaultProps<T> {
    ws: any,
    header: string,
    color: string,
    listItems: T[],
    stateIndex: number
}
const props = defineProps<DefaultProps<ListItem>>();




const state = reactive<StateColumn>({
    textareaVisible: false,
    textareaValue: '',
    counter: 0,
    id: props.header.toLowerCase().split(" ").join('_') + '#' + Date.now(),
    check: false
})

function textareaOn() {
    state.textareaVisible = !state.textareaVisible
    state.textareaValue = ''
}


function dropEvent(e: DragEvent, row: any) {
    let date = Math.floor(-(Date.now()))
    state.check = false
    if (Date.now() < store.expToken * 1000) {
        store.updateCard(store.dragObject.id, row, store.dragObject.text)
        store.getCards()
        store.webSocketFunc(store.dragObject.id, store.dragObject.row, date, row, date + 1, props.ws)
    }

    if (Date.now() >= store.expToken * 1000) {
        authStore.refreshToken(localStorage.getItem('refresh'))
        store.updateCard(store.dragObject.id, row, store.dragObject.text)
        store.getCards()
        store.webSocketFunc(store.dragObject.id, store.dragObject.row, date, row, date + 1, props.ws)
    }

}

function dragEvent(e: DragEvent, item: any, row: any) {
    e.dataTransfer!.dropEffect = 'move'
    e.dataTransfer!.effectAllowed = 'move'
    store.dragObject.id = item.id
    store.dragObject.text = item.text
    store.dragObject.row = row
    e.dataTransfer!.setData('itemId', item.id.toString())

    if (Date.now() >= store.expToken * 1000) {
        authStore.refreshToken(localStorage.getItem('refresh'))
    }


}

function checkSLot() {
    // console.log(store.dragObject.dragStart)
    // if(store.dragObject.dragStart){
    //     state.check = true
    //     // console.log(state.check)
    // } else {
    //     state.check = false
    // }
}

function addCard() {
    // store.addCard(store.board[props.stateIndex], { id: state.id, text: state.textareaValue })
    store.createCard(props.stateIndex, state.textareaValue)
    textareaOn()
    generateID()

}

function generateID() {
    state.id = props.header.toLowerCase().split(" ").join('_') + '#' + Date.now()

}


function deleteListItem(item: any, array: any) {
    if (array.find((itemList: any) => itemList.id === item.id)) {
        array.splice(array.indexOf(item), 1)
    }
    store.deleteCard(item.id)
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

        @media(max-width:1073px) {
            font-size: 20px;
        }

        @media(max-width:917px) {
            font-size: 18px;
        }
    }

    &__list {
        display: grid;
        gap: 16px;


        .slot {
            min-height: 100px;
            background: #929194;
            pointer-events: none;

            &.opacity {
                opacity: .1;
            }
        }

        &-item {
            gap: 8px;
            display: flex;
            flex-direction: column;

            .column-board__list-box {
                pointer-events: none;
                background: #1f1f21;
                color: #929194;
                padding: 16px 8px;

                .list-item__id {
                    b {
                        color: #e8edee;
                    }
                }

                .list-item__text {
                    margin-top: 8px;
                }

                button.list-item__button {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    margin-top: 0;
                    pointer-events: all;
                }
            }

            font-size: 14px;
            position: relative;


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