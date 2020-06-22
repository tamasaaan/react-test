import { Theme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { BmiContext } from 'App'
import { BottomNavigation } from 'component/organisms/BottomNavigation'
import { TopNavigation } from 'component/organisms/TopNavigation'
import { StaffForm } from 'component/organisms/StaffForm'
import { StaffCard } from 'component/organisms/StaffCard'
import { BmiContextActionTypeEnum } from 'page/bmi/models/BmiContextModel'
import React, { useCallback } from 'react'

export const BmiListPage = () => {
  const { state, dispatch } = React.useContext(BmiContext)
  // const isFirstRender = useRef(true);
  const classes = useStyles()

  const initFetch = useCallback(() => {
    console.log('initFetch')
    dispatch({ type: BmiContextActionTypeEnum.LOAD_STAFFS })
  }, [dispatch])

  React.useEffect(() => {
    console.log('effect')
    initFetch()
  }, [initFetch])

  return (
    <div className={classes.root}>
      <TopNavigation />

      <Container className={classes.container} maxWidth="sm">
        {/* 入力 */}
        <StaffForm />

        {/* 一覧 */}
        <Box mt={3}>
          {state.staffs?.map((s, i) => {
            return (
              <Box mt={i === 0 ? 0 : 2}>
                <StaffCard key={i} staff={s} index={i} />
              </Box>
            )
          })}
        </Box>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Container>

      <BottomNavigation />
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  container: {
    marginTop: theme.spacing(4),
  },
  content: {
    padding: theme.spacing(40),
  },
}))
