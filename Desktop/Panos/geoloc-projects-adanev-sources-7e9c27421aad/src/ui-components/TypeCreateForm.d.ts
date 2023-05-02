/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TypeCreateFormInputValues = {
    name?: string;
};
export declare type TypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TypeCreateFormOverridesProps = {
    TypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TypeCreateFormProps = React.PropsWithChildren<{
    overrides?: TypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TypeCreateFormInputValues) => TypeCreateFormInputValues;
    onSuccess?: (fields: TypeCreateFormInputValues) => void;
    onError?: (fields: TypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TypeCreateFormInputValues) => TypeCreateFormInputValues;
    onValidate?: TypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function TypeCreateForm(props: TypeCreateFormProps): React.ReactElement;
