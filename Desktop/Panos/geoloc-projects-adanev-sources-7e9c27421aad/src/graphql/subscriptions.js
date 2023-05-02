/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
export const onCreateType = /* GraphQL */ `
  subscription OnCreateType($filter: ModelSubscriptionTypeFilterInput) {
    onCreateType(filter: $filter) {
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
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType($filter: ModelSubscriptionTypeFilterInput) {
    onUpdateType(filter: $filter) {
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
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType($filter: ModelSubscriptionTypeFilterInput) {
    onDeleteType(filter: $filter) {
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
export const onCreateSuppliers = /* GraphQL */ `
  subscription OnCreateSuppliers(
    $filter: ModelSubscriptionSuppliersFilterInput
  ) {
    onCreateSuppliers(filter: $filter) {
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
export const onUpdateSuppliers = /* GraphQL */ `
  subscription OnUpdateSuppliers(
    $filter: ModelSubscriptionSuppliersFilterInput
  ) {
    onUpdateSuppliers(filter: $filter) {
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
export const onDeleteSuppliers = /* GraphQL */ `
  subscription OnDeleteSuppliers(
    $filter: ModelSubscriptionSuppliersFilterInput
  ) {
    onDeleteSuppliers(filter: $filter) {
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
export const onCreateMarque = /* GraphQL */ `
  subscription OnCreateMarque($filter: ModelSubscriptionMarqueFilterInput) {
    onCreateMarque(filter: $filter) {
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
export const onUpdateMarque = /* GraphQL */ `
  subscription OnUpdateMarque($filter: ModelSubscriptionMarqueFilterInput) {
    onUpdateMarque(filter: $filter) {
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
export const onDeleteMarque = /* GraphQL */ `
  subscription OnDeleteMarque($filter: ModelSubscriptionMarqueFilterInput) {
    onDeleteMarque(filter: $filter) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
