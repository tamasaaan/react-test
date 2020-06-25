import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiBottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyles = makeStyles({
    root: {},
})

export function BottomNavigation() {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    return (
        <MuiBottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
                console.log(event)
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </MuiBottomNavigation>
    )
}
