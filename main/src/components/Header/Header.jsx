import React from 'react'
import {Autocomlete} from '@react-google-maps/api';
import { AppBar ,Toolbar,Typography ,InputBase,Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'


const Header = () => {
    const classes = useStyles()
    return (
        <>
        <AppBar position="static" >
            <Toolbar className={classes.toolbar}>
                <Typography variant='h4' className={classes.title} >Travel Advisor</Typography>
                <Box display="flex">
                    <Typography variant='h5' className={classes.title} >
                            Explore new places
                    </Typography>
                    {/* <Autocomlete> */}
                    <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
                    {/* </Autocomlete> */}

                </Box>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Header
