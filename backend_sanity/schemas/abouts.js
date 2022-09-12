export default {
  name: "abouts",
  title: "Abouts",
  type: "document",
  fields: [
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer().positive(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "description2",
      title: "Description2",
      type: "string",
    },
  ],
};
