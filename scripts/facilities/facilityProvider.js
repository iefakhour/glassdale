let facility = []

export const usefacility = () => {
    return facility.slice()
}

export const getfacility = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(response => response.json())
        .then(
            parsedfacility => {
                console.table(parsedfacility)
                facility = parsedfacility
            }
        )
}