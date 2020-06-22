import { LOAD_BMI_STAFFS } from 'page/bmi/constant/LOAD_BMI_STAFFS'
import {
  AddBmiStaffForm,
  BmiContextActionType,
  BmiContextActionTypeEnum,
  BmiContextState,
  BmiStaff,
} from 'page/bmi/models/BmiContextModel'

function error(str: string) {
  alert(str)
}

function isValidAddStaff(form: AddBmiStaffForm | undefined): boolean {
  if (
    form?.name === undefined ||
    form?.age === undefined ||
    form?.height === undefined ||
    form?.weight === undefined ||
    form?.name === '' ||
    form?.age === '' ||
    form?.height === '' ||
    form?.weight === ''
  ) {
    error('すべて入力してください。')
    return false
  }
  return true
}

function convertToBmiStaff(form: AddBmiStaffForm): BmiStaff {
  if (
    isValidAddStaff(form) &&
    form.weight !== undefined &&
    form.height !== undefined
  ) {
    const bmi: number = parseInt(form.weight) / parseInt(form.height) ** 2
    return {
      name: form?.name || '',
      age: form?.age || '',
      height: form?.height || '',
      weight: form?.weight || '',
      bmi: bmi,
    }
  }
  throw error('すべて入力してください')
}

export const bmiReducer = (
  state: BmiContextState,
  action: BmiContextActionType,
): BmiContextState => {
  switch (action.type) {
    // staffs
    case BmiContextActionTypeEnum.LOAD_STAFFS:
      return { staffs: LOAD_BMI_STAFFS }
    case BmiContextActionTypeEnum.DELETE_STAFF:
      return { staffs: action.payload.staffs }
    // form
    case BmiContextActionTypeEnum.UPDATE_FORM:
      return { ...state, form: action.payload.form }
    case BmiContextActionTypeEnum.ADD_STAFF:
      const newStaff = action.payload.form
      if (!isValidAddStaff(newStaff)) return state
      if (newStaff === undefined) return state
      const convertedStaff = convertToBmiStaff(newStaff)
      const staffs: Array<BmiStaff> = state.staffs || []
      const newStaffs = staffs.concat(convertedStaff)
      return { ...state, staffs: newStaffs }
    default:
      return state
  }
}
