export default function getPlaceValues(number: number): {
    length: number;
    Millions?: number;
    HundredThousands?: number;
    TenThousands?: number;
    Thousands?: number;
    Hundreds?: number;
    Tens?: number;
    Units: number;
} {


    // Calculate length efficiently using string conversion
    const length = number.toString().length;

    // Initialize place values object with conditional assignment
    const placeValues: {
        Millions?: number;
        HundredThousands?: number;
        TenThousands?: number;
        Thousands?: number;
        Hundreds?: number;
        Tens?: number;
        Units: number;
    } = { Units: 0 };
    const NumberAsString = number.toString()

    // Assign place values based on length with multiplication
    if (length >= 7) {
        placeValues.Millions = Math.floor((number / 1000000) % 10) * 1000000;
    }
    if (length >= 6) {
        placeValues.HundredThousands = Math.floor((number / 100000) % 10) * 100000;
    }
    if (length >= 5) {
        placeValues.TenThousands = Math.floor((number / 10000) % 10) * 10000;
    }
    if (length >= 4) {
        placeValues.Thousands = Math.floor((number / 1000) % 10) * 1000;
    }
    if (length >= 3) {
        placeValues.Hundreds = Math.floor((number / 100) % 10) * 100;
    }
    if (length >= 2) {
        console.log(NumberAsString[-1])
        placeValues.Tens = Math.floor((number / 10) % 10) * 10;
    }

    // Units value is always assigned
    placeValues.Units = number % 10;

    // Return the result
    return { length, ...placeValues };
}
