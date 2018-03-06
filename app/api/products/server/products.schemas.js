
export const productsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Task name",
    max: 20,
	min : 3
  },
});
    