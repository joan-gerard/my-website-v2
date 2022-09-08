export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "priority",
      title: "Priority",
      type: "number",
      validation: (Rule) => Rule.min(0).integer().positive(),
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "works",
      title: "Works",
      type: "array",
      of: [{ type: "workExperience" }],
    },
  ],
};
