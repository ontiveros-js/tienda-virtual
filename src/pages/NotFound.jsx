import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/NotFound.scss"


const NotFound = () => {

	let ruta = useLocation()

	return (
		<div className='notFound'>
			{`Ruta ${ruta.pathname} no encontrada, error 404.`}
		</div>
	);
}

export default NotFound;
