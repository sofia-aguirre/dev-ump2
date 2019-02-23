import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  API_URL = 'http://localhost:4000/role';

  constructor(private http: HttpClient) { }

  addRole(roleId, roleName, perm1, perm2, perm3, perm4, perm5, perm6 ) {
    const obj = {
      roleId: roleId,
      roleName: roleName,
      perm1: perm1,
      perm2: perm2,
      perm3: perm3,
      perm4: perm4,
      perm5: perm5,
      perm6: perm6,
    };
    return this
    .http
    .post(`${this.API_URL}/add`, obj)
        // .subscribe(res => console.log('Done'));
  }

  getRoles() {
    return this
          .http
          .get(`${this.API_URL}`);
  }

  detailRole(id) {
    return this
            .http
            .get(`${this.API_URL}/detail/${id}`);
    }

  editRole(id) {
    return this
            .http
            .get(`${this.API_URL}/detail/${id}/edit`);
    }

  updateRole(roleId, roleName, perm1, perm2, perm3, perm4, perm5, perm6, id) {
    const obj = {
      roleId: roleId,
      roleName: roleName,
      perm1: perm1,
      perm2: perm2,
      perm3: perm3,
      perm4: perm4,
      perm5: perm5,
      perm6: perm6,
      };
      return this
      .http
      .post(`${this.API_URL}/update/${id}`, obj)
      // .subscribe(res => console.log('Done'));
  }

  deleteRole(id) {
    return this
              .http
              .get(`${this.API_URL}/delete/${id}`);
  }
}