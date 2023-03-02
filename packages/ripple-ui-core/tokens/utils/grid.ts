import StyleDictionary from 'style-dictionary'

StyleDictionary.registerFormat({
  name: 'utilities/gridClasses',
  formatter: function ({ dictionary }) {
    let output = `/**
 * Grid util
 *
 * This file is automatically generated, do not edit directly!
 */
.rpl-grid {
  display: grid;
  grid-template-columns: repeat(var(--local-grid-cols, ${dictionary.properties.steps.value}), minmax(0, 1fr));
  grid-template-rows: auto;
  gap: var(--rpl-sp-4);
  margin: 0;
  padding: 0;

  @media (--rpl-bp-m) {
    gap: var(--rpl-sp-6);
  }

  @media (--rpl-bp-xl) {
    gap: var(--rpl-sp-7);
  }

  /* No row-gap variant */
  &.rpl-grid--no-row-gap {
    row-gap: 0;
  }
}

/* Columns */

`
    for (let i = dictionary.properties.steps.value; i > 0; i--) {
      output += `/* Mobile */
.rpl-col-${i} {
  --local-grid-cols: ${i};

  grid-column-end: span ${i};
}

/* Small */
.rpl-col-${i}-s {
  @media (--rpl-bp-s) {
    --local-grid-cols: ${i};

    grid-column-end: span ${i};
  }
}

/* Medium */
.rpl-col-${i}-m {
  @media (--rpl-bp-m) {
    --local-grid-cols: ${i};

    grid-column-end: span ${i};
  }
}

/* Large */
.rpl-col-${i}-l {
  @media (--rpl-bp-l) {
    --local-grid-cols: ${i};

    grid-column-end: span ${i};
  }
}

/* XL */
.rpl-col-${i}-xl {
  @media (--rpl-bp-xl) {
    --local-grid-cols: ${i};

    grid-column-end: span ${i};
  }
}

`
    }
    output += `/* Column start utility classes */

`
    for (let i = dictionary.properties.steps.value; i > 0; i--) {
      output += `/* Mobile */
.rpl-col-start-${i} {
  grid-column-start: ${i};
}

/* Small */
.rpl-col-start-${i}-s {
  @media (--rpl-bp-s) {
    grid-column-start: ${i};
  }
}

/* Medium */
.rpl-col-start-${i}-m {
  @media (--rpl-bp-m) {
    grid-column-start: ${i};
  }
}

/* Large */
.rpl-col-start-${i}-l {
  @media (--rpl-bp-l) {
    grid-column-start: ${i};
  }
}

/* XL */
.rpl-col-start-${i}-xl {
  @media (--rpl-bp-xl) {
    grid-column-start: ${i};
  }
}

`
    }
    return output
  }
})

StyleDictionary.extend({
  properties: {
    steps: {
      value: 12
    }
  },
  platforms: {
    css: {
      buildPath: 'src/styles/generated/',
      transformGroup: 'css',
      files: [
        {
          destination: '_grid.css',
          format: 'utilities/gridClasses'
        }
      ]
    }
  }
}).buildAllPlatforms()