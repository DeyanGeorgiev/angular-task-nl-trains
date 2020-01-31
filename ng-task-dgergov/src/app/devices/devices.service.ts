import { IDevices } from './devices.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOCAL_HOST } from './../../common/constants';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

    constructor(private httpClient: HttpClient) { }

    public getDevicesData(): Observable<IDevices[]> {
        return this.httpClient.get<any>(LOCAL_HOST, { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*') });
    }
}
