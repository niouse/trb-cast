
export const typesSchema = new SimpleSchema({
  typeCode: {
    type: String,
    label: "Task name",
    max: 20,
	min : 3
  },
  nameFr: {
    type: String,
    label: "Task description",
	max: 20,
	min : 0
  },
  nameEn: {
    type: String,
    label: "Task description",
	max: 20,
	min : 0
  },
});
    
