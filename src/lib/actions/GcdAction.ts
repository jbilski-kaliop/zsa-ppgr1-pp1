import { clearInput, getIntValueFromInputById } from "@/lib/dom/input";
import { gcd } from "@/lib/math";
import Action from "@/lib/actions/Action";

export default class GcdAction extends Action {
  private _htmlId1: string;
  private _htmlId2: string;

  constructor(htmlId1: string, htmlId2: string) {
    super();
    this._htmlId1 = htmlId1;
    this._htmlId2 = htmlId2;
  }

  execute() {
    const val1 = getIntValueFromInputById(this._htmlId1);
    const val2 = getIntValueFromInputById(this._htmlId2);

    if (isNaN(val1) || isNaN(val2)) {
      console.error(
        `Check provided values ([${val1}], [${val2}]), at least one is NaN`
      );
      return;
    }

    console.log(`Value 1 = ${val1}, Value 2 = ${val2}`);

    const gcdValue = gcd(val1, val2);

    console.log(`We've found GCD for values [${val1}, ${val2}]: ${gcdValue}!`);

    clearInput(this._htmlId1, this._htmlId2);
  }
}
