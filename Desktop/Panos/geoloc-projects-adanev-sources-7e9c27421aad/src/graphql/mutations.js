/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      id
      name
      userlog
      mdps
      adress
      tel_contact
      email_contact
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      name
      userlog
      mdps
      adress
      tel_contact
      email_contact

    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      id
      name
      userlog
      mdps
      adress
      tel_contact
      email_contact

    }
  }
`;
export const createType = /* GraphQL */ `
  mutation CreateType(
    $input: CreateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    createType(input: $input, condition: $condition) {
      id
      name
      Marques {
        nextToken
      }
      suppliersID
    }
  }
`;
export const updateType = /* GraphQL */ `
  mutation UpdateType(
    $input: UpdateTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    updateType(input: $input, condition: $condition) {
      id
      name
      Marques {
        nextToken
      }
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const deleteType = /* GraphQL */ `
  mutation DeleteType(
    $input: DeleteTypeInput!
    $condition: ModelTypeConditionInput
  ) {
    deleteType(input: $input, condition: $condition) {
      id
      name
      Marques {
        nextToken
      }
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const createSuppliers = /* GraphQL */ `
  mutation CreateSuppliers(
    $input: CreateSuppliersInput!
    $condition: ModelSuppliersConditionInput
  ) {
    createSuppliers(input: $input, condition: $condition) {
      id
      name
      email
      password
      usersID
    }
  }
`;
export const updateSuppliers = /* GraphQL */ `
  mutation UpdateSuppliers(
    $input: UpdateSuppliersInput!
    $condition: ModelSuppliersConditionInput
  ) {
    updateSuppliers(input: $input, condition: $condition) {
      id
      name
      email
      password
      usersID
      Types {
        nextToken
      }
      Marques {
        nextToken
      }
      Products {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSuppliers = /* GraphQL */ `
  mutation DeleteSuppliers(
    $input: DeleteSuppliersInput!
    $condition: ModelSuppliersConditionInput
  ) {
    deleteSuppliers(input: $input, condition: $condition) {
      id
      name
      email
      password
      usersID
      Types {
        nextToken
      }
      Marques {
        nextToken
      }
      Products {
        nextToken
      }
    }
  }
`;
export const createMarque = /* GraphQL */ `
  mutation CreateMarque(
    $input: CreateMarqueInput!
    $condition: ModelMarqueConditionInput
  ) {
    createMarque(input: $input, condition: $condition) {
      id
      name
      slug
      typeID
      Products {
        nextToken
      }
      suppliersID

    }
  }
`;
export const updateMarque = /* GraphQL */ `
  mutation UpdateMarque(
    $input: UpdateMarqueInput!
    $condition: ModelMarqueConditionInput
  ) {
    updateMarque(input: $input, condition: $condition) {
      id
      name
      slug
      typeID
      Products {
        nextToken
      }
      suppliersID
      createdAt
      updatedAt
    }
  }
`;
export const deleteMarque = /* GraphQL */ `
  mutation DeleteMarque(
    $input: DeleteMarqueInput!
    $condition: ModelMarqueConditionInput
  ) {
    deleteMarque(input: $input, condition: $condition) {
      id
      name
      slug
      typeID
      Products {
        nextToken
      }
      suppliersID
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      name
      description
      price
      slug
      images
      badges
      rating
      reviews
      availability
      compatibility
      attributes
      marqueID
      suppliersID
      type
      marque
      Affiliate

    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      name
      description
      price
      slug
      images
      badges
      rating
      reviews
      availability
      compatibility
      attributes
      marqueID
      suppliersID
      type
      marque
      Affiliate
      createdAt
      updatedAt
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      name
      description
      price
      slug
      images
      badges
      rating
      reviews
      availability
      compatibility
      attributes
      marqueID
      suppliersID
      type
      marque
      Affiliate
      createdAt
      updatedAt
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      name
      email
      password
      Suppliers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      name
      email
      password
      Suppliers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      name
      email
      password
      Suppliers {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
