# TODO - Industrial Editorial

## Vision

Construire une identité **Industrial Editorial** :

- expertise industrielle et technique
- esthétique éditoriale forte
- typographie comme élément graphique principal
- inspiration béton, acier, signalétique et documentation industrielle
- palette sobre avec rares accents de couleur vive
- priorité à la lecture, au contenu et à la transmission du savoir

---

# État actuel

## Fondations

- [x] Migration Astro 7
- [x] Déploiement Netlify validé
- [x] Passage à Roslindale Variable
- [x] Définition des axes typographiques
- [x] Rééquilibrage de la grille article
- [x] Suppression des branches historiques (v2 / brutalism / redesign)
- [x] Formalisation du style "Industrial Editorial"

### Palette

- [x] Création d'une palette matériaux

  - graphite
  - fonte
  - acier
  - béton
  - papier

- [x] Création d'une palette signal

  - orange
  - rouge
  - jaune
  - vert
  - bleu

- [x] Migration du vocabulaire neon → signal
- [x] Extraction des couleurs vers props.css
- [x] Suppression des couleurs en dur dans theme.css
- [x] Fallback sRGB
- [x] Palette OKLCH large gamut
- [x] Support P3 / Wide Gamut

### Mise en page

- [x] Rééquilibrage Taxonomie / Article / TOC
- [x] Validation de la grille desktop

### Expérience de lecture

- [x] Mise en place d'un chapô éditorial
- [x] Transformation du premier paragraphe en résumé exécutif
- [x] Utilisation de la couleur signal comme repère éditorial

---

# Priorité 1 - Expérience de lecture

## Typographie variable Roslindale

### Réalisé

- [x] Migration vers Roslindale Variable
- [x] Utilisation de wght / wdth / opsz
- [x] Mise à jour du layout article

### À valider

- [ ] Choisir définitivement le poids du corps de texte

  - [ ] tester 425
  - [ ] tester 450
  - [ ] tester 475

- [ ] Vérifier Safari
- [ ] Vérifier iPhone / iPad
- [ ] Vérifier très grands écrans (>1600px)

---

## Chapô éditorial

Objectif :

Transformer le premier paragraphe en résumé exécutif.

### Réalisé

- [x] Identifier automatiquement le premier paragraphe
- [x] Le distinguer du corps de texte
- [x] Créer un bloc de type « résumé exécutif »
- [x] L'intégrer à la grille Industrial Editorial
- [x] Utiliser la couleur signal avec parcimonie

### À valider

- [ ] Tester sur plusieurs articles
- [ ] Évaluer la lisibilité sur les articles longs
- [ ] Vérifier mobile
- [ ] Vérifier impression

---

## Rythme vertical

Objectif :

Augmenter la sensation de confort de lecture.

Actions :

- [ ] Revoir les espacements entre paragraphes
- [ ] Revoir les espacements avant/après titres
- [ ] Revoir les espacements avant/après blocs de code
- [ ] Vérifier le rythme de lecture sur les articles longs

---

## Table of Contents

Objectif :

Faire ressembler la TOC à un index technique.

Actions :

- [ ] Augmenter légèrement la taille
- [ ] Tester une hiérarchie typographique différente
- [ ] Retravailler les états hover
- [ ] Améliorer la visibilité de la section active
- [ ] Renforcer l'aspect documentation technique
- [ ] Vérifier la cohérence avec la palette Industrial Editorial

---

# Priorité 2 - Accessibilité

## Contrastes

Objectif :

Atteindre AAA partout où cela est raisonnablement possible.

Actions :

- [ ] Vérifier les contrastes réels page par page
- [ ] Audit WCAG
- [ ] Validation dark mode
- [ ] Validation light mode

---

## Navigation

Actions :

- [ ] Audit Lighthouse
- [ ] Audit DevTools Accessibility
- [ ] Vérifier navigation clavier
- [ ] Vérifier focus states
- [ ] Vérifier liens dans le contenu
- [ ] Vérifier skip links

---

# Priorité 3 - Design System

## Couleurs

Objectif :

Formaliser les règles d'utilisation de la couleur.

Actions :

- [ ] Réduire les usages décoratifs de l'orange
- [ ] Réserver la couleur signal aux éléments importants
- [ ] Définir une hiérarchie claire des couleurs signal
- [ ] Définir les cas d'usage :
  - accent
  - information
  - succès
  - avertissement
  - danger

---

## Industrial Editorial

Formaliser les principes du design system.

### Réalisé

- [x] Typographie comme élément graphique principal
- [x] Couleur signal utilisée avec parcimonie
- [x] Grille éditoriale trois colonnes
- [x] Chapô type résumé exécutif

### À formaliser

- [ ] Hiérarchie typographique
- [ ] Échelle d'espacement
- [ ] Usage de la couleur signal
- [ ] Règles de mise en page
- [ ] Composants éditoriaux

---

# Priorité 4 - Page d'accueil

## Approche magazine

Objectif :

Faire de la home une publication plutôt qu'une simple liste de billets.

Actions :

- [ ] Identifier un article vedette
- [ ] Renforcer la hiérarchie article principal / secondaires
- [ ] Réfléchir à une logique featured article
- [ ] Tester des regroupements thématiques
- [ ] Revoir la grille générale de la page

---

## Cartes d'articles

Actions :

- [ ] Renforcer le poids des titres
- [ ] Réduire le bruit des métadonnées
- [ ] Harmoniser les tags
- [ ] Vérifier mobile
- [ ] Vérifier cohérence avec Industrial Editorial

---

# Priorité 5 - Raffinement visuel

## Grille

À vérifier :

- [ ] Toutes les largeurs de contenu
- [ ] Très grands écrans
- [ ] Petits laptops
- [ ] Tablettes

---

## Footer

Actions :

- [ ] Vérifier la hiérarchie des colonnes
- [ ] Vérifier la lisibilité
- [ ] Simplifier si nécessaire

---

# Technique

## CSS

- [ ] Supprimer @charset inutile
- [ ] Nettoyer fonts.css
- [ ] Supprimer définitivement les anciennes familles Roslindale
- [ ] Éliminer les warnings Vite liés aux polices
- [ ] Nettoyer les variables obsolètes

---

## Astro

- [ ] Migrer markdown.remarkPlugins vers unified()
- [ ] Vérifier les dépendances majeures restantes
- [ ] Étudier date-fns v4
- [ ] Étudier postcss-preset-env v11

---

# Documentation

## Design System

Créer une page documentant :

- palette matériaux
- palette signal
- hiérarchie typographique
- principes d'accessibilité
- grille éditoriale
- composants

---

## Page manifeste

Écrire :

# Industrial Editorial

Documenter :

- la philosophie
- les inspirations
- les matériaux visuels
- les choix typographiques
- les couleurs
- les principes de conception

---

# Idées futures

## Industrial Knowledge Garden

Explorer :

- notes techniques
- concepts industriels
- cartes de connaissances
- liens entre articles
- parcours de lecture

---

## Citations

Créer un composant citation éditorial pour :

- industrie
- management
- amélioration continue
- systèmes
- IA

---

## Long terme

Faire évoluer le site de :

« blog personnel »

vers :

« publication éditoriale spécialisée sur l'industrie, les systèmes, la performance et l'IA ».
