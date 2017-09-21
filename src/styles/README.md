# What is CSS

### Table of Contents
* [Getting Started](#getting-started)
* [Files and Folders](#files-and-folders)
* [Naming convention](#naming-convention)

## Getting Started
It is not mandatory, but is recommended to use [BEM](http://getbem.com/) methodology
when creating CSS rules/classes.

Since Angular >1.5 is based on components (as well as Angular2, Polymer, ReactJS, etc),
it's great do have our SCSS files divided on the same way, so we will get:

* Easy and almost-automated class naming
* Easy finding for our css rules
* Avoid conflicts between rules/components
* Avoid conflicts between your mashup and external elements

## Files and Folders
In order to achieve this, we'll create/maintain the following folder structure:
```js
{
  styles: [
    abstracts: [
      _functions.scss,    // Custom functions
      _mixins.scss,       // Custom mixins
      _variables.scss,    // Custom variables
    ],
    base: [
      _base.scss          // Base rules, for <html> or <body> tags, reseting rules, etc.
      _helpers.scss,      // Generic rules (like .align-left)
    ],
    components: [
      forms: [
        _input.scss,      // Custom styles for input elements
        _checkbox.scss,
        ...,
      ],
      _header.scss,       // Custom components
      _footer.scss,
      _sidebar.scss,
      _modal.scss,
      ...
    ],
    vendor: [
      bootstrap.scss,     // Any external css you need to use
    ],
    main.scss,            // File where you're @importing all .scss files
    custom-theme.scss     // If you need to override some variables, such as colors, sizes, etc.
  ]
}
```

## Naming convention
As I said previously, we're trying to follow [BEM](http://getbem.com/) methodology,
wich will allow us to create easy, modular and flexible CSS rules.

_Note: Here I'll explain the basics, if you want to know more, please visit [https://getbem.com](https://getbem.com)._

Basically, what BEM is proposing is to create classes following the pattern `Block-Element--Modifier`,
so if I'm going to style a Header, I will have these kind of classes:

* `.Header`: This is the _block_ class, that will wrap all elements on the Header. This
class allows us to style the wrapper of our module.
* `.Header-text`, `.Header-logo`: These are _elements_ classes, that are inside the _block_.
These classes allow us to style each element of our module.
* `.Header--sm`, `.Header--corporate`: These are _modifiers_ classes, and they allow us
to modify certain aspects of the elements/blocks.

So, applying this, we can have the next code:

```html
<!-- example.html -->
<header class="Header Header--sm">
  <span class="Header-logoWrapper">
    <img class="Header-logo" src="" />
  </span>
  <ul class="Header-menu">
    <li class="Header-menuItem">
      <a class="Header-link" href="">Home</a>
    </li>
    <li class="Header-menuItem is-active">
      <a class="Header-link" href="">About</a>
    </li>
  </ul>
</header>
```

```scss
// example.scss
.Header {
  position: absolute;
  top: 0;
  height: 48px;
  width: 100%;

  &-logoWrapper {
    display: inline-block;
    margin: 10px;
    height: 100%;
  }
  &-logo {
    height: 100%;
  }

  &--sm {
    height: 24px;
  }
}
```
