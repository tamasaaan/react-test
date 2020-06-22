import React from 'react'

export interface BmiContextType {
  state: BmiContextState
  dispatch: React.Dispatch<any>
}

export interface BmiContextState {
  staffs?: Array<BmiStaff>
  form?: AddBmiStaffForm
}

export interface BmiStaff {
  name: string
  age: string
  height: string
  weight: string
  bmi: number
}

export interface AddBmiStaffForm {
  name?: string
  age?: string
  height?: string
  weight?: string
  bmi?: number
}

export interface BmiContextActionType {
  // グローバルステイトの更新を行わせる指示の型定義
  type: BmiContextActionTypeEnum
  payload: BmiContextState
}

export enum BmiContextActionTypeEnum {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  DOUBLE_INCRE = 'DOUBLE_INCRE',
  RESET = 'RESET',
  ADD_STAFF = 'ADD_STAFF',
  LOAD_STAFFS = 'LOAD_STAFFS',
  DELETE_STAFF = 'DELETE_STAFF',
  ADD_FORM = 'ADD_FORM',
  UPDATE_FORM = 'UPDATE_FORM',
}
