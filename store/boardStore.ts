import { defineStore } from 'pinia'

interface BoardArray<T> {
    baseUrl: string,
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
            baseUrl: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
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
            textArea: ''
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
                res.forEach((resItem: any) => {
                    this.board[resItem.row].cardList.push({ id: resItem.id, text: resItem.text })                    
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
            }).then((res:any) => {
                this.board[row].cardList.push({ id: res.id, text: res.text })
            })
        },
        async deleteCard(id:string) {
            await $fetch(`${this.baseUrl}cards/${id}/`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('token')}`
                },                
            }).then((res:any) => console.log(res))
        }
    }
})
