// template.js
// @author krelix
define(['underscore', 'jquery', 'modules/model/post'], function() {
  var templateContentUrl = '/templates/postContent.template',
    templateTitleUrl = '/templates/postTitle.template';

  var templateContent,
    templateTitle;

  var loadTemplates = function() {
    return new Promise(function(resolve, reject) {
      // load content placeholder
      $.ajax(templateContentUrl, {
        dataType: 'html'
      }).done(function(data) {
        // URL content should be loaded in the post on creation.
        templateContent = data;
        $.ajax(templateTitleUrl, {
          dataType: 'html'
        }).done(function(data) {
          templateTitle = data;
          resolve();
        });
      });
    });
  };

  var loadTitle = function(targetId, newPost) {
    loadElement(templateTitle, targetId, {
      title: newPost.title,
      dateCreated: newPost.dateCreated.toLocaleString(),
      author: newPost.author
    });
  };

  var loadContent = function(targetId, newPost) {
    loadElement(templateContent, targetId, {
      content: newPost.content
    });
  };

  var loadElement = function(templateType, targetId, object) {
    _.templateSettings.interpolate = /\{\{([\s\S]+?)\}\}/g;
    var target;
    if (typeof targetId === 'string') {
      if (targetId == 'body')
        target = $('body');
      else {
        target = $(targetId.indexOf('#') > -1 ? targetId : '#' + targetId);
      }
      $(target).append(parseTemplate(templateType, object));
    } else if (targetId instanceof $) {
      target = targetId;
      target.append(parseTemplate(templateType, object));
    }
  };

  /**
   * Methods that replaces things found in the data with things given in the object
   * and returns the string of HTML content.
   * @param data the template data that will be replaced
   * @param object the object containing the elements to replace in the template
   * @return a String with the HTML code that was generated. */
  var parseTemplate = function(data, object) {
    // create template
    return _.template(data, object);
  };

  // load templates as the module is loaded... could throw an error ?
  return {
    loadTitle: loadTitle,
    loadContent: loadContent,
    loadTemplates: loadTemplates
  };
});