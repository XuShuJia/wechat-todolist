Component({
  properties: {
    open: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: "",
    },
    okButton: {
      type: Boolean,
      value: false,
    },
    okButtonText: {
      type: String,
      value: "确定",
    },
  },
  data: {
    show: false,
    rendered: false,
  },
  observers: {
    open: function (open) {
      if (open && !this.data.rendered && !this.data.show) {
        this.setData(
          {
            rendered: true,
          },
          () => {
            wx.nextTick(() => {
              setTimeout(() => {
                this.setData({
                  show: true,
                });
              }, 30);
            });
          }
        );
      }
      if (!open && this.data.rendered && this.data.show) {
        this.setData(
          {
            show: false,
          },
          () => {
            wx.nextTick(() => {
              setTimeout(() => {
                this.setData({
                  rendered: false,
                });
              }, 300);
            });
          }
        );
      }
    },
  },
  methods: {
    handleCloseSheetModal() {
      this.triggerEvent("close");
    },
    handleClickOkBtn() {
      this.triggerEvent("ok");
    },
  },
});
