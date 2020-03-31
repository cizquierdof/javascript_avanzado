const pruebaTimeout=(delay)=>{
    timeoutId=setTimeout(
        ()=>console.log(`Esto se mostrará tras ${delay/1000} segundos`),
        delay
    );
}

pruebaTimeout(5000);
