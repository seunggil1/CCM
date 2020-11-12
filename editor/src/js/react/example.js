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
      time: "",
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
              time: resultJson.time,
              try: true
            });
          } else alert('something else other than 200 was returned');
        }
      };

      var data = {
        problemNum: problemNum,
        caseNum: this.props.index,
        lang: programLang,
        code: editor.getValue()
      };
      xmlhttp.open("POST", "/exec");
      xmlhttp.setRequestHeader('Content-Type', 'application/json');
      xmlhttp.send(JSON.stringify(data));
    }
  }, {
    key: "render",
    value: function render() {
      var imgTag,
          timeTake = "",
          color = "black e_Title";
      var tried = React.createElement("i", null);
      if (this.state.try) {
        if (this.state.success) {
          tried = React.createElement("i", { "class": "fas fa-check" });
          color = "green e_Title";
          timeTake = " ( " + this.state.time + " ms )";
        } else {
          tried = React.createElement("i", { "class": "fas fa-times" });
          color = "red e_Title";
          timeTake = " ( " + this.state.time + " ms )";
        }
      }
      if (this.props.img != null) {
        imgTag = React.createElement("img", { src: this.props.img, width: "100%" });
      }

      return React.createElement(
        "div",
        { "class": "e_Unit" },
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
            { "class": "e_subUnit rightLine" },
            React.createElement(
              "div",
              { "class": "e_subUnitTitle" },
              "\uC785\uB825"
            ),
            React.createElement(
              "div",
              { "class": "e_subUnitContent" },
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
              { "class": "e_subUnit" },
              React.createElement(
                "div",
                { "class": "e_subUnitTitle" },
                "\uC815\uB2F5"
              ),
              React.createElement(
                "div",
                { "class": "e_subUnitContent" },
                this.props.output
              )
            ),
            React.createElement(
              "div",
              { "class": "e_subUnit" },
              React.createElement(
                "div",
                { "class": "e_subUnitTitle" },
                "\uACB0\uACFC",
                timeTake
              ),
              React.createElement(
                "div",
                { "class": "e_subUnitContent" },
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