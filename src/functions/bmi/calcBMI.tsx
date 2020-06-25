export function calcBMI(weight: number, height: number) {
    const mHeight = height / 100
    return weight / (mHeight * mHeight)
}
