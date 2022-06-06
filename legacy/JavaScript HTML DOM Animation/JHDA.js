function mutatio() {
    let id = null;
    const fragmen = document.getElementById("animus");
    let pos = 0;
    clearInterval(id);
    id = setInterval(permoveo, 5)
    function permoveo() {
        if (pos == 175) {
            clearInterval(id)
        } else {
            pos++
            fragmen.style.top = pos + 'px';
            fragmen.style.left = pos + 'px';

        }
    }

}