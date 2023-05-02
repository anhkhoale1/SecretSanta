/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Store } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StoreUpdateForm(props) {
  const {
    id: idProp,
    store: storeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    userlog: "",
    mdps: "",
    adress: "",
    tel_contact: "",
    email_contact: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [userlog, setUserlog] = React.useState(initialValues.userlog);
  const [mdps, setMdps] = React.useState(initialValues.mdps);
  const [adress, setAdress] = React.useState(initialValues.adress);
  const [tel_contact, setTel_contact] = React.useState(
    initialValues.tel_contact
  );
  const [email_contact, setEmail_contact] = React.useState(
    initialValues.email_contact
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = storeRecord
      ? { ...initialValues, ...storeRecord }
      : initialValues;
    setName(cleanValues.name);
    setUserlog(cleanValues.userlog);
    setMdps(cleanValues.mdps);
    setAdress(cleanValues.adress);
    setTel_contact(cleanValues.tel_contact);
    setEmail_contact(cleanValues.email_contact);
    setErrors({});
  };
  const [storeRecord, setStoreRecord] = React.useState(storeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Store, idProp)
        : storeModelProp;
      setStoreRecord(record);
    };
    queryData();
  }, [idProp, storeModelProp]);
  React.useEffect(resetStateValues, [storeRecord]);
  const validations = {
    name: [],
    userlog: [],
    mdps: [],
    adress: [],
    tel_contact: [],
    email_contact: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          userlog,
          mdps,
          adress,
          tel_contact,
          email_contact,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Store.copyOf(storeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StoreUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              userlog,
              mdps,
              adress,
              tel_contact,
              email_contact,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Userlog"
        isRequired={false}
        isReadOnly={false}
        value={userlog}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              userlog: value,
              mdps,
              adress,
              tel_contact,
              email_contact,
            };
            const result = onChange(modelFields);
            value = result?.userlog ?? value;
          }
          if (errors.userlog?.hasError) {
            runValidationTasks("userlog", value);
          }
          setUserlog(value);
        }}
        onBlur={() => runValidationTasks("userlog", userlog)}
        errorMessage={errors.userlog?.errorMessage}
        hasError={errors.userlog?.hasError}
        {...getOverrideProps(overrides, "userlog")}
      ></TextField>
      <TextField
        label="Mdps"
        isRequired={false}
        isReadOnly={false}
        value={mdps}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              userlog,
              mdps: value,
              adress,
              tel_contact,
              email_contact,
            };
            const result = onChange(modelFields);
            value = result?.mdps ?? value;
          }
          if (errors.mdps?.hasError) {
            runValidationTasks("mdps", value);
          }
          setMdps(value);
        }}
        onBlur={() => runValidationTasks("mdps", mdps)}
        errorMessage={errors.mdps?.errorMessage}
        hasError={errors.mdps?.hasError}
        {...getOverrideProps(overrides, "mdps")}
      ></TextField>
      <TextField
        label="Adress"
        isRequired={false}
        isReadOnly={false}
        value={adress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              userlog,
              mdps,
              adress: value,
              tel_contact,
              email_contact,
            };
            const result = onChange(modelFields);
            value = result?.adress ?? value;
          }
          if (errors.adress?.hasError) {
            runValidationTasks("adress", value);
          }
          setAdress(value);
        }}
        onBlur={() => runValidationTasks("adress", adress)}
        errorMessage={errors.adress?.errorMessage}
        hasError={errors.adress?.hasError}
        {...getOverrideProps(overrides, "adress")}
      ></TextField>
      <TextField
        label="Tel contact"
        isRequired={false}
        isReadOnly={false}
        value={tel_contact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              userlog,
              mdps,
              adress,
              tel_contact: value,
              email_contact,
            };
            const result = onChange(modelFields);
            value = result?.tel_contact ?? value;
          }
          if (errors.tel_contact?.hasError) {
            runValidationTasks("tel_contact", value);
          }
          setTel_contact(value);
        }}
        onBlur={() => runValidationTasks("tel_contact", tel_contact)}
        errorMessage={errors.tel_contact?.errorMessage}
        hasError={errors.tel_contact?.hasError}
        {...getOverrideProps(overrides, "tel_contact")}
      ></TextField>
      <TextField
        label="Email contact"
        isRequired={false}
        isReadOnly={false}
        value={email_contact}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              userlog,
              mdps,
              adress,
              tel_contact,
              email_contact: value,
            };
            const result = onChange(modelFields);
            value = result?.email_contact ?? value;
          }
          if (errors.email_contact?.hasError) {
            runValidationTasks("email_contact", value);
          }
          setEmail_contact(value);
        }}
        onBlur={() => runValidationTasks("email_contact", email_contact)}
        errorMessage={errors.email_contact?.errorMessage}
        hasError={errors.email_contact?.hasError}
        {...getOverrideProps(overrides, "email_contact")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || storeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || storeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
