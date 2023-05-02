/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
      id
      name
      userlog
      mdps
      adress
      tel_contact
      email_contact
      createdAt
      updatedAt
    }
  }
`;
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userlog
        mdps
        adress
        tel_contact
        email_contact

      }

    }
  }
`;
export const getType = /* GraphQL */ `
  query GetType($id: ID!) {
    getType(id: $id) {
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
export const listTypes = /* GraphQL */ `
  query ListTypes(
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        suppliersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const typesBySuppliersID = /* GraphQL */ `
  query TypesBySuppliersID(
    $suppliersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    typesBySuppliersID(
      suppliersID: $suppliersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        suppliersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSuppliers = /* GraphQL */ `
  query GetSuppliers($id: ID!) {
    getSuppliers(id: $id) {
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
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSuppliersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        usersID

      }
      
    }
  }
`;
export const suppliersByUsersID = /* GraphQL */ `
  query SuppliersByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSuppliersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    suppliersByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        password
        usersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMarque = /* GraphQL */ `
  query GetMarque($id: ID!) {
    getMarque(id: $id) {
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
export const listMarques = /* GraphQL */ `
  query ListMarques(
    $filter: ModelMarqueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarques(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        typeID
        suppliersID

      }

    }
  }
`;
export const marquesByTypeID = /* GraphQL */ `
  query MarquesByTypeID(
    $typeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMarqueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marquesByTypeID(
      typeID: $typeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        typeID
        suppliersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const marquesBySuppliersID = /* GraphQL */ `
  query MarquesBySuppliersID(
    $suppliersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMarqueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marquesBySuppliersID(
      suppliersID: $suppliersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slug
        typeID
        suppliersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const productsByMarqueID = /* GraphQL */ `
  query ProductsByMarqueID(
    $marqueID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByMarqueID(
      marqueID: $marqueID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const productsBySuppliersID = /* GraphQL */ `
  query ProductsBySuppliersID(
    $suppliersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsBySuppliersID(
      suppliersID: $suppliersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
