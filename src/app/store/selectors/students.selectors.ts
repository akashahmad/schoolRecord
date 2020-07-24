import { State } from '../reducers/students.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
const getStudentFeatureState=createFeatureSelector<State>('studentsState')
export const getStudent=createSelector(
  getStudentFeatureState,
  state=>state.students
)
export const getError=createSelector(
  getStudentFeatureState,
  state=>state.students
)
