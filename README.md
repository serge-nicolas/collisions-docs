# Collisions - Jeu de Rôle

Documentation et règles du jeu de rôle Collisions, un univers fantastique riche en races inhumaines et en mystères.

## À propos

Collisions est un système de jeu de rôle sur table (tabletop RPG) avec un univers original peuplé de races fantastiques uniques. Le projet comprend une documentation complète des règles, du monde, et des différentes races jouables, le tout présenté dans un site web interactif construit avec VitePress.

## Races Jouables

Le jeu présente de nombreuses races inhumaines uniques.

## Caractéristiques du Système

- Système de compétences et de caractéristiques adapté à chaque race
- Magie basée sur des runes et rituels élémentaires
- Avantages raciaux uniques (chitine naturelle, vision nocturne, production de toile, etc.)
- Monde riche avec une histoire complexe impliquant des "collisions" entre mondes

## Installation

### Prérequis

- Node.js >= 22
- npm >= 9

### Configuration

1. Clonez le dépôt :
   ```bash
   git clone <repository-url>
   cd collisions
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

### Développement Local

Pour lancer le serveur de documentation en mode développement :
```bash
npm run docs:dev
```

Le site sera accessible à l'adresse `http://localhost:5173/`

### Construction du Site

Pour construire le site statique :
```bash
npm run docs:build
```

### Prévisualisation

Pour prévisualiser le site construit :
```bash
npm run docs:preview
```

### Déploiement

Le projet supporte le déploiement automatique sur Surge.sh :

- Déployer la branche courante :
  ```bash
  npm run dev:deploy:branch
  ```

- Déployer un commit spécifique :
  ```bash
  npm run dev:deploy:commit
  ```

## Structure du Projet

```
collisions/
├── README.md              # Ce fichier
├── package.json           # Configuration npm et scripts
├── vite.config.ts         # Configuration Vite
├── VERSIONS.yaml          # Historique des déploiements
├── docs/                  # Documentation source
│   ├── index.md          # Page d'accueil
│   ├── le-monde.md       # Description du monde
│   ├── les-races/        # Documentation des races
│   │   ├── araknes.md    # Les Araknes
│   │   ├── carkages.md   # Les Carkages
│   │   └── ...           # Autres races
│   └── images/           # Illustrations
├── dist/                  # Site construit (généré)
└── __sources/            # Documents sources originaux
```

## Technologies Utilisées

- **VitePress** - Générateur de site statique pour la documentation
- **Flexsearch** - Recherche intégrée dans la documentation
- **pdf2md** - Conversion de PDF en Markdown pour l'import de contenu
- **Surge.sh** - Hébergement et déploiement

## Contribution

Les contributions sont les bienvenues pour enrichir l'univers de Collisions !

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/NouvellRace`)
3. Commitez vos changements (`git commit -m 'Ajout de la race des Sylvains'`)
4. Poussez vers la branche (`git push origin feature/NouvelleRace`)
5. Ouvrez une Pull Request

### Guidelines pour les Contributions

- Respectez le format Markdown existant pour les races
- Incluez des illustrations si possible
- Maintenez la cohérence avec l'univers établi
- Testez vos changements avec `npm run docs:dev`

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Pour toute question concernant le système de jeu ou l'univers de Collisions, n'hésitez pas à ouvrir une issue sur GitHub.

## Remerciements

- Tous les contributeurs qui enrichissent l'univers de Collisions
- La communauté VitePress pour l'excellent framework de documentation
- Les joueurs qui donnent vie à cet univers fantastique
