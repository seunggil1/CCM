var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    _classCallCheck(this, Example);

    var _this = _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).call(this, props));

    _this.state = {
      success: false,
      result: "",
      try: false
    };

    _this.check = _this.check.bind(_this);
    return _this;
  }

  _createClass(Example, [{
    key: "check",
    value: function check() {
      var _this2 = this;

      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
            var resultJson = JSON.parse(xmlhttp.responseText);
            _this2.setState({
              success: resultJson.success,
              result: resultJson.output,
              try: true
            });
          } else alert('something else other than 200 was returned');
        }
      };

      xmlhttp.open("POST", "url");
      xmlhttp.send({
        problemNumber: "??",
        caseNumber: this.props.index,
        language: "",
        code: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var tried = React.createElement("i", null);
      var imgTag,
          color = "black exampleTitle";
      if (this.state.try) {
        if (this.state.success) {
          tried = React.createElement("i", { "class": "fas fa-check" });
          color = "green exampleTitle";
        } else {
          tried = React.createElement("i", { "class": "fas fa-times" });
          color = "red exampleTitle";
        }
      }
      if (this.props.img != null) {
        imgTag = React.createElement("img", { src: this.props.img, width: "100%" });
      }

      return React.createElement(
        "div",
        { "class": "exampleUnit" },
        React.createElement(
          "div",
          { "class": color },
          React.createElement(
            "span",
            null,
            "\uC608\uC81C ",
            this.props.index
          ),
          "\xA0",
          tried,
          React.createElement("i", { "class": "fas fa-play", style: { float: 'right' }, onClick: this.check })
        ),
        React.createElement(
          "div",
          null,
          imgTag
        ),
        React.createElement(
          "div",
          { "class": "horizontal" },
          React.createElement(
            "div",
            { "class": "subUnit rightLine" },
            React.createElement(
              "div",
              { "class": "subUnitTitle" },
              "\uC785\uB825"
            ),
            React.createElement(
              "div",
              { "class": "subUnitContent" },
              this.props.input.split('\n').map(function (line) {
                return React.createElement(
                  "span",
                  null,
                  line,
                  React.createElement("br", null)
                );
              })
            )
          ),
          React.createElement(
            "div",
            { "class": "vertical" },
            React.createElement(
              "div",
              { "class": "subUnit" },
              React.createElement(
                "div",
                { "class": "subUnitTitle" },
                "\uCD9C\uB825"
              ),
              React.createElement(
                "div",
                { "class": "subUnitContent" },
                this.props.output
              )
            ),
            React.createElement(
              "div",
              { "class": "subUnit" },
              React.createElement(
                "div",
                { "class": "subUnitTitle" },
                "\uACB0\uACFC"
              ),
              React.createElement(
                "div",
                { "class": "subUnitContent" },
                this.state.result
              )
            )
          )
        )
      );
    }
  }]);

  return Example;
}(React.Component);