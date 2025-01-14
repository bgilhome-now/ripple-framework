/**
 * This composable will:
 * - Attempt to call a callback function called named <eventName> with <eventParams>, this is for formkit event handlers
 * - Emit the event in the standard vue way, this is for all other consumers
 *
 * When hooking up an event handler for a custom input in formkit, the handler won't be triggered by the standard vue emit
 * handler, instead we need to call a callback function that is added as a prop.
 */
export default function useFormkitFriendlyEventEmitter(
  props,
  emit,
  eventName,
  ...eventParams
) {
  if (props[eventName] && typeof props[eventName] === 'function') {
    props[eventName](...eventParams)
  }
  emit(eventName, ...eventParams)
}
