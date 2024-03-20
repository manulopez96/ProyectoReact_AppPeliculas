
export const guardarEnStorage = (clave, elemento) => {
    //conseguir eloementos
    let elementos = JSON.parse(localStorage.getItem(clave));
    // console.log(elementos);

    //comprobar que sea un array
    if (Array.isArray(elementos)) {
        elementos.push(elemento);
    } else {
        elementos = [elemento];
    }

    //guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //devolver objeto guardado
    return elemento;
};
