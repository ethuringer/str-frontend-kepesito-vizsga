function changeOuterLinks() {
    const navLinks = document.querySelectorAll('nav#link-list a');
    navLinks.forEach( item => {
        if ( item.innerHTML.includes('outer-link') ) {
            item.target ='_blank';
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })

    const navElements = document.querySelectorAll('nav');
    navElements.forEach(el => {
        el.style.display = 'flex';
        el.style.flexDirection = 'column';
        el.style.margin = '0px auto';
        el.style.width = '30%';
        el.style.border = '1px solid blue';
        el.style.padding = '16px';
      });
}

changeOuterLinks();

export { changeOuterLinks };