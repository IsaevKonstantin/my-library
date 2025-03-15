export class Library {
    fullName: string;
    objectAddress: string;
    number: number;
    commonName: string;
    webSite: string;
    chiefPosition: string;
    chiefName: string;
    email: string;
    publicPhone: string;

    constructor(data: LibraryData) {
        this.fullName = data.Cells.FullName || '';
        this.number = data.Number || 0;
        this.objectAddress = data.Cells.ObjectAddress.map((address: any) => address.Address).join(', ') || '';
        this.commonName = data.Cells.CommonName || '';
        this.webSite = data.Cells.WebSite || '';
        this.chiefPosition = data.Cells.ChiefPosition || '';
        this.chiefName = data.Cells.ChiefName || '';
        this.email = data.Cells.Email.map((email: any) => email.Email).join(', ') || '';
        this.publicPhone = data.Cells.PublicPhone.map((phone: any) => '+7 ' + phone.PublicPhone).join(', ') || '';
    }
}

export class Version {
    version: string;

    constructor(data: VersionData) {
        this.version = 'v' + data.Version;
    }
}

export interface LibraryData {
    Number: number;
    Cells: Cell;
}

export interface Cell {
    FullName: string;
    ObjectAddress: string[];
    CommonName: string;
    WebSite: string;
    ChiefPosition: string;
    ChiefName: string;
    Email: string[];
    PublicPhone: string[];
}

export interface VersionData {
    Version: number;
}
