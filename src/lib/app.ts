import type Action from "./actions/Action";
import GcdAction from "./actions/GcdAction";
import IsPrimeAction from "./actions/IsPrimeAction";

export default class App {
  static readonly INPUT_EL_1 = "val1";
  static readonly INPUT_EL_2 = "val2";
  static readonly ACTION_GCD_EL = "calculateGcd";
  static readonly ACTION_IS_PRIME_1_EL = "checkIfPrime1";
  static readonly ACTION_IS_PRIME_2_EL = "checkIfPrime2";

  public run() {
    this.bindAction(App.ACTION_GCD_EL, new GcdAction(App.INPUT_EL_1, App.INPUT_EL_2)); 
    this.bindAction(App.ACTION_IS_PRIME_1_EL, new IsPrimeAction(App.INPUT_EL_1));
    this.bindAction(App.ACTION_IS_PRIME_2_EL, new IsPrimeAction(App.INPUT_EL_2));
  }

  private getActionElementById(htmlId: string): HTMLButtonElement {
    return document.getElementById(htmlId) as HTMLButtonElement;
  }

  private bindAction(actionElId: string, action: Action) {
    const element = this.getActionElementById(actionElId);
    element?.addEventListener('click', function() {
        action.execute();
    });
  }
}
