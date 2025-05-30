function revelarCampoCidade(local) {
    const campoTexto = document.querySelector('.campo-texto');
    const cidadeTexto = document.querySelector('.cidade-texto');

    if(local === 'campo') {
        campoTexto.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        cidadeTexto.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        cidadeTexto.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        campoTexto.style.backgroundColor = 'rgba(0, 0, 0, 0.5
