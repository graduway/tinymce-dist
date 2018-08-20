(function () {
var code = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(global$1.DOM.getViewPort().h - 200, 500));
  };
  var $_fw244ba2jl265f49 = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_es3w35a4jl265f4c = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_fw244ba2jl265f49.getMinWidth(editor);
    var minHeight = $_fw244ba2jl265f49.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_es3w35a4jl265f4c.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_es3w35a4jl265f4c.getContent(editor));
  };
  var $_8nljlya1jl265f47 = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_8nljlya1jl265f47.open(editor);
    });
  };
  var $_am7v27a0jl265f45 = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_8nljlya1jl265f47.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_8nljlya1jl265f47.open(editor);
      }
    });
  };
  var $_2pytl7a5jl265f4d = { register: register$1 };

  global.add('code', function (editor) {
    $_am7v27a0jl265f45.register(editor);
    $_2pytl7a5jl265f4d.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
