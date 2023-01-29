import { TTodoList, ITodoItem } from "./types";

Page({
  data: {
    openTodoSheetModal: false,
    todoSheetModalTitle: "",
    todoList: [] as TTodoList,
    editTodoItem: null as null | ITodoItem,
    editTodoItemId: "",
    editTodoItemTitle: "",
    editTodoItemNote: "",
    editTodoItemCompleted: false,
  },
  handleDelTodoItem() {
    if (this.data.editTodoItem) {
      wx.showModal({
        title: "确认操作",
        content: "确实要删除此待办事项？",
        success: ({ confirm }) => {
          if (confirm) {
            this.setData({
              todoList: this.data.todoList.filter(
                ({ id }) => id !== this.data.editTodoItem?.id
              ),
            });
            this.handleCloseTodoSheetModal();
          }
        },
      });
    }
  },
  handleEditTodoItem(e: WechatMiniprogram.CustomEvent<{ todoId: string }>) {
    const editTodoItem = this.data.todoList.find(
      ({ id }) => id === e.detail.todoId
    );
    if (editTodoItem) {
      this.setData({
        editTodoItem,
        editTodoItemId: editTodoItem.id,
        editTodoItemTitle: editTodoItem.title,
        editTodoItemNote: editTodoItem.note,
        editTodoItemCompleted: editTodoItem.completed,
      });
      this.handleOpenTodoSheetModal();
    }
  },
  handleTodoSettingModalOk() {
    if (!this.data.editTodoItemTitle) {
      wx.showModal({
        title: "操作失败",
        content: "标题不能为空",
        showCancel: false,
      });
      return;
    }
    const todoItem: ITodoItem = {
      id: this.data.editTodoItemId || Date.now().toString(),
      title: this.data.editTodoItemTitle,
      note: this.data.editTodoItemNote,
      date: "",
      time: "",
      completed: this.data.editTodoItemCompleted,
    };
    let todoList: TTodoList = [];
    if (this.data.editTodoItemId) {
      todoList = this.data.todoList.map((item) => {
        if (item.id === this.data.editTodoItemId) {
          return todoItem;
        }
        return item;
      });
    } else {
      todoList = [...this.data.todoList, todoItem];
    }
    this.setData({
      todoList,
    });
    this.handleCloseTodoSheetModal();
  },
  handleCloseTodoSheetModal() {
    this.setData({
      openTodoSheetModal: false,
      editTodoItem: null,
      editTodoItemId: "",
      editTodoItemTitle: "",
      editTodoItemNote: "",
      editTodoItemCompleted: false,
    });
  },
  handleOpenTodoSheetModal() {
    this.setData({
      openTodoSheetModal: true,
      todoSheetModalTitle: this.data.editTodoItem
        ? "编辑待办事项"
        : "新待办事项",
    });
  },
});
