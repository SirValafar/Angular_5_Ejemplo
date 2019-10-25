import { Component } from '@angular/core';

@Component({
	selector:'videojuegos',
	templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent{
	public nombre:string;
	public mejor_juego:string;
	public mejor_juego_retro:string;
	public mostrar_retro:boolean ;
	public color:string ;
	public year:number;
	public videojuegos:Array<string>;

	constructor(){
	this.nombre = 'Videojugos 2019';
	this.mejor_juego = "GTA5"
	this.mejor_juego_retro = 'super mario';
	this.mostrar_retro = false;
	this.color = "yellow";
	this.year= 2018;
	this.videojuegos = [
	'Juego 0',
	'Juego 1',
	'Juego 2',
	'Juego 3',
	'Juego 4',
	'Juego 5',
	'Juego 6',
	'Juego 7',
	'Juego 8',
	'Juego 9'
	];

	}

}