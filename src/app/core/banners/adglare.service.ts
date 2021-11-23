import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdglareCreative, IAdglareResponse } from './banner.interface';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdglareService {
  public params = {
    olympiadResult: undefined as number | undefined,
    userClass: undefined as number | undefined
  }

  constructor(private httpClient: HttpClient) { }

  public getCreativeByPlacement(placementId: string): Observable<AdglareCreative> {
    const params = Object.entries(this.params)
      .filter(z => z[1] != undefined)
      .map(z => 'kv_' + z[0].toLowerCase() + '=' + z[1]);

    const queryParams = params.length > 0 ? '&' + params.join('&') : '';

    return this.httpClient.get<IAdglareResponse>(`https://skyeng.engine.adglare.net/?${placementId}${queryParams}`).pipe(
      tap(data => console.log(data)),
      map(data => data.response.campaigns[0])
    );
  }
}
