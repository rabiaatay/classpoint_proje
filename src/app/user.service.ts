import {Injectable} from '@angular/core'

interface user{
    kullanici:string
    id:string
}

export class UserService{
    private user:user
    constructor(){
    }
    setUser(user:user){
        this.user=user;
    }

    getUsername(){
        return this.user.kullanici
    }
    getUID(){
        return this.user.id
    }
}