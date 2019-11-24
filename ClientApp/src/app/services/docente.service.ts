import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Docente } from '../Models/docente';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  /** POST: add a new docente to the server */
  add(docente: Docente): Observable<Docente> {

    return this.http.post<Docente>(this.baseUrl + 'api/Docente', docente, httpOptions).pipe(
      tap((newDocente: Docente) => this.log(`added newDocente w/ id=${newDocente.id}`)),
      catchError(this.handleError<Docente>('addDocente'))
    );
  }

   /** GET heroes from the server */
  getAll(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/Docente')
      .pipe(
        tap(_ => console.log('fetched Docente')),
        catchError(this.handleError<Docente[]>('getDocente', []))
      );
  }

  get(id: number): Observable<Docente> {
    const url = `${this.baseUrl + 'api/Docente'}/${id}`;
    return this.http.get<Docente>(url).pipe(
      tap(_ => this.log(`fetched docente id=${id}`)),
      catchError(this.handleError<Docente>(`Docente id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  update (docente: Docente): Observable<any> {
    const url = `${this.baseUrl + 'api/Docente'}/${docente.id}`;
    return this.http.put(url, docente, httpOptions).pipe(
      tap(_ => this.log(`updated docente id=${docente.id}`)),
      catchError(this.handleError<any>('Docente'))
    );
  }


  /** DELETE: delete the hero from the server */
  delete (Docente: Docente | number): Observable<Docente> {
    const id = typeof Docente === 'number' ? Docente : Docente.id;
    const url = `${this.baseUrl + 'api/Docente'}/${id}`;

    return this.http.delete<Docente>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Docente id=${id}`)),
      catchError(this.handleError<Docente>('deleteDocente'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
     alert(message);
    // this.messageService.add(`HeroService: ${message}`);
  }
}
