Component({
  properties: {
    todoId: {
      type: String,
      value: "",
    },
    todoTitle: {
      type: String,
      value: "",
    },
    todoNote: {
      type: String,
      value: "",
    },
  },
  methods: {
    handleClickTodoItem() {
      this.triggerEvent("edit", { todoId: this.properties.todoId });
    },
  },
});
