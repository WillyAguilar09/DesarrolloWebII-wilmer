import React from 'react';
import { Persona } from '../Modelos/Persona'

export default function PersonaComponent({ nombre, ocupacion, pais }: Persona) {
    return (
        <div className="persona-card">
        <h5>
          <strong>Nombre:</strong> {nombre} <br />
          <strong>Ocupación:</strong> {ocupacion} <br />
          <strong>País:</strong> {pais ?? 'No especificado'}
        </h5>
      </div>
    );
  }
