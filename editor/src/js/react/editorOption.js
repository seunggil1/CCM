var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorOption = function (_React$Component) {
  _inherits(EditorOption, _React$Component);

  function EditorOption(props) {
    _classCallCheck(this, EditorOption);

    var _this = _possibleConstructorReturn(this, (EditorOption.__proto__ || Object.getPrototypeOf(EditorOption)).call(this, props));

    _this.download = _this.download.bind(_this);
    return _this;
  }

  _createClass(EditorOption, [{
    key: "copy",
    value: function copy() {
      console.log("copyed");
      var content = document.createElement("textarea");
      content.value = editor.getValue();

      document.body.appendChild(content);
      content.select();
      document.execCommand("copy");
      document.body.removeChild(content);
    }
  }, {
    key: "download",
    value: function download() {
      var filename = this.props.donwloadName + '.' + langExtensionMap[programLang];
      var content = 'data:text/plain;charset=utf-8,' + encodeURIComponent(editor.getValue());
      var element = document.createElement('a');
      element.setAttribute('href', content);
      element.setAttribute('download', filename);

      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("i", { "class": "far fa-copy", onClick: this.copy }),
        React.createElement("br", null),
        React.createElement("i", { "class": "fas fa-file-download", onClick: this.download })
      );
    }
  }]);

  return EditorOption;
}(React.Component);