import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import React from 'react';
import Box from '@mui/material/Box';
export default function Resumo(){
 return(
    <Box sx ={{display: 'flex', justifyContent: 'space-between', marginTop: '30px'}} >
        <Box sx={{bgcolor: '#ffffff', width: '22%' }} >
         <ListItem button>
        <ListItemIcon>
         <StorefrontIcon color="primary" sx= {{width:'80px', height:'80px'}} />
        </ListItemIcon>
        <Box sx ={{marginLeft:'15px'}} >
        <ListItemText primary="Unidades Registradas" sx={{}} />
        <ListItemText primary="1"/>
        </Box>
        </ListItem>
        </Box>
        <Box sx={{bgcolor: '#ffffff', width: '22%' }} >
         <ListItem button>
        <ListItemIcon>
         <GroupAddIcon color="primary" sx= {{width:'80px', height:'80px'}} />
        </ListItemIcon>
        <Box sx ={{marginLeft:'15px'}} >
        <ListItemText primary="Novos Clientes"  />
        <ListItemText primary="104"/>
        </Box>
        </ListItem>
        </Box>
        <Box sx={{bgcolor: '#ffffff', width: '22%' }} >
         <ListItem button>
        <ListItemIcon>
         <AttachMoneyIcon color="primary" sx= {{width:'80px', height:'80px'}} />
        </ListItemIcon>
        <Box sx ={{marginLeft:'15px'}} >
        <ListItemText primary="Vendas Realizadas" />
        <ListItemText primary="7000"/>
        </Box>
        </ListItem>
        </Box>
        <Box sx={{bgcolor: '#ffffff', width: '22%' }} >
         <ListItem button>
        <ListItemIcon>
         <AccountBalanceIcon color="primary" sx= {{width:'80px', height:'80px'}} />
        </ListItemIcon>
        <Box sx ={{marginLeft:'15px'}} >
        <ListItemText primary="Lucro Liquido Geral" />
        <ListItemText primary="R$ 427000,00"/>
        </Box>
        </ListItem>
        </Box>
    </Box>
 )
}
