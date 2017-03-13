import ndarray from "ndarray"
import unpack from "ndarray-unpack"

export const formatEntities = (entities, numberOfEntities, numberOfAttributes) => {
  return unpack(ndarray(new Float32Array(entities), [numberOfEntities, numberOfAttributes]))
}
