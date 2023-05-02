/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Store } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StoreUpdateFormInputValues = {
    name?: string;
    userlog?: string;
    mdps?: string;
    adress?: string;
    tel_contact?: string;
    email_contact?: string;
};
export declare type StoreUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    userlog?: ValidationFunction<string>;
    mdps?: ValidationFunction<string>;
    adress?: ValidationFunction<string>;
    tel_contact?: ValidationFunction<string>;
    email_contact?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StoreUpdateFormOverridesProps = {
    StoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    userlog?: PrimitiveOverrideProps<TextFieldProps>;
    mdps?: PrimitiveOverrideProps<TextFieldProps>;
    adress?: PrimitiveOverrideProps<TextFieldProps>;
    tel_contact?: PrimitiveOverrideProps<TextFieldProps>;
    email_contact?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: StoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    store?: Store;
    onSubmit?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onSuccess?: (fields: StoreUpdateFormInputValues) => void;
    onError?: (fields: StoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StoreUpdateFormInputValues) => StoreUpdateFormInputValues;
    onValidate?: StoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StoreUpdateForm(props: StoreUpdateFormProps): React.ReactElement;
