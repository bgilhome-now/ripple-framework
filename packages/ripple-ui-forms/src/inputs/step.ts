import { FormKitTypeDefinition } from '@formkit/core'
import { createSection } from '@formkit/inputs'
import { inputLibrary } from './input-utils'

/**
 * Input definition for a step.
 * @public
 */
export const step: FormKitTypeDefinition = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: createSection('step', () => ({
    $cmp: 'RplFormStep',
    props: {
      name: '$node.props.name',
      title: '$node.props.title',
      schema: '$node.props.schema'
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
  props: ['key', 'title', 'schema'],
  /**
   * Additional features that should be added to your input
   */
  features: []
}
