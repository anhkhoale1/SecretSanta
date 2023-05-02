/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Products } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProductsCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    description: "",
    price: "",
    slug: "",
    images: "",
    badges: "",
    rating: "",
    reviews: "",
    availability: "",
    compatibility: "",
    attributes: "",
    type: "",
    marque: "",
    Affiliate: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [slug, setSlug] = React.useState(initialValues.slug);
  const [images, setImages] = React.useState(initialValues.images);
  const [badges, setBadges] = React.useState(initialValues.badges);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [reviews, setReviews] = React.useState(initialValues.reviews);
  const [availability, setAvailability] = React.useState(
    initialValues.availability
  );
  const [compatibility, setCompatibility] = React.useState(
    initialValues.compatibility
  );
  const [attributes, setAttributes] = React.useState(initialValues.attributes);
  const [type, setType] = React.useState(initialValues.type);
  const [marque, setMarque] = React.useState(initialValues.marque);
  const [Affiliate, setAffiliate] = React.useState(initialValues.Affiliate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setPrice(initialValues.price);
    setSlug(initialValues.slug);
    setImages(initialValues.images);
    setBadges(initialValues.badges);
    setRating(initialValues.rating);
    setReviews(initialValues.reviews);
    setAvailability(initialValues.availability);
    setCompatibility(initialValues.compatibility);
    setAttributes(initialValues.attributes);
    setType(initialValues.type);
    setMarque(initialValues.marque);
    setAffiliate(initialValues.Affiliate);
    setErrors({});
  };
  const validations = {
    name: [],
    description: [],
    price: [],
    slug: [],
    images: [],
    badges: [],
    rating: [],
    reviews: [],
    availability: [],
    compatibility: [],
    attributes: [],
    type: [],
    marque: [],
    Affiliate: [],
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
          description,
          price,
          slug,
          images,
          badges,
          rating,
          reviews,
          availability,
          compatibility,
          attributes,
          type,
          marque,
          Affiliate,
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
          await DataStore.save(new Products(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductsCreateForm")}
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
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
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
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        value={price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price: value,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Slug"
        isRequired={false}
        isReadOnly={false}
        value={slug}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug: value,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.slug ?? value;
          }
          if (errors.slug?.hasError) {
            runValidationTasks("slug", value);
          }
          setSlug(value);
        }}
        onBlur={() => runValidationTasks("slug", slug)}
        errorMessage={errors.slug?.errorMessage}
        hasError={errors.slug?.hasError}
        {...getOverrideProps(overrides, "slug")}
      ></TextField>
      <TextField
        label="Images"
        isRequired={false}
        isReadOnly={false}
        value={images}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images: value,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.images ?? value;
          }
          if (errors.images?.hasError) {
            runValidationTasks("images", value);
          }
          setImages(value);
        }}
        onBlur={() => runValidationTasks("images", images)}
        errorMessage={errors.images?.errorMessage}
        hasError={errors.images?.hasError}
        {...getOverrideProps(overrides, "images")}
      ></TextField>
      <TextField
        label="Badges"
        isRequired={false}
        isReadOnly={false}
        value={badges}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges: value,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.badges ?? value;
          }
          if (errors.badges?.hasError) {
            runValidationTasks("badges", value);
          }
          setBadges(value);
        }}
        onBlur={() => runValidationTasks("badges", badges)}
        errorMessage={errors.badges?.errorMessage}
        hasError={errors.badges?.hasError}
        {...getOverrideProps(overrides, "badges")}
      ></TextField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        value={rating}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating: value,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Reviews"
        isRequired={false}
        isReadOnly={false}
        value={reviews}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews: value,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.reviews ?? value;
          }
          if (errors.reviews?.hasError) {
            runValidationTasks("reviews", value);
          }
          setReviews(value);
        }}
        onBlur={() => runValidationTasks("reviews", reviews)}
        errorMessage={errors.reviews?.errorMessage}
        hasError={errors.reviews?.hasError}
        {...getOverrideProps(overrides, "reviews")}
      ></TextField>
      <TextField
        label="Availability"
        isRequired={false}
        isReadOnly={false}
        value={availability}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability: value,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.availability ?? value;
          }
          if (errors.availability?.hasError) {
            runValidationTasks("availability", value);
          }
          setAvailability(value);
        }}
        onBlur={() => runValidationTasks("availability", availability)}
        errorMessage={errors.availability?.errorMessage}
        hasError={errors.availability?.hasError}
        {...getOverrideProps(overrides, "availability")}
      ></TextField>
      <TextField
        label="Compatibility"
        isRequired={false}
        isReadOnly={false}
        value={compatibility}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility: value,
              attributes,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.compatibility ?? value;
          }
          if (errors.compatibility?.hasError) {
            runValidationTasks("compatibility", value);
          }
          setCompatibility(value);
        }}
        onBlur={() => runValidationTasks("compatibility", compatibility)}
        errorMessage={errors.compatibility?.errorMessage}
        hasError={errors.compatibility?.hasError}
        {...getOverrideProps(overrides, "compatibility")}
      ></TextField>
      <TextField
        label="Attributes"
        isRequired={false}
        isReadOnly={false}
        value={attributes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes: value,
              type,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.attributes ?? value;
          }
          if (errors.attributes?.hasError) {
            runValidationTasks("attributes", value);
          }
          setAttributes(value);
        }}
        onBlur={() => runValidationTasks("attributes", attributes)}
        errorMessage={errors.attributes?.errorMessage}
        hasError={errors.attributes?.hasError}
        {...getOverrideProps(overrides, "attributes")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type: value,
              marque,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Marque"
        isRequired={false}
        isReadOnly={false}
        value={marque}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque: value,
              Affiliate,
            };
            const result = onChange(modelFields);
            value = result?.marque ?? value;
          }
          if (errors.marque?.hasError) {
            runValidationTasks("marque", value);
          }
          setMarque(value);
        }}
        onBlur={() => runValidationTasks("marque", marque)}
        errorMessage={errors.marque?.errorMessage}
        hasError={errors.marque?.hasError}
        {...getOverrideProps(overrides, "marque")}
      ></TextField>
      <TextField
        label="Affiliate"
        isRequired={false}
        isReadOnly={false}
        value={Affiliate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              price,
              slug,
              images,
              badges,
              rating,
              reviews,
              availability,
              compatibility,
              attributes,
              type,
              marque,
              Affiliate: value,
            };
            const result = onChange(modelFields);
            value = result?.Affiliate ?? value;
          }
          if (errors.Affiliate?.hasError) {
            runValidationTasks("Affiliate", value);
          }
          setAffiliate(value);
        }}
        onBlur={() => runValidationTasks("Affiliate", Affiliate)}
        errorMessage={errors.Affiliate?.errorMessage}
        hasError={errors.Affiliate?.hasError}
        {...getOverrideProps(overrides, "Affiliate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
