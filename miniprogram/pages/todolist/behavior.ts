export default Behavior({
  data: {
    behaviorOpenTodoSheetModal: false,
  },
  observers: {
    behaviorOpenTodoSheetModal: (behaviorOpenTodoSheetModal) => {
      console.log({ behaviorOpenTodoSheetModal });
    },
  },
  methods: {
    behaviorHandleTodoSheetModalOpen() {
      this.setData({
        behaviorOpenTodoSheetModal: true,
      });
    },
    behavioHandleTodoSheetModalClose() {
      this.setData({
        behaviorOpenTodoSheetModal: false,
      });
    },
  },
});
