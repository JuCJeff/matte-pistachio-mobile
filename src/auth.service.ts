import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor( public http: Http) {
    }

    getBaseUrl(){
        return "http://localhost:3000";
      }

    getMe(callback) {
        this.http
            .get("https://matte-pistachio-api.herokuapp.com//me?jwt=" + localStorage.getItem("TOKEN"))
            .subscribe(
                result => {
                    var responseJson = result.json();
                    callback(null, responseJson);
                },

                error => {
                    callback(error);
                }
            );
    }

    login(username: string, password: string, callback: Function) {
        this.http
            .post("https://matte-pistachio-api.herokuapp.com//login", {
                username: username,
                password: password
            })
            .subscribe(
                result => {
                    var responseJson = result.json();

                    //Store the token in local storage
                    localStorage.setItem("TOKEN", responseJson.token);
                    callback();
                },

                error => {
                    callback(error);
                }
            );
    }

    logout() {
        localStorage.clear();
    }
}