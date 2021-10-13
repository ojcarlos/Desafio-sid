
import styles from '../styles/Home.module.css'
import * as React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideMenu from '../components/SideMenu';
import Cabecalho from '../components/Cabecalho';
import Tabela from '../components/Tabela';
import Resumo from '../components/Resumo';
export default function Home() {
  return (
    <div  >
      <Box sx={{ 
        display: 'flex',
        height: '100vh'
    }}>
        <SideMenu></SideMenu>
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#F8F8FF', p: 3 }}
      >
        <Cabecalho></Cabecalho>
        <Resumo></Resumo>

        <Box sx = {{bgcolor:'#ffffff' }}>
          <Box sx={{marginTop: '50px'}} > <h3  >Ultimos pedidos realizados</h3></Box>
        <Tabela></Tabela>  
        </Box>
       </Box>
      </Box>
    </div>
  )
}
