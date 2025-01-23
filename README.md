# AwesomeCRUD

**AwesomeCRUD** is a web application that allows you to manage projects with create, read, update, and delete (CRUD) operations. This app uses React for the user interface and an API for data management.

## Features

- **View all projects**: Display the list of all created projects.  
- **Create a project**: Add a new project with a name and description.  
- **Update a project**: Modify the name and description of an existing project.  
- **Delete a project**: Remove a project from the list.  
- **View project details**: Access detailed information about a specific project.  

## Project Setup

### Prerequisites

- Node.js version 20 or later

### Installation Steps

1. **Clone the frontend repository**:

    ```bash
    git clone https://github.com/exosky12/awesome-crud-ui.git
    cd awesome-crud-ui
    ```

2. **Install dependencies**:

    ```bash
    pnpm install
    ```

3. **Start the application**:

    ```bash
    pnpm run dev
    ```

    The application will be available at: [http://localhost:5173](http://localhost:5173)

4. **Clone the API repository**:

    ```bash
    git clone https://github.com/BearStudio/basic-crud-exercise.git
    cd basic-crud-exercise
    ```

5. **Install dependencies**:

    ```bash
    pnpm install
    ```

6. **Create the database**:

    ```bash
    pnpm db:push
    ```

## Start the API

To start the API, run:

```bash
pnpm dev:api
```

The API will be available at : [http://localhost:4000/api/v1](http://localhost:4000/api/v1)

## API documentation

### Get all projects

```
GET /api/v1/projects

QUERY
{
  page:     Number?
  pageSize: Number?
}

RESPONSE
{
  data: {
    id          String
    createdAt   DateTime
    updatedAt   DateTime
    name        String
    description String?
  }[]
  total:    Number
  page:     Number
  pageSize: Number
}
```

### Create a project

```
POST /api/v1/projects

BODY
{
  name        String
  description String?
}

RESPONSE
{
  data: {
    id          String
    createdAt   DateTime
    updatedAt   DateTime
    name        String
    description String?
  }
}
```

### Get a project by id

```
GET /api/v1/projects/:id

RESPONSE
{
  data: {
    id          String
    createdAt   DateTime
    updatedAt   DateTime
    name        String
    description String?
  }
}
```

### Update a project by id

```
PUT /api/v1/projects/:id

BODY
{
  "name": String,
  "description": String?,
}

RESPONSE
{
  data: {
    id          String
    createdAt   DateTime
    updatedAt   DateTime
    name        String
    description String?
  }
}
```

### Delete a project by id

```
DELETE /api/v1/projects/:id

RESPONSE
{
  data: {
    id          String
    createdAt   DateTime
    updatedAt   DateTime
    name        String
    description String?
  }
}
```

## Exercise

Create a UI for the following tasks

- Display the list of all projects
- Create a project with name and description
- Update a project name and description

Bonus tasks

- Delete a project
- Display a project
