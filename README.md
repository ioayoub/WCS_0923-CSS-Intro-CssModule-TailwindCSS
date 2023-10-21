# Demo React avec CSS modules et TailwindCSS

>DISCLAIMER : Ce projet n'est pas un projet React complet. Il s'agit juste d'un exemple d'utilisation de React avec CSS modules et TailwindCSS.

## Description

Ce projet est un exemple de projet React avec CSS modules et TailwindCSS.


Il s'agit de vous présenter des alternatives à l'utilisation de CSS classique avec React. 

Il n'y a pas de bonne ou de mauvaise solution, tout dépend de vos besoins et de vos préférences.

Il existe d'autres alternatives à CSS modules et TailwindCSS, comme Styled Components par exemple alors soyez curieux et n'hésitez pas à tester différentes solutions.

## CSS Modules

Les CSS modules permettent de créer des classes CSS qui ne seront pas globales mais locales à un composant. Cela permet d'éviter les conflits de nommage entre les classes CSS des différents composants.

### Exemple d'utilisation

Voici un exemple de fichier CSS module :

```css
/* App.module.css */
.title {
  font-size: 2rem;
  font-weight: bold;
}
```

Et voici comment utiliser cette classe dans un composant React :

```jsx
import React from 'react';
import styles from './App.module.css';

const App = () => {
  return <h1 className={styles.title}>Hello World</h1>;
};

export default App;
```

### Exemple dans le projet

Dans le projet, les fichiers CSS modules sont nommés avec l'extension `.module.css` et sont importés dans les composants React avec la syntaxe suivante :

```jsx
import styles from './App.module.css';
```

Rendez vous dans le dossier `src/components/description` ou `src/components/navbar`  pour voir des exemples de composants React avec des fichiers CSS modules.

## TailwindCSS

TailwindCSS est un framework CSS qui permet de créer des classes CSS qui seront ensuite utilisées dans les composants React. Cela permet de ne pas avoir à écrire de CSS et de se concentrer sur le code React.

### Exemple d'utilisation

Voici un exemple de fichier CSS avec TailwindCSS :

```css
/* App.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Et voici comment utiliser ces classes dans un composant React :

```jsx
import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-2xl font-bold">Hello World</h1>
    </div>
  );
};

export default App;
```

### Exemple dans le projet

Vous pouvez retrouver un exemple concret d'utilisation dans le composant `src/components/descriptionbis/Descriptionbis.jsx`.