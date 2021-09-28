// import {Injectable} from "@angular/core";
// import {HttpClient} from "@angular/common/http";
// import {
//   Observable
// } from "rxjs";
// import {map} from "rxjs/operators";
//
// @Injectable()
// export class DataService {
//   private data:string[] = ['test', 'education', 'apple'];
//
//   constructor(private http: HttpClient) {}
//
//   getData():Observable<User[]> {
//     return this.http.get('assets/users.json').pipe(map((data: any) => {
//       const {userList} = data;
//       return userList.map((user:any) => {
//         console.log(user.userName, user.userAge);
//         return new User(user.userName, user.userAge);
//       })
//     }))
//   }
//
// }
//
// export class User {
//   constructor(public name:string, public age:number) {}
// }
import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class DataService {
  private data:string[] = ['test', 'education', 'apple'];

  constructor(private logService: LogService) {}


  getData():string[] {
    this.logService.write('get data method')
    return this.data;
  }

  addData(name: string) {
    this.logService.write('add new data method')
    this.data.push(name)
  }
}
