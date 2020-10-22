import React, {Component} from 'react';
import EditarSitio from './../views/editarSitio';
import ResponsiveDrawerProveedor from './ResponsiveDrawerProveedor';

import axios from "axios";

export class EditarSitioProveedor extends React.Component{
	constructor(props) {
		super(props);	
	}

	render(){
		let	servicesHope =  axios.get('https://kingboooback.herokuapp.com/provider')
		.then(function (response) {localStorage.setItem("listaProviders",JSON.stringify(response.data));})
		.catch(function (error) { console.log(error);} );
		const myComponent = <EditarSitio />
		return(
			<ResponsiveDrawerProveedor childComponent={myComponent}/>

		);
	}
}
