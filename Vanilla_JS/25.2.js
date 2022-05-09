let obj = {
  name: " rock",
  print1: function () {
    console.log(this.name);
  },
  print2: function () {
    setTimeout(this.print1.bind(this), 1000);
  },
};

obj.print1();
obj.print2();
