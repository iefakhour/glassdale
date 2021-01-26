import {usecriminals , getcriminals} from "./criminalProvider.js"
import {criminal} from "./criminal.js"

let criminalContainer = document.querySelector("#criminal-container")


export const CriminalList = () => {
    getcriminals().then(() => {
        let criminals = usecriminals();
        let criminalListHTMLString = ""
    for(let currentCriminalInLoop of criminals) {
        criminalListHTMLString += criminal(currentCriminalInLoop)
    }

    criminalContainer.innerHTML = `${criminalListHTMLString}`
        // Now that you have the data, what component should be rendered?
    })
}
