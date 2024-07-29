export const template5 = {
  tables: [
    {
      id: 0,
      name: "accounts",
      x: 129,
      y: 92,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "customer_id",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
        },
        {
          name: "type",
          type: "ENUM",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
          values: ["checking", "savings"],
        },
        {
          name: "number",
          type: "BIGINT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 3,
        },
        {
          name: "balance",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 4,
          size: "",
        },
      ],
      comment: "",
      indices: [],
      color: "#7d9dff",
    },
    {
      id: 1,
      name: "customers",
      x: 384,
      y: 315,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "first_name",
          type: "VARCHAR",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
          size: 255,
        },
        {
          name: "last_name",
          type: "VARCHAR",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
          size: 255,
        },
        {
          name: "phone",
          type: "VARCHAR",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 3,
          size: 255,
        },
        {
          name: "address",
          type: "VARCHAR",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 4,
          size: 255,
        },
      ],
      comment: "",
      indices: [],
      color: "#32c9b0",
    },
    {
      id: 2,
      name: "transactions",
      x: 431,
      y: 4,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "account_id",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
        },
        {
          name: "time",
          type: "DATETIME",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
          size: "",
          values: [],
        },
        {
          name: "type",
          type: "ENUM",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 3,
          values: ["withdrawal", "deposit"],
        },
        {
          name: "amount",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 4,
          size: "",
        },
      ],
      comment: "",
      indices: [],
      color: "#3cde7d",
    },
    {
      id: 3,
      name: "transfers",
      x: 112,
      y: 358,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "from",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
        },
        {
          name: "to",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
        },
        {
          name: "time",
          type: "DATETIME",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 3,
          size: "",
          values: [],
        },
        {
          name: "amount",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 4,
          size: "",
        },
      ],
      comment: "",
      indices: [],
      color: "#89e667",
    },
    {
      id: 4,
      name: "cards",
      x: 772,
      y: 29,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "type",
          type: "ENUM",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
          values: ["visa", "master"],
        },
        {
          name: "customer_id",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
        },
        {
          name: "number",
          type: "BIGINT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 3,
        },
        {
          name: "limit",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 4,
          size: "",
        },
      ],
      comment: "",
      indices: [],
      color: "#ffe159",
    },
    {
      id: 5,
      name: "loans",
      x: 919,
      y: 281,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "customer_id",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
        },
        {
          name: "amount",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
          size: "",
        },
        {
          name: "rate",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 3,
          size: "",
        },
        {
          name: "term",
          type: "DATE",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 4,
          size: "",
          values: [],
        },
        {
          name: "status",
          type: "ENUM",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 5,
          values: ["paid", "approved"],
        },
      ],
      comment: "",
      indices: [],
      color: "#ff9159",
    },
    {
      id: 6,
      name: "investments",
      x: 664,
      y: 395,
      fields: [
        {
          name: "id",
          type: "INT",
          default: "",
          check: "",
          primary: true,
          unique: true,
          notNull: true,
          increment: true,
          comment: "",
          id: 0,
        },
        {
          name: "customer_id",
          type: "INT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 1,
        },
        {
          name: "type",
          type: "ENUM",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 2,
          values: ["mutual-fund", "stock"],
        },
        {
          name: "amount",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 3,
          size: "",
        },
        {
          name: "date",
          type: "DATE",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 4,
          size: "",
          values: [],
        },
        {
          name: "current_val",
          type: "FLOAT",
          default: "",
          check: "",
          primary: false,
          unique: false,
          notNull: false,
          increment: false,
          comment: "",
          id: 5,
          size: "",
        },
      ],
      comment: "",
      indices: [],
      color: "#f03c3c",
    },
  ],
  relationships: [
    {
      startTableId: 0,
      startFieldId: 1,
      endTableId: 1,
      endFieldId: 0,
      name: "accounts_customer_id_fk",
      cardinality: "Many to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      id: 0,
    },
    {
      startTableId: 4,
      startFieldId: 2,
      endTableId: 1,
      endFieldId: 0,
      name: "cards_customer_id_fk",
      cardinality: "Many to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      id: 1,
    },
    {
      startTableId: 5,
      startFieldId: 1,
      endTableId: 1,
      endFieldId: 0,
      name: "loans_customer_id_fk",
      cardinality: "Many to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      id: 2,
    },
    {
      startTableId: 6,
      startFieldId: 1,
      endTableId: 1,
      endFieldId: 0,
      name: "investments_customer_id_fk",
      cardinality: "Many to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      id: 3,
    },
    {
      startTableId: 2,
      startFieldId: 1,
      endTableId: 0,
      endFieldId: 0,
      name: "transactions_account_id_fk",
      cardinality: "Many to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      id: 4,
    },
    {
      startTableId: 3,
      startFieldId: 2,
      endTableId: 0,
      endFieldId: 0,
      name: "transfers_to_fk",
      cardinality: "Many to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      id: 5,
    },
    {
      startTableId: 3,
      startFieldId: 1,
      endTableId: 0,
      endFieldId: 0,
      name: "transfers_from_fk",
      cardinality: "Many to one",
      updateConstraint: "No action",
      deleteConstraint: "No action",
      id: 6,
    },
  ],
  notes: [],
  subjectAreas: [],
  types: [],
  title: "Bank schema",
  description:
    "A financial schema designed to manage financial transactions, accounts, customers, and other aspects of financial data.",
  custom: 0,
};
