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
export declare type MarqueCreateFormInputValues = {
    name?: string;
    slug?: string;
};
export declare type MarqueCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarqueCreateFormOverridesProps = {
    MarqueCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MarqueCreateFormProps = React.PropsWithChildren<{
    overrides?: MarqueCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MarqueCreateFormInputValues) => MarqueCreateFormInputValues;
    onSuccess?: (fields: MarqueCreateFormInputValues) => void;
    onError?: (fields: MarqueCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MarqueCreateFormInputValues) => MarqueCreateFormInputValues;
    onValidate?: MarqueCreateFormValidationValues;
} & React.CSSProperties>;
export default function MarqueCreateForm(props: MarqueCreateFormProps): React.ReactElement;
