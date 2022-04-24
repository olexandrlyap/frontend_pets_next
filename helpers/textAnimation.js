const textAnimation =  async ({heading, headingRef}) => {
    const textSelector = document.querySelector('[data-header-heading]')
    const dotSelector = document.querySelector('[data-header-dot]')

    let i = 0;
    let speed = 100; /* The speed/duration of the effect in milliseconds */

    const typeWriter = (() => {

        if (i < heading.length) {
            headingRef.current.textContent += heading.charAt(i);
            i++;  
            setTimeout(typeWriter, speed);
        } 
        return
    }) 
    typeWriter()
}

export default textAnimation

