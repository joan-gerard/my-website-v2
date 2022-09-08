export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      validation: (Rule) => Rule.min(0).integer().positive(),
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "bgColor",
      title: "BgColor",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
