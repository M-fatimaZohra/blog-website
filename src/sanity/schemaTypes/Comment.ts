import { defineType } from "sanity"
import { defineField } from "sanity"

const comment = defineType({
  title: "Comment",
  name: "Comment",
  type: "document",
  fields: [
    defineField({
    title: "Name",
    name: "name",
    type: "string",
    readOnly: true,
   
    }),
    defineField({
    title: "Email",
    name: "email",
    type: "string",
    readOnly: true
    }),
    defineField({
    title: "Comment",
    name: "comment",
    type: "text",
    readOnly: true
    }),
  // defineField({
  //   title: "Post",
  //   name: "post",
  //   type: "",
  //   to: [{ type: "post" }]
  // })
   
  ]
})

export default comment;
