const user = {
  id: 5,
  age: 29,
  firstName: 'Tony',
  lastName: 'Energy',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};
ReactDOM.createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement("div", {
  id: user.id
}, /*#__PURE__*/React.createElement("p", null, "\u041F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F: ", user.getFullName()), /*#__PURE__*/React.createElement("p", null, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442: ", user.age), /*#__PURE__*/React.createElement("p", null, "\u0412\u0440\u0435\u043C\u044F \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445: ", new Date().toLocaleTimeString())));
