import { clearInput, getIntValueFromInputById } from "@/lib/dom/input";
import { isPrime } from "@/lib/math";
import Action from "@/lib/actions/Action";

export default class IsPrimeAction extends Action {
  private _htmlId: string;

  constructor(htmlId: string) {
    super();
    this._htmlId = htmlId;
  }

  execute() {
    const value = getIntValueFromInputById(this._htmlId);
    if (isNaN(value)) {
      console.error(`Provided value "${value}" is invalid.`);
      return;
    }

    const result = isPrime(value);

    console.log(`Value "${value}" is${result ? "" : " not"} prime`);

    clearInput(this._htmlId);
  }
}
