/**
 * Created by brizarda on 29/04/14.
 * Main Javascript file containing the
 * page initialization.
 */

require.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min',
    'underscore': 'http://underscorejs.org/underscore-min',
    'data': '/data/posts.data'
  }
});

require(['modules/template', 'modules/model/post', 'data'], function(template, Post, obj) {
  var data = obj.obj;
  var myPosts = [];
  template.loadTemplates().then(function() {
    console.log('templates loadded');
    _.each(data, function(testPost) {
      console.log('loading post... ' + testPost.dateCreated);
      // create a new post with the given data
      var post = new Post(testPost);
      console.log(testPost);
      var postDiv = $('<div>');

      template.loadTitle(postDiv, post);
      // load then add the content
      post.load().then(function(updatedPost) {
        template.loadContent(postDiv, updatedPost);
      }).
      catch (function(e) {
        var errorMessage = '<p style="color: red;">Unable to load content : ' + e + ' </p>';
        postDiv.append(errorMessage);
      }).then(function() {
        $('#content').append(postDiv);
      });
    });
  });
});