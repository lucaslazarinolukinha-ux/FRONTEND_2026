const cInput = document.getElementById('celsius');
const fInput = document.getElementById('fahrenheit');

cInput.addEventListener('input', () => {
    const c = parseFloat(cInput.value);
    // Usamos isFinite para evitar erros com campos vazios ou símbolos
    if (Number.isFinite(c)) {
        const result = (c * 9/5) + 32;
        // Arredonda apenas para exibição, sem travar o input
        fInput.value = parseFloat(result.toFixed(2));
    } else {
        fInput.value = '';
    }
});

fInput.addEventListener('input', () => {
    const f = parseFloat(fInput.value);
    if (Number.isFinite(f)) {
        const result = (f - 32) * 5/9;
        cInput.value = parseFloat(result.toFixed(2));
    } else {
        cInput.value = '';
    }
});
