/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DemandeDto } from '../../models/demande-dto';

export interface GetdemandeCours$Params {
}

export function getdemandeCours(http: HttpClient, rootUrl: string, params?: GetdemandeCours$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DemandeDto>>> {
  const rb = new RequestBuilder(rootUrl, getdemandeCours.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DemandeDto>>;
    })
  );
}

getdemandeCours.PATH = '/api/dashbord/demande/total-cours';
