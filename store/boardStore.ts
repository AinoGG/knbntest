import { defineStore } from 'pinia'

interface Board {
    board: Object[],
    textArea: string
}



// email: "ryadomgg@gmail.com"
// password: "n3wT3stp4SS"
// username: "testUser"

export const useBoardStore = defineStore('board', {
    state: (): Board => {
        return {
            board: [
                {
                    column: 0,
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
                    column: 0,
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
                    column: 0,
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
                    column: 0,
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
        // async registration(username: string, useremail: string, password: string) {
        //     await $fetch(`${this.baseUrl}users/create/`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: {
        //             username: username,
        //             email: useremail,
        //             password: password
        //         }
        //     }).then((res: any) => this.userForm = res.username)
        //         .catch(Error => {
        //             alert(Error)
        //         })
        // },

    }
})
