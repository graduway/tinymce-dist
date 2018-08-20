(function () {
var hr = (function () {
  'use strict';

  var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var register = function (editor) {
    editor.addCommand('InsertHorizontalRule', function () {
      editor.execCommand('mceInsertContent', false, '<hr />');
    });
  };
  var $_1yqy9ucnjl265fl2 = { register: register };

  var register$1 = function (editor) {
    editor.addButton('hr', {
      icon: 'hr',
      tooltip: 'Horizontal line',
      cmd: 'InsertHorizontalRule'
    });
    editor.addMenuItem('hr', {
      icon: 'hr',
      text: 'Horizontal line',
      cmd: 'InsertHorizontalRule',
      context: 'insert'
    });
  };
  var $_d919xrcojl265fl4 = { register: register$1 };

  global.add('hr', function (editor) {
    $_1yqy9ucnjl265fl2.register(editor);
    $_d919xrcojl265fl4.register(editor);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
