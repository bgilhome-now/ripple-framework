import { FormKitTypeDefinition } from '@formkit/core'
import {
  outer,
  inner,
  wrapper,
  label,
  help,
  messages,
  message,
  prefix,
  suffix,
  icon,
  selectInput,
  option,
  optionSlot,
  $if,
  options,
  selects,
  defaultIcon
} from '@formkit/inputs'

/**
 * Input definition for a select.
 * @public
 */
export const select: FormKitTypeDefinition = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    wrapper(
      label('$label'),
      help('$help'),
      inner(
        icon('prefix'),
        prefix(),
        selectInput(
          $if(
            '$slots.default',
            () => '$slots.default',
            $if('$slots.option', optionSlot, option('$option.label'))
          )
        ),
        $if('$attrs.multiple !== undefined', () => '', icon('select')),
        suffix(),
        icon('suffix')
      )
    ),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * An array of extra props to accept for this input.
   */
  props: ['options', 'placeholder'],
  /**
   * Forces node.props.type to be this explicit value.
   */
  forceTypeProp: 'select',
  /**
   * Additional features that should be added to your input
   */
  features: [options, selects, defaultIcon('select', 'select')]
}