---
title:
  - "Mastering CSS Grid:"
  - A Comprehensive
  - Guide for Front-End
  - Developers
description: "Discover CSS grid"
publishDate: "2023-05-15"
updateDate: "2023-10-26"
authors:
  - cedric
category: css
tags:
  - responsive
  - layout
  - css
  - grid
coverImage: "./images/grid-pm.jpg"
coverImageAlt: "Colourful neon glowing grids"
socialImage: "./images/grid.jpg"
lang: "en"
featured: true
---

CSS Grid is a powerful layout system that has revolutionized the way we design and structure web pages. With its intuitive syntax and flexible capabilities, CSS Grid empowers front-end developers to create complex and responsive layouts with ease. In this article, we will explore the basics of CSS Grid and showcase examples of layouts that can be achieved using this amazing tool.

## Understanding CSS Grid

CSS Grid works by dividing a web page into a grid of rows and columns, allowing you to precisely position and align elements within the grid cells. It introduces two primary components: the parent container (grid container) and its child elements (grid items). Let's dive into the key concepts of CSS Grid:

- **Grid Container**: The parent element that establishes the grid context. You can apply display: grid to any container to activate CSS Grid.
- **Grid Items**: The child elements of the grid container that are placed inside the grid cells. These items can be explicitly placed or allowed to flow automatically within the grid.
- **Grid Lines**: The horizontal and vertical lines that divide the grid into rows and columns, forming grid tracks.
- **Grid Tracks**: The spaces between grid lines that define the size of rows and columns.
- **Grid Areas**: The rectangular areas formed by the intersection of grid rows and columns, enabling you to group and manipulate related grid items.

Now that we have a basic understanding of CSS Grid, let's explore some practical examples to showcase its versatility.

## Example Layouts with CSS Grid

### Basic Grid

In this example, we create a basic grid layout with three equally sized columns and a 10-pixel gap between grid items.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

.grid-item {
  background-color: var(--surface-2);
  padding: 20px;
}
```

```html
<div class="grid-container">
  <div class="grid-item">Grid Item 1</div>
  <div class="grid-item">Grid Item 2</div>
  <div class="grid-item">Grid Item 3</div>
  <div class="grid-item">Grid Item 4</div>
  <div class="grid-item">Grid Item 5</div>
  <div class="grid-item">Grid Item 6</div>
</div>
```

<div class="not-content" style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 10px;overflow-x: scroll;">
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 1</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 2</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 3</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 4</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 5</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 6</div>
</div>

### Responsive Grid

This layout demonstrates the power of CSS Grid in creating responsive designs. The `repeat(auto-fit, minmax(250px, 1fr))` rule ensures that the grid adapts to the available space, with a minimum width of 250 pixels per column.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
```

```html
<div class="grid-container">
  <div class="grid-item">Grid Item 1</div>
  <div class="grid-item">Grid Item 2</div>
  <div class="grid-item">Grid Item 3</div>
  <div class="grid-item">Grid Item 4</div>
  <div class="grid-item">Grid Item 5</div>
  <div class="grid-item">Grid Item 6</div>
</div>
```

<div class="not-content" style="display: block;resize: both;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); grid-gap: 20px;">
    <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 1</div>
    <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 2</div>
    <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 3</div>
    <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 4</div>
    <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 5</div>
    <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 6</div>
  </div>
</div>

### Masonry Layout

The masonry layout is achieved by using `repeat(auto-fill, minmax(200px, 1fr))` to create a flexible grid with columns of at least 200 pixels wide. `The grid-row-end: span 2` rule makes certain grid items span across two rows, creating the irregular brick-like pattern.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
}

.grid-item {
  grid-row-end: span 2;
}
```

```html
<div class="grid-container">
  <div class="grid-item">Grid Item 1</div>
  <div>Grid Item 2</div>
  <div class="grid-item">Grid Item 3</div>
  <div class="grid-item">Grid Item 4</div>
  <div>Grid Item 5</div>
  <div>Grid Item 6</div>
</div>
```

<div class="not-content" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 20px;">
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px; grid-row-end: span 2;">Grid Item 1</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 2</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px; grid-row-end: span 2;">Grid Item 3</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px; grid-row-end: span 2">Grid Item 4</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;;">Grid Item 5</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px;">Grid Item 6</div>
</div>

### Holy Grail Layout

The Holy Grail layout is a classic example of a webpage with a header, footer, sidebar, and main content area. CSS Grid simplifies this complex layout by utilizing grid-column and grid-row properties to position each element within the grid cells.

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-gap: 20px;
}

.header,
.footer {
  grid-column: 1 / -1;
}

.sidebar {
  grid-row: 2;
}

.content {
  grid-column: 2 / -1;
  grid-row: 2;
}
```

```html
<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

<div class="not-content" style="display: grid; grid-template-columns: 1fr 2fr 1fr; grid-template-rows: auto 1fr auto; grid-gap: 20px;">
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px; grid-column: 1 / -1;">Header</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px; grid-row: 2;">Sidebar</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px; grid-column: 2 / -1; grid-row: 2;">Content</div>
  <div style="background-color: var(--surface-2); color: var(--text-2); padding: 20px; grid-column: 1 / -1;">Footer</div>
</div>

### Image Gallery

This example showcases an image gallery with a responsive grid. By using `aspect-ratio` and `overflow: hidden` on grid items, we maintain the aspect ratio of images and prevent them from distorting.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
}

.grid-item {
  aspect-ratio: 1/1;
  overflow: hidden;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

```html
<div class="grid-container">
  <div class="grid-item">
    <img src="path/to/image1.jpg" alt="Image 1" />
  </div>
  <div class="grid-item">
    <img src="path/to/image2.jpg" alt="Image 2" />
  </div>
  <div class="grid-item">
    <img src="path/to/image3.jpg" alt="Image 3" />
  </div>
  <!-- Add more grid items as needed -->
</div>
```

<div class="not-content" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 10px;">
  <div style="aspect-ratio: 1/1; overflow: hidden;">
    <img src="https://picsum.photos/300/300?random=1" alt="Image 1" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div style="aspect-ratio: 1/1; overflow: hidden;">
    <img src="https://picsum.photos/300/300?random=2" alt="Image 2" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div style="aspect-ratio: 1/1; overflow: hidden;">
    <img src="https://picsum.photos/300/300?random=3" alt="Image 3" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div style="aspect-ratio: 1/1; overflow: hidden;">
    <img src="https://picsum.photos/300/300?random=4" alt="Image 4" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div style="aspect-ratio: 1/1; overflow: hidden;">
    <img src="https://picsum.photos/300/300?random=5" alt="Image 5" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div style="aspect-ratio: 1/1; overflow: hidden;">
    <img src="https://picsum.photos/300/300?random=6" alt="Image 6" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <!-- Add more grid items as needed -->
</div>

---

These examples demonstrate only a fraction of what CSS Grid is capable of. With its extensive set of properties and functions, you can create intricate and customized layouts to suit your specific design requirements.

## Conclusion

CSS Grid is a game-changer for front-end developers, providing a powerful and intuitive way to create flexible and responsive layouts. By understanding the fundamental concepts of CSS Grid and exploring practical examples, you can unlock its full potential and take your web design skills to the next level. Experiment, play around, and embrace the endless possibilities that CSS Grid has to offer!
