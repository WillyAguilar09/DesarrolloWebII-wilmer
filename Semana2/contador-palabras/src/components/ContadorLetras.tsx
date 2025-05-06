import React, { useEffect, useState, useRef } from 'react'

export default function ContadorLetras() {
    const [text, setTexto] = useState<string>('');
    const [contadorLetras, setContadorLetras] = useState<number>(0);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        let contador = text.length;
        setContadorLetras(contador)

        if (textareaRef.current) {
            if (contador <= 10) {

                textareaRef.current.style.color = 'yellow';
            } else if (contador < 50) {
                textareaRef.current.style.color = 'green'
            } else {
                textareaRef.current.style.color = 'red'
            }
        }

        console.log('contadorLetras:', contadorLetras, typeof contadorLetras);
    }, [text])

    function manejarTexto(e: any) {
        setTexto(e.target.value)

    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f1faee',
            fontFamily: 'Arial, sans-serif'
          }}>
            <h1 style={{ color: '#1d3557' }}>Contador de Letras</h1>
            <textarea
              ref={textareaRef}
              rows={10}
              cols={30}
              onChange={manejarTexto}
              style={{
                padding: '10px',
                fontSize: '1.1rem',
                borderRadius: '10px',
                border: '2px solid #a8dadc',
                boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                outline: 'none',
                resize: 'none',
              }}
            />
            <h2 style={{
              marginTop: '20px',
              color: '#457b9d'
            }}>
              La cantidad de letras es: {contadorLetras}
            </h2>
            <h2 style={{
              marginTop: '20px',
              color: '#457b9d'
            }}>{contadorLetras}
            </h2>
          </div>
        );
}
