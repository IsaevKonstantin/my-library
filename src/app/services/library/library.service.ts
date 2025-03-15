import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap, tap } from 'rxjs';
import { Library, LibraryData, Version, VersionData } from 'src/app/models/library/library.model';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {

  private apiUrl = 'https://apidata.mos.ru';
  private apiKey = '9954b3e4-4262-4e76-afc9-c3674a97b5e9';

  constructor(private http: HttpClient) {}

  getApiVersion(): Observable<string> {
    return this.http.get<VersionData>(`${this.apiUrl}/version?api_key=${this.apiKey}`)
      .pipe(
        catchError((err) => {
          console.error('Ошибка при обращении к серверу', err);
          return of();
        }),
        map((response) => new Version(response).version),
      );
  }

  getLibraries(param: string, version: string): Observable<Library[]> {
    return this.http.get<LibraryData[]>(`${this.apiUrl}/${version}/datasets/526/rows?${param}api_key=${this.apiKey}`)
      .pipe(
        catchError((err) => {
          console.error('Ошибка при загрузке данных', err);
          return of();
        }),
        map((response) => response.map((item: LibraryData) => new Library(item))),
      );
  }

  getData(filter: string): Observable<Library[]> {
    return this.getApiVersion().pipe(
      switchMap((response: string) => {
        const filterParam: string = `$filter=Cells/FullName eq '${filter}'&`;
        return this.getLibraries(filterParam, response);
      }),
    );
  }
}