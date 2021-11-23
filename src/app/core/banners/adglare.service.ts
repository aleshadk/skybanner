import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdglareCreative, IAdglareResponse } from './banner.interface';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdglareService {

  constructor(private httpClient: HttpClient) { }

  public getCreativeByPlacement(placementId: string): Observable<AdglareCreative> {
    return this.httpClient.get<IAdglareResponse>(`http://skyeng.engine.adglare.net/?${placementId}`).pipe(
      tap(data => console.log(data)),
      map(data => data.response.campaigns[0])
    );
  }
}
