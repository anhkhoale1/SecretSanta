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
export declare type ProductsCreateFormInputValues = {
    name?: string;
    description?: string;
    price?: string;
    slug?: string;
    images?: string;
    badges?: string;
    rating?: string;
    reviews?: string;
    availability?: string;
    compatibility?: string;
    attributes?: string;
    type?: string;
    marque?: string;
    Affiliate?: string;
};
export declare type ProductsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    images?: ValidationFunction<string>;
    badges?: ValidationFunction<string>;
    rating?: ValidationFunction<string>;
    reviews?: ValidationFunction<string>;
    availability?: ValidationFunction<string>;
    compatibility?: ValidationFunction<string>;
    attributes?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    marque?: ValidationFunction<string>;
    Affiliate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsCreateFormOverridesProps = {
    ProductsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    images?: PrimitiveOverrideProps<TextFieldProps>;
    badges?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    reviews?: PrimitiveOverrideProps<TextFieldProps>;
    availability?: PrimitiveOverrideProps<TextFieldProps>;
    compatibility?: PrimitiveOverrideProps<TextFieldProps>;
    attributes?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    marque?: PrimitiveOverrideProps<TextFieldProps>;
    Affiliate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsCreateFormProps = React.PropsWithChildren<{
    overrides?: ProductsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onSuccess?: (fields: ProductsCreateFormInputValues) => void;
    onError?: (fields: ProductsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsCreateFormInputValues) => ProductsCreateFormInputValues;
    onValidate?: ProductsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsCreateForm(props: ProductsCreateFormProps): React.ReactElement;
