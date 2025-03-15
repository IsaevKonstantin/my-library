import { Component, Input } from '@angular/core';
import { Library } from 'src/app/library/models/library.model';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent {
  @Input()
  public library!: Library;

  public formatFieldName(fieldName: string): string {
    const fieldMap: { [key: string]: string } = {
      commonName: 'Название',
      webSite: 'Сайт',
      chiefName: 'Руководитель',
      chiefPosition: 'Должность',
      email: 'Email',
      publicPhone: 'Телефоны',
    };
    return fieldMap[fieldName] || fieldName;
  }
}