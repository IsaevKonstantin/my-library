import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { Library, LibraryData, Version, VersionData } from 'src/app/library/models/library.model';

@Injectable()
export class LibraryService {
  private _apiUrl: string = 'https://apidata.mos.ru';
  private _apiKey: string = '9954b3e4-4262-4e76-afc9-c3674a97b5e9';

  constructor(private http: HttpClient) {}

  private getApiVersion(): Observable<string> {
    return this.http.get<VersionData>(`${this._apiUrl}/version?api_key=${this._apiKey}`)
      .pipe(
        catchError((err) => {
          console.error('Ошибка при обращении к серверу', err);
          return of();
        }),
        map((response) => new Version(response).version),
      );
  }

  private getLibraries(param: string, version: string): Observable<Library[]> {
    return this.http.get<LibraryData[]>(`${this._apiUrl}/${version}/datasets/526/rows?${param}api_key=${this._apiKey}`)
      .pipe(
        catchError((err) => {
          console.error('Ошибка при загрузке данных', err);
          return of();
        }),
        map((response) => response.map((item: LibraryData) => new Library(item))),
      );
  }

  public getData(filter: string): Observable<Library[]> {
    return this.getApiVersion().pipe(
      switchMap((response: string) => {
        const filterParam: string = `$filter=Cells/FullName eq '${filter}'&`;
        return this.getLibraries(filterParam, response);
      }),
    );
  }
}