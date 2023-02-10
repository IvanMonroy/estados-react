import React, { useEffect, useState } from 'react'
import './AjaxComponent.css';
import { Card, CardContent, CardMedia, Typography, CardActionArea, CircularProgress, Snackbar, Alert } from '@mui/material';

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");
    const [errorM, setErrorM] = useState(false);


    const guardarUsuariosQuemados = () => {
        setUsuarios([
            { "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://reqres.in/img/faces/7-image.jpg" },
            { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://reqres.in/img/faces/8-image.jpg" },
            { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://reqres.in/img/faces/9-image.jpg" }
        ])
    }

    const consultaUsuariosFetch = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(data => data.json())
            .then(user => {
                setUsuarios(user.data);
            }, error => {
                console.log(error);
            });

    }

    const consultaUsuariosAsync = async () => {
        try {
            const peticion = await fetch("https://reqres.in/api/users?page=1");
            const { data } = await peticion.json();
            setUsuarios(data);
            setTimeout(() => {
                setCargando(false);
            }, 2000);
        } catch (error) {
            setErrores(error.message);
            setErrorM(true);

            setTimeout(() => {
                setCargando(false);
            }, 2000);
        }

    }

    useEffect(() => {
        consultaUsuariosAsync();
    }, [])

    if (errores !== "") {
        return (
            <div className='Ajax-component'>
                <h6 className='h3-palen'> Listando usuarios utilizando AjaxComponent </h6>
                <CircularProgress />
                <Snackbar open={true} autoHideDuration={60000} onClose={() => setErrorM(false)}>
                    <Alert onClose={() => setErrorM(false)} severity="error" sx={{ width: '100%' }}>
                        {errores}
                    </Alert>
                </Snackbar>
            </div>
        )
    } else if (cargando) {
        return (
            <div className='Ajax-component'>
                <h6 className='h3-palen'> Listando usuarios utilizando AjaxComponent </h6>
                <CircularProgress />
            </div>
        );
    } else {
        return (
            <div className='Ajax-component'>
                <h6 className='h3-palen'> Listando usuarios utilizando AjaxComponent </h6>
                <div className='card-container'>

                    {
                        usuarios.length > 0 ?
                            usuarios.map((usuario, index) => {
                                return (

                                    <div key={index} className='card-element'>
                                        <Card >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="170"
                                                    image={usuario.avatar}
                                                    alt={usuario.first_name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {usuario.first_name} {usuario.last_name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Empleado de la compañía,  {usuario.first_name} {usuario.last_name}, podrá ser contactado en el correo electronico {usuario.email}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </div>

                                )
                            })
                            : (<p><strong>No se encontraron usuarios</strong></p>)
                    }
                </div>
            </div>
        )
    }
}
