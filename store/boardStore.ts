import { defineStore } from 'pinia'

interface BoardArray<T> {
    baseUrl: string,
    wssUrl: string,
    expToken: number,
    board: T[],
    textArea: string,
    dragObject: any
}

interface CardList {
    id: string,
    text: string,
    sec_num: number
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
            baseUrl: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
            wssUrl: 'wss://trello.backend.tests.nekidaem.ru/events/?token=',
            expToken: 0,
            board: [
                {
                    column: 0,
                    header: 'HOLD ON',
                    color: '#ea824b',
                    cardList: [


                    ]
                },
                {
                    column: 1,
                    header: 'IN PROGRESS',
                    color: '#4390bb',
                    cardList: [


                    ]
                },
                {
                    column: 2,
                    header: 'NEEDS REVIEW',
                    color: '#f1cb58',
                    cardList: [


                    ]
                },
                {
                    column: 3,
                    header: 'APPROWED',
                    color: '#52b268',
                    cardList: [


                    ]
                },
            ],
            textArea: '',
            dragObject: {
                id: '',
                text: '',
                row: ''
            }
        }
    },
    actions: {
        addCard(state: any, payload: any) {
            state.cardList.push(payload)
        },
        async getCards() {
            await $fetch(`${this.baseUrl}cards/`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },

            }).then((res: any) => {
                this.board.forEach(item => {
                    item.cardList = []
                })
                res.forEach((resItem: any) => {
                    if (!this.board[resItem.row].cardList.find(item => item.id === resItem.id)) {
                        this.board[resItem.row].cardList.push({ id: resItem.id, text: resItem.text, sec_num: resItem.sec_num })
                    }
                })


            })
        },
        async createCard(row: number, text: string) {
            await $fetch(`${this.baseUrl}cards/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },
                body: {
                    "row": row,
                    "text": text
                }
            }).then((res: any) => {
                this.board[row].cardList.push({ id: res.id, text: res.text, sec_num: res.sec_num })
            })
        },
        async deleteCard(id: string) {
            await $fetch(`${this.baseUrl}cards/${id}/`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },
            }).then((res: any) => console.log(res))
        },
        async updateCard(id: string, row: any, text: string) {
            await $fetch(`${this.baseUrl}cards/${id}/`, {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },
                body: {
                    "row": row,
                    "seq_num": -2147483648,
                    "text": text
                }
            }).then((res: any) => {
                setTimeout(() => {
                    this.getCards
                }, 1000)

            })
        },
        async getIsShuffle() {
            await $fetch(`${this.baseUrl}users/card_shuffle/`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },
            }).then((res: any) => console.log(res))
        },
        async onIsShuffle() {
            await $fetch(`${this.baseUrl}users/card_shuffle/`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },
                body: {
                    "is_shuffle_cards": true
                }
            }).then((res: any) => console.log(res))
        },
        async webSocketFunc(id: any, oldRow: any, oldSeq: any, newRow: any, newSec: any, connection: any) {

            connection.onopen = (event: any) => {
                console.log(event)
            }
            connection.send(
                JSON.stringify(
                    {
                        "card_id": id,
                        "old": {
                            "row": String(oldRow),
                            "seq_num": oldSeq
                        },
                        "new": {
                            "row": String(newRow),
                            "seq_num": newSec
                        }
                    }
                )
            )
        },
    }
})
