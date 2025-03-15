import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { Library } from 'src/app/library/models/library.model';

@Component({
  selector: 'app-library-search',
  templateUrl: './library-search.component.html',
  styleUrls: ['./library-search.component.scss']
})
export class LibrarySearchComponent implements OnInit {
  public libraries: Library[] = [];
  public isLoading: boolean = true;
  public form: FormGroup;
  public selectedLibrary: Library | null = null;

  constructor(
    private _libraryService: LibraryService, 
    private _fb: FormBuilder, 
  ) {
    this.form = this._fb.group({
      inputValue: [''],
    })
  }

  ngOnInit(): void {
    this.isLoading = false;
  }

  public searchLibraries() {
    this.isLoading = true;
    this.libraries = [];
    this.selectedLibrary = null;
    this._libraryService.getData(this.form.get('inputValue')?.value).pipe(take(1))
      .subscribe((data: Library[]) => {
        this.isLoading = false;
        this.libraries = data;
      });
  }

  public highlightText(text: string): string {
    const searchTerm = this.form.get('inputValue')?.value.trim();
    if (!searchTerm) {
      return text;
    }
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  public selectLibrary(library: Library): void {
    this.selectedLibrary && this.selectedLibrary.number === library.number ? 
      this.selectedLibrary = null : this.selectedLibrary = library;
  }
}