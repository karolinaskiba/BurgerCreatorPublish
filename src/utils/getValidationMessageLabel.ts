// utils/getValidationMessageLabel.ts
import { ValidationMessageEnum } from 'src/enums/ValidationMessag.enum';

export function getValidationMessageLabel(
  message: ValidationMessageEnum
): string {
  switch (message) {
    case ValidationMessageEnum.BURGER_READY_TO_SAVE:
      return 'Validation-messages.Burger ready to save';
    case ValidationMessageEnum.BAD_INGREDIENT:
      return 'Validation-messages.Bad ingredient';
    case ValidationMessageEnum.OK:
      return 'Validation-messages.OK';
    case ValidationMessageEnum.INCORRECT_FIRST_ELEMENT:
      return 'Validation-messages.Incorrect first element';
    case ValidationMessageEnum.LAST_ITEM_MUST_BE_TOP_BUN:
      return 'Validation-messages.Last item must be top bun';
    case ValidationMessageEnum.YOU_CANNOT_REMOVE:
      return 'Validation-messages.You cannot remove';
    case ValidationMessageEnum.ELEMENT_NOT_EXIST:
      return 'Validation-messages.Element not exist';
    case ValidationMessageEnum.YOU_CAN_NOT_ADD_MORE_TOP_BUN:
      return 'Validation-messages.You cannot add more top buns';
    case ValidationMessageEnum.YOU_CAN_NOT_ADD_MORE_INGREDIENTS:
      return 'Validation-messages.You cannot add more ingredients';
    case ValidationMessageEnum.YOUR_BURGER_IS_EMPTY:
      return 'Validation-messages.Your burger is empty';
    case ValidationMessageEnum.YOU_CAN_NOT_REMOVE_FROM_INSIDE:
      return 'Validation-messages.You cannot remove something from inside';
    default:
      return 'Validation-messages.Unknown error';
  }
}
