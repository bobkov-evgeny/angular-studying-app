import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class TasksService {
  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get('http://localhost:8000/allTasks')
      .pipe(map((data:any) => data.data))
  }

  createTask(body:any): Observable<any> {
      return this.http.post('http://localhost:8000/createTask', body)
        .pipe(map((data:any) => data.data))
  }

}
