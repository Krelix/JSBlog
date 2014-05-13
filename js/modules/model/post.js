// Filename: post.js
define(['jquery'], function() {

  /**
   * Create a new Post object with the given data
   * @param data a JSON object with a creation date, a title, an author, direct content or URL to a file
   */
  function Post(data) {
    if (!data) {
      throw ('Post cannot be null');
    } else {
      this.dateCreated = data.dateCreated || new Date();
      this.author = data.author || '';
      this.title = data.title || '';
      this.content = data.content || '';
      this.url = data.url || '';
    }
  }

  Post.prototype = {
    constructor: Post,
    update: function() {

    },
    toString: function() {
      return JSON.stringify(this);
    },
    load: function() {
      var self = this;
      return new Promise(function(resolve, reject) {
        if ((!self.content || self.content.length <= 0) && (!self.url || self.url.length <= 0))
          reject(Error('No content to load'));
        else if (self.url && self.url.length > 0) { // async loading
          // load content from url
          $.ajax(self.url, {
            dataType: 'html'
          }).done(function(data) {
            self.content = data;
            resolve(self);
          }).fail(function(jqxhr, textStatus, error) {
            reject(Error('Error loading content : ' + error));
          });
        } else { // there already is content
          resolve(self);
        }
      });
    }
  }

  return Post;
});