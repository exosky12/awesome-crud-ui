# AwesomeCRUD

**AwesomeCRUD** est une application web qui permet de gérer des projets avec des opérations de création, lecture, mise à jour et suppression (CRUD). Cette application utilise React pour l'interface utilisateur et une API pour la gestion des données.

## Fonctionnalités

- **Afficher la liste de tous les projets** : Visualisez tous les projets créés.
- **Créer un projet** : Ajoutez un nouveau projet avec un nom et une description.
- **Mettre à jour un projet** : Modifiez le nom et la description d'un projet existant.
- **Supprimer un projet** : Retirez un projet de la liste.
- **Afficher un projet** : Consultez les détails d'un projet spécifique.

## Installation du projet

### Prérequis

- Node.js version 20 ou supérieure

### Étapes d'installation

1. **Clonez le front** :

```bash
git clone https://github.com/exosky12/awesome-crud-ui.git
cd awesome-crud-ui
```

2. **Installez les dépendances** :

```bash
pnpm install
```

Pour démarrer l'application, exécutez la commande suivante :

```bash
pnpm run dev
```

L'application sera disponible à l'adresse suivante : [http://localhost:5173](http://localhost:5173)

3. **Clonez l'api** :

```bash
git clone https://github.com/BearStudio/basic-crud-exercise.git
cd basic-crud-exercise
```

4. **Installez les dépendances** :

```bash
pnpm install
```

5. **Créer la db** :

```bash
pnpm db:push
```

## Lancer l'API

Pour démarrer l'API, exécutez la commande suivante :

```bash
pnpm dev:api
```

L'API sera disponible à l'adresse suivante : [http://localhost:4000/api/v1](http://localhost:4000/api/v1)

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
