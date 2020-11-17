var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorSetting = function (_React$Component) {
  _inherits(EditorSetting, _React$Component);

  function EditorSetting(props) {
    _classCallCheck(this, EditorSetting);

    var _this = _possibleConstructorReturn(this, (EditorSetting.__proto__ || Object.getPrototypeOf(EditorSetting)).call(this, props));

    _this.state = {
      size: "20",
      font: "Consolas",
      display: "none"
    };

    _this.fontChange = _this.fontChange.bind(_this);
    _this.sizeChange = _this.sizeChange.bind(_this);
    _this.cancel = _this.cancel.bind(_this);
    _this.apply = _this.apply.bind(_this);
    return _this;
  }

  _createClass(EditorSetting, [{
    key: "fontChange",
    value: function fontChange(event) {
      this.setState({ font: event.target.value });
    }
  }, {
    key: "sizeChange",
    value: function sizeChange(event) {
      this.setState({ size: event.target.value });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      document.getElementById("editorSetting").style.display = "none";
      document.getElementById("editorSettingBox").style.display = "none";
    }
  }, {
    key: "apply",
    value: function apply() {
      document.getElementById("editor").innerHTML = '';
      var editorValue = editor.getValue();
      createEditor(editorValue, this.state.size, this.state.font);

      document.getElementById("editorSetting").style.display = "none";
      document.getElementById("editorSettingBox").style.display = "none";
    }
  }, {
    key: "render",
    value: function render() {
      var style = "font-size: " + this.state.size + "px; font-family: " + this.state.font + ";";

      return React.createElement(
        "div",
        { id: "editorSetting", "class": "setting", style: { display: this.state.display } },
        React.createElement(
          "div",
          { "class": "settingUnit" },
          React.createElement(
            "span",
            null,
            "Font"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "select",
              { value: this.state.font, onChange: this.fontChange },
              React.createElement(
                "option",
                { value: "Consolas", style: { fontFamily: "Consolas" } },
                "Consolas"
              ),
              React.createElement(
                "option",
                { value: "D2Coding", style: { fontFamily: "D2Coding" } },
                "D2Coding"
              ),
              React.createElement(
                "option",
                { value: "IBM Plex Mono", style: { fontFamily: "IBM Plex Mono" } },
                "IBM Plex Mono"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "settingUnit" },
          React.createElement(
            "span",
            null,
            "Size"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "select",
              { value: this.state.size, onChange: this.sizeChange },
              React.createElement(
                "option",
                { value: "15", style: { fontSize: "15px" } },
                "15"
              ),
              React.createElement(
                "option",
                { value: "17", style: { fontSize: "17px" } },
                "17"
              ),
              React.createElement(
                "option",
                { value: "20", style: { fontSize: "20px" } },
                "20"
              ),
              React.createElement(
                "option",
                { value: "25", style: { fontSize: "25px" } },
                "25"
              ),
              React.createElement(
                "option",
                { value: "30", style: { fontSize: "30px" } },
                "30"
              ),
              React.createElement(
                "option",
                { value: "35", style: { fontSize: "35px" } },
                "35"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "settingResult", style: { fontSize: this.state.size.toString() + "px", fontFamily: this.state.font } },
          "result"
        ),
        React.createElement(
          "div",
          { "class": "settingButton" },
          React.createElement(
            "div",
            { onClick: this.cancel },
            "\uCDE8\uC18C"
          ),
          React.createElement(
            "div",
            { onClick: this.apply },
            "\uC801\uC6A9"
          )
        )
      );
    }
  }]);

  return EditorSetting;
}(React.Component);