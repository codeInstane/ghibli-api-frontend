import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
//import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface ApiResult {
  status: number; 
  attached_image: any[];
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class PhotoShowroomService {

  constructor(private http: HttpClient,         
              ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getPhoto() : Observable<ApiResult> {

    // return this.http.get<ApiResult>(`${environment.fourS_8081_Url}`).pipe(
    //  retry(3), // retry a failed request up to 3 times
    //  catchError(this.handleError) // then handle the error
   // );    
    return this.http.get<ApiResult>(`${environment.apiurl.fourS_Url}`).pipe(
    retry(3), // retry a failed request up to 3 times
    catchError(this.handleError) // then handle the error
   );   
  //  return this.http.get<ApiResult>(`${environment.fourS_3001_Url}`).pipe(
  //   retry(3), // retry a failed request up to 3 times
  //   catchError(this.handleError) // then handle the error
  //  );
  }

  getPhotoDetails(id: string) :Observable<ApiResult>{
    // return this.http.get<ApiResult>(`${environment.fourS_8081_Url}/${id}`).pipe(
    //   retry(3), // retry a failed request up to 3 times
    //   catchError(this.handleError) // then handle the error
    //  );
   return this.http.get<ApiResult>(`${environment.apiurl.fourS_Url}/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
     );
    // return this.http.get<ApiResult>(`${environment.fourS_3001_Url}/${id}`).pipe(
    //   retry(3), // retry a failed request up to 3 times
    //   catchError(this.handleError) // then handle the error
    //  );
  }

  getGhibliapi() : Observable<any> {
   return this.http.get(`${environment.apiurl.baseUrl}`).pipe(
    retry(3), // retry a failed request up to 3 times
    catchError(this.handleError) // then handle the error
   );     //baseUrl: 'https://ghibliapi.herokuapp.com/films'
   //return this.http.get(`${environment.emp_Url}`);
  }

  getGhibliapiDetails(id: string) : Observable<any> {
    return this.http.get(`${environment.apiurl.baseUrl}/${id}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
     ); //baseUrl: 'https://ghibliapi.herokuapp.com/films'
  }
}
