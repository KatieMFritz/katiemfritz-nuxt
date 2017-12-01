import escapeHtml from 'escape-html'
import stripIndent from 'strip-indent'
import { storiesOf } from '@storybook/vue'
// import { linkTo } from '@storybook/addon-links'
import { withNotes } from '@storybook/addon-notes'
// import {
//   withKnobs,
//   text,
//   number,
//   boolean,
//   array,
//   select,
//   color,
//   date
// } from '@storybook/addon-knobs'
// import Centered from '@storybook/addon-centered'

export default function Demo (componentName) {
  const story = storiesOf(componentName, module)

  this.example = (exampleName, exampleOptions) => {
    exampleOptions = exampleOptions || {
      template: `<${componentName}></${componentName}>`
    }

    let notes = '<h2>Usage</h2>'
    notes += `<pre>${
      escapeHtml(
        stripIndent(exampleOptions.template).trim()
      )
    }</pre>`

    story.add(
      exampleName,
      withNotes(notes.trim())(() => exampleOptions)
    )

    return this
  }
}
