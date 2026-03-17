function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text)
        .then(() => {
            const btn = document.querySelector(`#${elementId} + .copy-btn`);
            btn.classList.add("copied");
            btn.textContent = "Copiado ✅";
            setTimeout(() => {
                btn.classList.remove("copied");
                btn.textContent = "Copiar";
            }, 2000);
        })
        .catch(() => alert("Hubo un error al copiar el texto."));
}