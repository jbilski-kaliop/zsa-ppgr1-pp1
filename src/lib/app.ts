import { getIntValueFromInputById, clearInput } from './dom/input';
import { gcd, isPrime } from './math';

const INPUT_EL_1 = 'val1';
const INPUT_EL_2 = 'val2';
const ACTION_GCD_EL = 'calculateGcd';

export default function(): void {
    const calculateGcd = document.getElementById(ACTION_GCD_EL) as HTMLButtonElement;
    calculateGcd?.addEventListener('click', function () {
        const val1 = getIntValueFromInputById(INPUT_EL_1);
        const val2 = getIntValueFromInputById(INPUT_EL_2);

        if (isNaN(val1) || isNaN(val2)) {
            console.error(`Check provided values ([${val1}], [${val2}]), at least one is NaN`);
            return;
        }

        console.log(`Value 1 = ${val1}, Value 2 = ${val2}`);

        const gcdValue = gcd(val1, val2);

        console.log(`We've found GCD for values [${val1}, ${val2}]: ${gcdValue}!`);
        
        clearInput(INPUT_EL_1, INPUT_EL_2);
    });
}
