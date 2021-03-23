import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(private http: HttpClient) {

  }

  loadAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/api/courses")
      .pipe(
        map((res: any) => res.payload),
        shareReplay()
      );
  }

  saveCourse(courseid: string, changes: Partial<Course>): Observable<any> {
    return this.http.put(`/api/courses/${courseid}`, changes)
      .pipe(
        shareReplay()
      )
  }
}
