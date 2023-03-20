const $ = par => {
    const elements = document.querySelectorAll(par);
    return elements.length === 1 ? elements[0] : elements;
}
export default $;