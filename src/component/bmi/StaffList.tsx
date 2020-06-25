import Box from '@material-ui/core/Box'
import { BmiContext } from 'App'
import { StaffCard } from 'component/bmi/StaffCard'
import React from 'react'

export const StaffList = () => {
    // const classes = useStyles()
    const { state } = React.useContext(BmiContext)

    return (
        <Box mt={3}>
            {state.staffs?.map((s, i) => {
                return (
                    <Box key={i} mt={i === 0 ? 0 : 2}>
                        <StaffCard key={i} staff={s} index={i} />
                    </Box>
                )
            })}
        </Box>
    )
}
