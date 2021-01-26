import {usefacility , getfacility} from "./facilityProvider.js"
import {facilityforfacility_js} from "./facility.js"

let facilityContainerFor_DOM = document.querySelector("#facility-container")


export const facilityList = () => {
    getfacility().then(() => {
        let copyusefacility = usefacility();
        let facilityListHTMLString = ""
    for(let currentfacilityInLoop of copyusefacility) {
        facilityListHTMLString += facilityforfacility_js(currentfacilityInLoop)
        /* facilityListHTMLString will store all the data from 
        facilityforfacility_js in ./facility.js and store it in object 
        facilityListHTMLString */ 
    }

    facilityContainerFor_DOM.innerHTML = `${facilityListHTMLString}`
        // Now that you have the data, what component should be rendered?
        /* The facilityContainerFor_DOM will go and print out the Array facilityListHTMLString  
         in the index.html and print the output under the id:facility-container
         located*/
    })
}
