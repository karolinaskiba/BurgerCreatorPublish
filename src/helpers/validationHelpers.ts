import { IngredientModel } from 'src/models/Ingredient.model';
import { ValidationModel } from 'src/models/Validation.model';
import { ValidationStatusEnum } from 'src/enums/ValidationStatus.enum';
import { ValidationMessageEnum } from 'src/enums/ValidationMessag.enum';
import { getValidationMessageLabel } from 'src/utils/getValidationMessageLabel';

export function checkValidationWhenAdded(
  ingredientName: string,
  configuration: IngredientModel[]
): ValidationModel {
  const arrLength = configuration.length;

  if (configuration[0]?.name === 'top-bun') {
    if (ingredientName === 'bottom-bun') {
      return {
        status: ValidationStatusEnum.READY_TO_SAVE,
        message: getValidationMessageLabel(
          ValidationMessageEnum.YOU_CAN_NOT_ADD_MORE_TOP_BUN
        ),
        proceed: false,
      };
    } else {
      return {
        status: ValidationStatusEnum.READY_TO_SAVE,
        message: getValidationMessageLabel(
          ValidationMessageEnum.YOU_CAN_NOT_ADD_MORE_INGREDIENTS
        ),
        proceed: false,
      };
    }
  }

  if (arrLength === 0 && ingredientName === 'bottom-bun') {
    return {
      status: ValidationStatusEnum.PENDING,
      message: getValidationMessageLabel(ValidationMessageEnum.OK),
      proceed: true,
    };
  }
  if (arrLength === 0 && ingredientName !== 'bottom-bun') {
    return {
      status: ValidationStatusEnum.FAILED,
      message: getValidationMessageLabel(
        ValidationMessageEnum.INCORRECT_FIRST_ELEMENT
      ),
      proceed: false,
    };
  }

  if (arrLength > 0 && ingredientName === 'bottom-bun') {
    return {
      status: ValidationStatusEnum.FAILED,
      message: getValidationMessageLabel(ValidationMessageEnum.BAD_INGREDIENT),
      proceed: false,
    };
  }
  if (arrLength > 0 && ingredientName === 'top-bun') {
    return {
      status: ValidationStatusEnum.READY_TO_SAVE,
      message: getValidationMessageLabel(
        ValidationMessageEnum.BURGER_READY_TO_SAVE
      ),
      proceed: true,
    };
  }
  if (arrLength > 1 && arrLength < 8) {
    return {
      status: ValidationStatusEnum.PENDING,
      message: getValidationMessageLabel(ValidationMessageEnum.OK),
      proceed: true,
    };
  }
  if (arrLength === 8 && ingredientName !== 'top-bun') {
    return {
      status: ValidationStatusEnum.FAILED,
      message: getValidationMessageLabel(
        ValidationMessageEnum.LAST_ITEM_MUST_BE_TOP_BUN
      ),
      proceed: false,
    };
  }

  return {
    status: ValidationStatusEnum.PENDING,
    message: getValidationMessageLabel(ValidationMessageEnum.OK),
    proceed: true,
  };
}

export function checkValidationWhenRemove(
  ingredientName: string,
  configuration: IngredientModel[]
): ValidationModel {
  const arrLength = configuration.length;

  if (configuration[0]?.name === 'top-bun') {
    if (ingredientName === 'top-bun') {
      return {
        status: ValidationStatusEnum.PENDING,
        message: getValidationMessageLabel(ValidationMessageEnum.OK),
        proceed: true,
      };
    } else {
      return {
        status: ValidationStatusEnum.READY_TO_SAVE,
        message: getValidationMessageLabel(
          ValidationMessageEnum.YOU_CAN_NOT_REMOVE_FROM_INSIDE
        ),
        proceed: false,
      };
    }
  }

  if (arrLength > 1 && ingredientName === 'bottom-bun') {
    return {
      status: ValidationStatusEnum.FAILED,
      message: getValidationMessageLabel(
        ValidationMessageEnum.YOU_CANNOT_REMOVE
      ),
      proceed: false,
    };
  }
  if (arrLength === 0) {
    return {
      status: ValidationStatusEnum.FAILED,
      message: getValidationMessageLabel(
        ValidationMessageEnum.YOUR_BURGER_IS_EMPTY
      ),
      proceed: false,
    };
  }

  if (
    arrLength > 1 &&
    !configuration.some((ing: IngredientModel) => ing.name === ingredientName)
  ) {
    return {
      status: ValidationStatusEnum.FAILED,
      message: getValidationMessageLabel(
        ValidationMessageEnum.ELEMENT_NOT_EXIST
      ),
      proceed: false,
    };
  }
  return {
    status: ValidationStatusEnum.PENDING,
    message: getValidationMessageLabel(ValidationMessageEnum.OK),
    proceed: true,
  };
}
