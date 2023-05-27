export const hexToRGB = (hex) => {
    const hexWithoutHash = hex.replace('#', '')

    const red = parseInt(hexWithoutHash.substring(0, 2), 16)
    const green = parseInt(hexWithoutHash.substring(2, 4), 16)
    const blue = parseInt(hexWithoutHash.substring(4, 6), 16)

    return `${red}, ${green}, ${blue}`
}