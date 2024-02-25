import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const checkbx: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const checkBoxValue = control.value;
  return checkBoxValue === true ? null : { checkboxNotChecked: true };
};
