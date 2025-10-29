import { getIntValueFromInputById, clearInput } from "./dom/input";
import { gcd, isPrime } from "./math";

export default class App {
  static readonly INPUT_EL_1 = "val1";
  static readonly INPUT_EL_2 = "val2";
  static readonly ACTION_GCD_EL = "calculateGcd";
  static readonly ACTION_IS_PRIME_1_EL = "checkIfPrime1";
  static readonly ACTION_IS_PRIME_2_EL = "checkIfPrime2";

  public run() {
    this.handleGcdAction();
    this.handleIsPrimeActionOnValue(App.ACTION_IS_PRIME_1_EL, App.INPUT_EL_1);
    this.handleIsPrimeActionOnValue(App.ACTION_IS_PRIME_2_EL, App.INPUT_EL_2);
  }

  private handleGcdAction() {
    const calculateGcd = document.getElementById(
      App.ACTION_GCD_EL
    ) as HTMLButtonElement;
    calculateGcd?.addEventListener("click", function () {
      const val1 = getIntValueFromInputById(App.INPUT_EL_1);
      const val2 = getIntValueFromInputById(App.INPUT_EL_2);

      if (isNaN(val1) || isNaN(val2)) {
        console.error(
          `Check provided values ([${val1}], [${val2}]), at least one is NaN`
        );
        return;
      }

      console.log(`Value 1 = ${val1}, Value 2 = ${val2}`);

      const gcdValue = gcd(val1, val2);

      console.log(
        `We've found GCD for values [${val1}, ${val2}]: ${gcdValue}!`
      );

      clearInput(App.INPUT_EL_1, App.INPUT_EL_2);
    });
  }

  private handleIsPrimeActionOnValue(actionElId: string, inputElId: string) {
    const actionEl = document.getElementById(actionElId) as HTMLButtonElement;
    actionEl?.addEventListener("click", () => {
      const value = getIntValueFromInputById(inputElId);
      if (isNaN(value)) {
        console.error(`Provided value "${value}" is invalid.`);
        return;
      }

      const result = isPrime(value);

      console.log(`Value "${value}" is${result ? "" : " not"} prime`);

      clearInput(inputElId);
    });
  }
}
