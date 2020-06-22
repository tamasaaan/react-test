import { Card, createStyles, Theme } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions/CardActions'
import CardContent from '@material-ui/core/CardContent'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import { BmiContext } from 'App'
import {
  BmiContextActionTypeEnum,
  BmiStaff,
} from 'page/bmi/models/BmiContextModel'
import React from 'react'

interface StaffCardProps {
  staff: BmiStaff
  index: number
}

export function StaffCard(props: StaffCardProps) {
  const classes = useStyles()
  const { state, dispatch } = React.useContext(BmiContext)

  const handleDeleteStaff = (i: number) => {
    if (!state.staffs) return
    const copied = state.staffs.slice()
    copied.splice(i, 1)
    dispatch({
      type: BmiContextActionTypeEnum.DELETE_STAFF,
      payload: { staffs: copied },
    })
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.staff.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {`年齢:${props.staff.age}`}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {`身長:${props.staff.height}`}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {`体重:${props.staff.weight}`}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {`BMI:${props.staff.bmi}`}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleDeleteStaff(props.index)}
        >
          削除
        </Button>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
)
