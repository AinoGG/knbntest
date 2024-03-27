import { defineStore } from 'pinia'

interface BoardArray<T> {
    board: T[],
    textArea: string,
}

interface CardList {
    id: string,
    text: string
}

interface Board<T> {
    
    column: number,
    header: string,
    color: string,
    cardList: T[]
}


// email: "ryadomgg@gmail.com"
// password: "n3wT3stp4SS"
// username: "testUser"

export const useBoardStore = defineStore('board', {
    state: (): BoardArray<Board<CardList>> => {
        return {
            board: [
                {
                    column: 0,
                    header: 'HOLD ON',
                    color: '#ea824b',
                    cardList: [
                        {
                            id: '1',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                        },
                        {
                            id: '2',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit. asdqweq QQ dasd'
                        },
                    ]
                },
                {
                    column: 1,
                    header: 'IN PROGRESS',
                    color: '#4390bb',
                    cardList: [
                        {
                            id: '1',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                        },
                        {
                            id: '2',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit. asdqweq QQ dasd'
                        },
                    ]
                },
                {
                    column: 2,
                    header: 'NEEDS REVIEW',
                    color: '#f1cb58',
                    cardList: [
                        {
                            id: '1',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                        },
                        {
                            id: '2',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit. asdqweq QQ dasd'
                        },
                    ]
                },
                {
                    column: 3,
                    header: 'APPROWED',
                    color: '#52b268',
                    cardList: [
                        {
                            id: '1',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
                        },
                        {
                            id: '2',
                            text: '*Lorem ipsum dolor sit, amet consectetur adipisicing elit. asdqweq QQ dasd'
                        },
                    ]
                },
            ],
            textArea: ''
        }
    },
    actions: {
        addCard(state:any, payload:any) {
            state.cardList.push(payload)
        },
    }
})
