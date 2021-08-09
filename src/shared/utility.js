export const checkValidity = ( value, rules ) =>{
    let isValid = true;
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    return isValid;
}

export const assignRevealClasses =  () => {


    Array.from(document.getElementsByClassName("reveal")).forEach(
        function(element, index, array) {
            var rect = element.getBoundingClientRect();
            if (
                (rect.bottom >= 0 &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)) 


            ){
                element.classList.add('revealed')
            }
            else if(!element.classList.contains('reveal-once')){
                element.classList.remove('revealed');
            }
        }
    );

}