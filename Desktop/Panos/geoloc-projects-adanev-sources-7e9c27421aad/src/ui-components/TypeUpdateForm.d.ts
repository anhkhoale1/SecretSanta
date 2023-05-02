/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Type } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TypeUpdateFormInputValues = {
    name?: string;
};
export declare type TypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TypeUpdateFormOverridesProps = {
    TypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: TypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    type?: Type;
    onSubmit?: (fields: TypeUpdateFormInputValues) => TypeUpdateFormInputValues;
    onSuccess?: (fields: TypeUpdateFormInputValues) => void;
    onError?: (fields: TypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TypeUpdateFormInputValues) => TypeUpdateFormInputValues;
    onValidate?: TypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TypeUpdateForm(props: TypeUpdateFormProps): React.ReactElement;
