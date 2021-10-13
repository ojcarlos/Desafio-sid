
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Avatar } from '@mui/material';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@mui/material/Badge';
export default function Cabecalho(){
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            
            <Box 
            sx={{
                display: 'flex',
                justifyContent: 'flex-start'
            }}
            >
                <FormControl variant="standard" 
                
                >
                    <InputLabel htmlFor="input-with-icon-adornment">
                    Pesquisar
                    </InputLabel>
                    <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                        <SearchIcon /> 
                        </InputAdornment>
                    }
                    />
                </FormControl>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end'
            }} >
                 <Badge color="secondary" variant="dot" sx={{ marginRight: '20px'}}>
                    <NotificationsIcon fontSize="large" color="disabled" /> 
                 </Badge>
                <Avatar sx={{ bgcolor: '#005aff' }}>N</Avatar>
            </Box>
        
        </div>
        
      )
    
}