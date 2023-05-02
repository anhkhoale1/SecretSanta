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
export declare type StoreCreateFormInputValues = {
    name?: string;
    userlog?: string;
    mdps?: string;
    adress?: string;
    tel_contact?: string;
    email_contact?: string;
};
export declare type StoreCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    userlog?: ValidationFunction<string>;
    mdps?: ValidationFunction<string>;
    adress?: ValidationFunction<string>;
    tel_contact?: ValidationFunction<string>;
    email_contact?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreCreateFormOverridesProps = {
    StoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    userlog?: PrimitiveOverrideProps<TextFieldProps>;
    mdps?: PrimitiveOverrideProps<TextFieldProps>;
    adress?: PrimitiveOverrideProps<TextFieldProps>;
    tel_contact?: PrimitiveOverrideProps<TextFieldProps>;
    email_contact?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoreCreateFormProps = React.PropsWithChildren<{
    overrides?: StoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onSuccess?: (fields: StoreCreateFormInputValues) => void;
    onError?: (fields: StoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoreCreateFormInputValues) => StoreCreateFormInputValues;
    onValidate?: StoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function StoreCreateForm(props: StoreCreateFormProps): React.ReactElement;
