import { defineStore } from 'pinia'

interface Auth {
    auth: boolean,
    userForm: string,
    passForm: string,
    emailForm: string,
    isAuth: any,
    baseUrl: string
}



// email: "ryadomgg@gmail.com"
// password: "n3wT3stp4SS"
// username: "testUser"

export const useAuthStore = defineStore('auth', {
    state: (): Auth => {
        return {
            auth: true,
            userForm: '',
            passForm: '',
            emailForm: '',
            isAuth: '',
            baseUrl: 'https://trello.backend.tests.nekidaem.ru/api/v1/'
        }
    },
    actions: {
        async registration(username: string, useremail: string, password: string) {
            await $fetch(`${this.baseUrl}users/create/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                    username: username,
                    email: useremail,
                    password: password
                }
            }).then((res:any) => this.userForm = res.username)
                .catch(Error => {
                    alert(Error)
                })
        },
        async login(username: string, password: string) {
            await $fetch(`${this.baseUrl}users/token/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                    username: username,
                    password: password
                }
            }).then((res: any) => {
                this.isAuth = res.access
                this.auth = true
                if (process.browser) {
                    localStorage.setItem('token', res.access)
                    localStorage.setItem('refresh', res.refresh)
                    console.log(this.auth)
                }
            })
                .catch(Error => {
                    alert(Error)
                })
        },
        async refreshToken(token: any) {
            await $fetch(`${this.baseUrl}users/token/refresh/`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: {
                   "refresh": token
                }
            }).then((res:any) => {
                this.isAuth = res.access
                this.auth = true
                if (process.browser) {
                    localStorage.setItem('token', res.access)
                }
            })               
        },
    }
})
