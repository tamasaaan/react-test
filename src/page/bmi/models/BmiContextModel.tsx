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
    // グローバルステートの更新を行わせる指示の型定義
    type: BmiContextActionTypeEnum
    payload: BmiContextState
}

export enum BmiContextActionTypeEnum {
    ADD_STAFF = 'ADD_STAFF',
    LOAD_STAFFS = 'LOAD_STAFFS',
    DELETE_STAFF = 'DELETE_STAFF',
    UPDATE_FORM = 'UPDATE_FORM',
}
