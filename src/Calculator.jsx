import { AppBar, Box, Button, Grid, Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import './App.css'


const useStyles = makeStyles(theme=>({

box:{
    // border:'1px solid red',
    height:'100vh',
    width:'100vw',
    backgroundColor:'black'
},
toolbar:{
    display:'flex',
    justifyContent:'space-between'
},
toolbarDiv:{
},
text_heading:{
    fontSize:'30px',
    fontWeight:'800'
},
container:{
    display:'flex',
    justifyContent:'center'
},
mainParent:{
    marginTop:theme.spacing(10),
    width:'100%',
    // border:'1px solid blue',
},
gridContainer:{
    display:'flex',
    justifyContent:'center'
},
result:{
    height:theme.spacing(12),
    border:'1px solid red',
    [theme.breakpoints.down('sm')]:{
        marginBottom:theme.spacing(5)
    },
    marginBottom:theme.spacing(0),
    backgroundColor:'white',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    fontSize:'25px',
    flexWrap:"wrap",
    fontWeight:'800',
    paddingRight:theme.spacing(1),
    paddingLeft:theme.spacing(1)

},
row1:{
    display:'flex',
    [theme.breakpoints.down('sm')]:{
        marginBottom:theme.spacing(2)
    },
    marginBottom:theme.spacing(1),
    justifyContent:'space-between'
    // fontSize:'40px'
},
row2:{
    display:'flex',
    [theme.breakpoints.down('sm')]:{
        marginBottom:theme.spacing(2)
    },
    marginBottom:theme.spacing(1),
    justifyContent:'space-between'

},
row3:{
    display:'flex',
    [theme.breakpoints.down('sm')]:{
        marginBottom:theme.spacing(2)
    },
    marginBottom:theme.spacing(1),
    justifyContent:'space-between'
},
row4:{
    display:'flex',
    [theme.breakpoints.down('sm')]:{
        marginBottom:theme.spacing(2)
    },
    marginBottom:theme.spacing(1),
    justifyContent:'space-between'
}

}))

const Calculator = () => {
    const [data,setData]= useState('');
    const [btntxt,setBtntxt]= useState(true);
    const [greenBtn,setGreenBtn]= useState(true);
    const clickListner =(e)=>{
        let get_digit_from_key = e.target.name ;
        setData(data.concat(get_digit_from_key));
        setGreenBtn(false)
    };
    const classes = useStyles();
    const clearScreen =()=>{
        setData('');
        setBtntxt(true);
        
    };
    const deleteLastItem =()=>{
        setData(data.slice(0,data.length-1))
    };
    const equalButton =()=>{
        setData(eval(data)+ 0);
        setBtntxt(false);
        setGreenBtn(true);
    };
    // const redBtn =()=>{
        
    // }
  return (
    <>
        <Box className={classes.box}>
        <AppBar >
            <Toolbar  className={classes.toolbar}>
               
                    <div className={classes.text_heading}>
                        Calculator
                    </div>
                    <div>
                        <CalculateIcon className='App-logo' sx={{fontSize:'50px'}} />
                    </div>
            </Toolbar>
        </AppBar>
            <Grid container className={classes.gridContainer}>
                <Grid item xs={12} sm={4} >
                        <div className={classes.mainParent}>
                            <div   className={classes.result}><div>{data?data:'Welcome Dear'}</div></div>
                            <div className={classes.row1}>
                                {btntxt?<Button  onClick={clearScreen} variant='contained'   sx={{height:'70px',width:'48%', borderRadius:'15px'}}>Clear Screen</Button>
                                :
                                <Button  onClick={clearScreen } variant='contained'   sx={{height:'70px',backgroundColor:'red' ,width:'48%', borderRadius:'15px'}}>Clear Screen</Button>}
                                <Button onClick={deleteLastItem} variant='contained' sx={{height:'70px',width:'23%',borderRadius:'15px'}}>Delete</Button>
                                <Button onClick={clickListner} name="+" variant='contained' sx={{height:'70px',width:'23%',borderRadius:'15px'}}>+</Button>
                            </div>
                            <div className={classes.row2}>
                                <Button onClick={clickListner} name="7" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>7</Button>
                                <Button onClick={clickListner} name="8" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>8</Button>
                                <Button onClick={clickListner} name="9" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>9</Button>
                                <Button onClick={clickListner} name="-" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'100%'}}>-</Button>
                            </div>
                            <div className={classes.row3}>
                                <Button onClick={clickListner} name="4" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>4</Button>
                                <Button onClick={clickListner} name="5" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>5</Button>
                                <Button onClick={clickListner} name="6" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>5</Button>
                                <Button onClick={clickListner} name="*" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'100%'}}>x</Button>
                            </div>
                            <div className={classes.row4}>
                                <Button onClick={clickListner} name="1" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>1</Button>
                                <Button onClick={clickListner} name="2" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>2</Button>
                                <Button onClick={clickListner} name="3" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>3</Button>
                                <Button onClick={clickListner} name="/" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'100%'}}>/</Button>
                            </div>
                            <div className={classes.row3}>
                                <Button onClick={clickListner} name="0" variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>0</Button>
                                <Button onClick={clickListner} name="." variant='contained' sx={{height:'70px',width:'24%',borderRadius:'15px'}}>.</Button>
                                {greenBtn?<Button onClick={equalButton} variant='contained' sx={{height:'70px',width:'48%',borderRadius:'100%'}}>=</Button>
                                :
                                <Button onClick={equalButton} variant='contained' sx={{height:'70px',backgroundColor:'green' ,width:'48%',borderRadius:'100%'}}>=</Button>
                                }
                                
                            </div>
                        </div>
                </Grid>
            </Grid>

        </Box>
    </>
  )
}

export default Calculator