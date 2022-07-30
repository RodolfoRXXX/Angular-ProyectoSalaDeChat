import { Integrante } from "./entidades/integrantes";
import { Mensaje } from "./entidades/mensajes";

export const INTEGRANTES: Integrante[] = [
    { id:1, nombre: "Yo", color: "#0275d8", foto: "../../../assets/img/alejandro.jpg", active: true, },
    { id:2, nombre: "Meina", color: "#4cb80a", foto: "../../../assets/img/dario.jpg", active: false },
    { id:3, nombre: "Chiruflais", color: "#f33f12", foto: "../../../assets/img/eduardo.jpg", active: false },
    { id:4, nombre: "Parodi", color: "#05521c", foto: "../../../assets/img/lorenzo.jpg", active: false },
    { id:5, nombre: "Alejandro", color: "#f2e70f", foto: "../../../assets/img/fernando.jpg", active: false }
]

export const MENSAJES: Mensaje[] = [
    /*{ id:1, nombre: "Yo", mensaje: "Hola, cómo estás?", color: "#0275d8" },
    { id:2, nombre: "Darío", mensaje: "Bien, vos?", color: "#4cb80a" }*/
]