import React, { useState } from 'react'
import {Autocomplete} from '@react-google-maps/api';
import { AppBar ,Toolbar,Typography ,InputBase,Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'
import logo from '../../images/logo1.png'



const Header = ({setCoordinates}) => {
    const classes = useStyles()
    const [autoComplete , setAutoComplete] = useState(null)
    const onLoad = (autoC)=>{
        setAutoComplete(autoC)
    }
    const onPlaceChanged = ()=>{
        const lat = autoComplete.getPlace().geometry.location.lat()
        const lng = autoComplete.getPlace().geometry.location.lng();
        setCoordinates({lat,lng})
    }
    return (
        <>
        <AppBar position="static" >
            <Toolbar className={classes.toolbar}>
               <Box style={{display:"flex",justifyContent:"flex-start" ,gap:"15px"}} >
               <Typography variant='h4' className={classes.title} >Travel Advisor</Typography>
                <img width="50px" src={logo} alt="logo" />
               </Box>
                <Box display="flex">
                    <Typography variant='h5' className={classes.title} >
                            Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} >
                    <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
                    </Autocomplete>

                </Box>
            </Toolbar>
        </AppBar>
            
        </>
    )
}

export default Header
