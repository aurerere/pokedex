import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

createApp(App).use(store).use(router).mount('#app')

export default function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function loggedIn() {
    if (!window.localStorage.getItem('token')) window.location.replace('../login')
    axios
        .get('http://localhost:444/users/me',
            { headers: {"Authorization" : `Bearer ${window.localStorage.getItem('token')}`} })
        .then((res) => {
            if (res.status < 200 || res.status >= 300) {
                if (!window.localStorage.getItem('password') || !window.localStorage.getItem('email')) {
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('password');
                    window.localStorage.removeItem('email');
                    window.location.replace('../login');
                }
                else {
                    axios
                        .post('http://localhost:444/auth', {
                            email: window.localStorage.getItem('email'),
                            password: window.localStorage.getItem('email')
                        })
                        .then((res) => {
                            if (res.status >= 200 && res.status < 300) {
                                window.localStorage.setItem('token', res.data.token);
                            }
                            else {
                                window.localStorage.removeItem('token');
                                window.localStorage.removeItem('password');
                                window.localStorage.removeItem('email');
                                window.location.replace('../login');
                            }
                        })
                        .catch(() => {
                            window.localStorage.removeItem('token');
                            window.localStorage.removeItem('password');
                            window.localStorage.removeItem('email');
                            window.location.replace('../login');
                        })
                }
            }
        })
        .catch((err) => {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('password');
            window.localStorage.removeItem('email');
            window.location.replace('../login');
        })
}