# Design Splitwise

## Requirements

### Functional requirements

1. New users can be added
2. New groups can be created, and users can be added to groups
3. Expense can be tracked into a group
4. Expense can be made by users, and money can be owed by users
5. Find how much a user owes/is owed
6. Total expenses of a group

### Non functional requirements

1. Auth
2. Security
3. Availibilty
4. Access Management
5. Concurrency
6. Caching
7. Portability

## Bottom up approach

### Actors involved

User

### Enitites involved

User
Group
Expense

### Models

```typescript
User {
  id: string;
  name: string;
}

GroupVsUser {
  group_id: string;
  user_id: string;
}

Group {
    id: string;
    name: string;
},

Expense {
    id: string;
    name: string;
    group_id: string;
}

Balance {
    expense_id: string;
    user_id: string;
    // amount +ve means the user payed the amount
    // amount -ve means the user owes the amount
    amount: number;
    currency: 'INR';
}

old_balance {
    user_id: string;
    total_amount_owed: number;
}

restaraunt ->
Tatha-> +100,
tiw-> +200,
tathagat -> -50,
barde -> -250

```

Services

- UserService

  - Adds new users to the service
  - CRUD on users
  - Given User_id, tells how much the user is owed in total
    - ask group service on how many groups this user is part of
    -

- GroupService

  - Adds new groups
  - Adds Users to groups

- ExpenseService
  - Given group_id, tells total spending of the group
  - Creation of expense for the group
  - Creation of balance for the expense
  -

## API CONTRACT

### METHOD ROUTE REQBODY RESBODY

```typescript

```

```typescript

```

```bash
npm init -y
npm i express dotenv typescript @tsconfig/node18 compression body-parser cors module-alias tstl
npm i -D typescript @types/express @types/node @types/compression @types/cors concurrently nodemon
npx tsc --init
```
