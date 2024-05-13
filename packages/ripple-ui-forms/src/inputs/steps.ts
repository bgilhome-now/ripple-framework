import { FormKitTypeDefinition } from '@formkit/core'
import { createSection } from '@formkit/inputs'
import { inputLibrary } from './input-utils'

/**
 * Input definition for steps.
 * @public
 */
export const steps: FormKitTypeDefinition = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: createSection('steps', () => ({
    $cmp: 'RplFormSteps',
    props: {
      schema: '$node.props.schema',
      data: '$node.props.data'
    },
  }))(),
  library: inputLibrary,
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'group',
  /**
   * An array of extra props to accept for this input.
   */
  props: ['schema', 'data'],
  /**
   * Additional features that should be added to your input
   */
  features: []
}
