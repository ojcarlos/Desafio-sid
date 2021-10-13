import * as React from 'react';
import Box from '@mui/material/Box';

export default function Carta(Props){
    const imagem = Props.imagem;
    const valor = Props.valor;
    const titulo = Props.titulo;

    return(
        <Box sx={{
            height: 100,
            display: 'flex',
            flexDirection: 'column'
        }}
        >
            <Box> {{imagem}} </Box>
            <Box sx={{
            
            display: 'flex',
            flexDirection: 'row'
        }}>
                <Box>{valor} </Box>
                <Box> {titulo} </Box>
            </Box>


        </Box>
    )

}