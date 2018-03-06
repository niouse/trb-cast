
export const factoriesSchema = new SimpleSchema({
  factoryName: {
    type: String,
    label: "Task name",
    max: 50,
	min : 3
  },
  factoryCode: {
    type: String,
    label: "Task description",
	max: 20,
	min : 0
  },
  adress: {
    type: String,
    label: "Task description",
	max: 100,
	min : 0
  },
  country: {
    type: String,
    label: "Task description",
	max: 20,
	min : 0
  },
});

	
    