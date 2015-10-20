// Custom Post Field

Posts.addField({
  fieldName: 'Impact',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Need',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Mission Fit',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Legality',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Current Money',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Future Money',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Cost',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Talent',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Technical Risk',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Internal Champion',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Community of Users',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Community of Partners',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Portfolio Fit',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Exit Strategies',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

Posts.addField({
  fieldName: 'Existing Data',
  fieldSchema: {
    type: Number,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom Comment Field

Comments.addField({
  fieldName: 'customCommentField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom User Field

Users.addField({
  fieldName: 'customUserField',
  fieldSchema: {
    type: String,
    optional: true,
    editableBy: ["member", "admin"]
  }
});

// Custom Setting Field

Settings.addField({
  fieldName: "customSettingsField",
  fieldSchema: {
    type: String,
    optional: true,
    autoform: {
      group: "customGroup"
    }
  }
});
