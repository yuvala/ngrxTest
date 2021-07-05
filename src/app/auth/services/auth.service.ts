import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.Interface";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private basePAth = '';
    constructor(private http: HttpClient) { }
    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/api/users';
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map((res: AuthResponseInterface) => res.user));
    }
}
