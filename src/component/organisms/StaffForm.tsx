import { Card, Theme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CardContent from '@material-ui/core/CardContent'
import makeStyles from '@material-ui/core/styles/makeStyles'
import TextField from '@material-ui/core/TextField'
import { BmiContext } from 'App'
import { INIT_ADD_FORM } from 'page/bmi/constant/INIT_ADD_FORM'
import {
  AddBmiStaffForm,
  BmiContextActionTypeEnum,
} from 'page/bmi/models/BmiContextModel'
import React from 'react'

export const StaffForm = () => {
  const classes = useStyles()
  const { state, dispatch } = React.useContext(BmiContext)

  function getForm(): AddBmiStaffForm {
    if (state.form) return state.form
    return INIT_ADD_FORM
  }

  const handleChangeName = (e: string) => {
    let form = getForm()
    form.name = e
    dispatch({
      type: BmiContextActionTypeEnum.UPDATE_FORM,
      payload: { form: { ...form } },
    })
  }

  const handleChangeAge = (e: string) => {
    let form = getForm()
    form.age = e
    dispatch({
      type: BmiContextActionTypeEnum.UPDATE_FORM,
      payload: { form: { ...form } },
    })
  }

  const handleChangeHeight = (e: string) => {
    let form = getForm()
    form.height = e
    dispatch({
      type: BmiContextActionTypeEnum.UPDATE_FORM,
      payload: { form: { ...form } },
    })
  }

  const handleChangeWeight = (e: string) => {
    let form = getForm()
    form.weight = e
    dispatch({
      type: BmiContextActionTypeEnum.UPDATE_FORM,
      payload: { form: { ...form } },
    })
  }

  const handleAddButtonClick = () => {
    dispatch({ type: BmiContextActionTypeEnum.ADD_STAFF, payload: state })
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <TextField
          label="名前"
          name="name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          onChange={(e) => handleChangeName(e.currentTarget.value)}
          value={state.form?.name || ''}
        />

        <TextField
          label="年齢"
          name="name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          type="number"
          onChange={(e) => handleChangeAge(e.currentTarget.value)}
          value={state.form?.age || ''}
        />

        <TextField
          label="身長"
          name="name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          type="number"
          onChange={(e) => handleChangeHeight(e.currentTarget.value)}
          value={state.form?.height || ''}
        />

        <TextField
          label="体重"
          name="name"
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          type="number"
          onChange={(e) => handleChangeWeight(e.currentTarget.value)}
          value={state.form?.weight || ''}
        />

        <Box mt={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddButtonClick}
            fullWidth
          >
            追加
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: '25ch',
    // },
  },
  button: {
    marginTop: theme.spacing(1),
  },
}))
