import { useState, useEffect } from "react";

export function FollowOnMouse() {
    //estado para habilitar o desabilitar el efecto del mouse
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({x: 0, y:0});

    //efecto para cambiarle la clase al body
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled);

        return () => {
            document.body.classList.remove('no-cursor');
        }

    }, [enabled]);

    //efecto de seguir el mouse
    useEffect(() => {
        console.log(`enabled value: ${enabled}`)

        const handleMove = (event) => {
        const {clientX, clientY} = event;
        setPosition({x: clientX, y: clientY});
        }

        if(enabled){
        window.addEventListener('pointermove', handleMove);
        }

        return () => {
        console.log('cleanup')
        window.removeEventListener('pointermove', handleMove)
        }
        
    }, [enabled]);

    const activateMouseEffect = () => {
        setEnabled(!enabled);
    }

    return (
        <>
            <div className='circle-mouse-follow' style=
            {{
                position: 'absolute',
                backgroundColor: '#09f',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
            />

            <button onClick={activateMouseEffect}>
                {enabled ? 'Desactivar' : 'Activar'} seguir puntero
            </button>
        </>
        
    )
}