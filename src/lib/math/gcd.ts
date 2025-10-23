export default function gcd(val1 : number, val2 : number): number {
    val1 = Math.abs(val1);
    val2 = Math.abs(val2);
    // TODO: handle double numbers

    const min : number = Math.min(val1, val2);
    const max : number = Math.max(val1, val2);
    for (let i = min; i > 1; i--) {
        if (min % i == 0 && max % i === 0) {
            return i;
        }
    }
    
    return 1;
}
