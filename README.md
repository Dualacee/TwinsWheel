# TwinswHeel — Homepage

Page d'accueil statique : HTML, CSS et JavaScript, sans dépendance ni étape de build.

## Structure

```
site/
├── index.html          contenu de la page
├── css/styles.css      tokens de couleur, composants, sections, responsive
├── js/main.js          révélation au scroll, parallaxe, menu burger
└── assets/img/         logo SVG + photos produit
netlify.toml            configuration de déploiement
```

## Développement local

Ouvrir `site/index.html` dans un navigateur suffit. Pour servir le dossier sur un port local :

```bash
npx --yes serve site
```

## Déploiement Netlify

`netlify.toml` déclare `publish = "site"` et aucune commande de build. Sur Netlify :
« Add new site » → « Import an existing project » → ce dépôt. Les réglages sont lus
depuis `netlify.toml`, il n'y a rien à saisir.

## Points à reprendre

- La section « Qui sommes-nous » utilise une photo de droïde en ville faute de
  photo d'atelier disponible.
- Les photos produit de la gamme sont en 300 × 300 : suffisant aux tailles
  actuelles, à remplacer par des exports pleine résolution avant d'agrandir ces cartes.
- Les liens de navigation secondaires pointent tous vers `#contact` : il n'y a pas
  encore de pages internes.
