import { Theme } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { BmiContext } from 'App'
import { StaffForm } from 'component/bmi/StaffForm'
import { StaffList } from 'component/bmi/StaffList'
import { BottomNavigation } from 'component/common/BottomNavigation'
import { TopNavigation } from 'component/common/TopNavigation'
import { BmiContextActionTypeEnum } from 'page/bmi/models/BmiContextModel'
import React from 'react'

export const BmiListPage = () => {
    const { state, dispatch } = React.useContext(BmiContext)
    const classes = useStyles()

    // const initFetch = useCallback(() => {
    //     console.log('initFetch');
    // }, []);

    React.useEffect(() => {
        console.log('effect')
        dispatch({ type: BmiContextActionTypeEnum.LOAD_STAFFS, payload: state })
        // initFetch()
    }, []) // warning

    return (
        <div className={classes.root}>
            <TopNavigation />

            <Container className={classes.container} maxWidth="sm">
                {/* 入力 */}
                <StaffForm />

                {/* 一覧 */}
                <StaffList />
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
