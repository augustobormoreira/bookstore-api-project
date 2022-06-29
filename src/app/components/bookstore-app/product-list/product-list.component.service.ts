import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Book } from "./model/Book";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class BookService {
    private url : string = "https://sheet.best/api/sheets/3eafc754-546b-4113-b9c3-435179682f0d";

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private httpClient: HttpClient){}
    
    getBook(): Observable<Book[]>{
        return this.httpClient.get<Book[]>(this.url);
    }
}