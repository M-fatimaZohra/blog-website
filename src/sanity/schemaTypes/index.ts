import { type SchemaTypeDefinition } from 'sanity'
import blog from './Blog'
import comment from './Comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,comment],
}