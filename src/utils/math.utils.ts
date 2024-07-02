export class MathUtils {
    static convertNumberToCurrency(value: number):string {
        if (value < 1000) {
            return value.toString()
        }
        const valueArray = value.toString().split('')
        let timeDivided = 0
        while(value > 999) {
            value /= 1000
            timeDivided++
        }
        const length = valueArray.length 
        for (let index = 1; timeDivided > 0; timeDivided--, index++) {
            const position = length - (index * 3)
            valueArray.splice(position, 0, ',')
        }
        return valueArray.join('')
    }
}