import {useOfficers , getOfficers} from "./OfficerProvider.js"
import {officer} from "./officer.js"

let officerContainer = document.querySelector("#officer-container")


export const OfficerList = () => {
    getOfficers().then(() => {
        let copyuseOfficers = useOfficers();
        let officerListHTMLString = ""
    for(let currentOfficerInLoop of copyuseOfficers) {
        officerListHTMLString += officer(currentOfficerInLoop)
    }

    officerContainer.innerHTML = `${officerListHTMLString}`
        // Now that you have the data, what component should be rendered?
    })
}
