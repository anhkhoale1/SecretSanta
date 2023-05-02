/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Marque } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MarqueUpdateFormInputValues = {
    name?: string;
    slug?: string;
};
export declare type MarqueUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarqueUpdateFormOverridesProps = {
    MarqueUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MarqueUpdateFormProps = React.PropsWithChildren<{
    overrides?: MarqueUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    marque?: Marque;
    onSubmit?: (fields: MarqueUpdateFormInputValues) => MarqueUpdateFormInputValues;
    onSuccess?: (fields: MarqueUpdateFormInputValues) => void;
    onError?: (fields: MarqueUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MarqueUpdateFormInputValues) => MarqueUpdateFormInputValues;
    onValidate?: MarqueUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MarqueUpdateForm(props: MarqueUpdateFormProps): React.ReactElement;
