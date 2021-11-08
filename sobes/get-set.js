let user = {
  name: "Gena",
  sureName: "Кукухин",

  get fullName() {
    return this.name + this.sureName;
  },
  set fullName(value) {
    this.name = value;
  },
};

console.log("user.fullName: ", user.fullName);

user.fullName = "Толик";

console.log("user.fullName: ", user.fullName);
