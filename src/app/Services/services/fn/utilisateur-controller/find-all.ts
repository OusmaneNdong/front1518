/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UtilisateurDto } from '../../models/utilisateur-dto';

export interface FindAll$Params {
}

export function findAll(http: HttpClient, rootUrl: string, params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UtilisateurDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UtilisateurDto>>;
    })
  );
}

findAll.PATH = '/api/utilisateur/getUtilisateur';
