import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;
export default function SideMenu(){
    return(
      <Drawer
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ 
          color: '#005aff',
          justifyContent: 'center'
        }} >
          <h1>LOGO</h1>
        </Toolbar>
        
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Produtos" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Financeiro" />
      </ListItem>
      
       
      
      <ListItem button sx={{
        marginTop:70
       
        
        
      }} >
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Sair" />
        
      </ListItem>
      
    
    
    </Drawer>
    )
}