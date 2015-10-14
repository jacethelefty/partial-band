'use strict';

$(function() {

  $('button').click(function() {
    $.get('adjective', function(response) {
      var adjective = response.word;
      $('#adjective').text(adjective);
    });
    $.get('verb', function(response) {
      var verb = response.word;
      $('#verb').text(verb);
    });
    $.get('noun', function(response) {
      var noun = response.word;
      $('#noun').text(noun);
    });

    $( 'span.icon-cool' ).toggleClass( 'icon-evil' );

    $( '#randomRefresh' ).replaceWith( "<p id='refresh'><span class='icon-spinner11'></span>&nbsp&nbsp refresh</p>" );

    $('#refresh').click(function(){
      location.reload();
    });   //END REFRESH CLICK FUNCTION
  });     //END BUTTON CLICK FUNCTION

  $('input[name=adjective]').focus( function() {
      $('#adjspan').css('display','none');
      $('#required').css('display','none');
      $('#resetfields').css('display','inline-block');
  });
  $('input[name=noun]').focus( function() {
      $('#nounspan').css('display','none');
      $('#required').css('display','none');
      $('#resetfields').css('display','inline-block');
  });
  $('input[name=verb]').focus( function() {
      $('#verbspan').css('display','none');
      $('#required').css('display','none');
      $('#resetfields').css('display','inline-block');
  });

  $('#submitWords').on('submit', function(e) {
    e.preventDefault();

    if ($.trim($('input').val()) === "" || $.trim($('input[name=adjective]').val()) === "") {
      $('#resetfields').css('display', 'none');
      $('#required').css('display', 'inline-block');
      $('#adjspan').css('display', 'inline-block');
      return false;
    }else if ($.trim($('input').val()) === "" || $.trim($('input[name=noun]').val()) === "") {
      $('#resetfields').css('display', 'none');
      $('#required').css('display', 'inline-block');
      $('#nounspan').css('display', 'inline-block');
      return false;
    }else if ($.trim($('input').val()) === "" || $.trim($('input[name=verb]').val()) === "") {
      $('#resetfields').css('display', 'none');
      $('#required').css('display', 'inline-block');
      $('#verbspan').css('display', 'inline-block');
      return false;
    }

    var adjective = $('input[name=adjective]').val();
    var adjPost;
    var noun = $('input[name=noun]').val();
    var nounPost;
    var verb = $('input[name=verb]').val();
    var verbPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post('adjective', adjPost, function(response) {
        var adjectiveRes = response.msg;
        $('#adjectiveRes').text(adjectiveRes);
      });
    };

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        var nounRes = response.msg;
        $('#nounRes').text(nounRes);
      });
    };

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        var verbRes = response.msg;
        $('#verbRes').text(verbRes);
      });
    };

    $( '#floater').css('display', 'block');
    $( '#submitWords').css('display', 'none');
    $( 'span.icon-cool' ).toggleClass( 'icon-evil' );

  });       //END SUBMIT FUNCTION

  $('#close').click(function() {
    $( '#floater').css('display', 'none');
    $( '#submitWords').css('display', 'block');
    $( 'span.icon-cool' ).toggleClass( 'icon-evil' );
    location.reload();
  });       //END CLICK FUNCTION

  $('#resetfields').click(function() {
    document.getElementById('submitWords').reset();
    $(this).css('display', 'none');
  });       //END CLICK FUNCTION

});         //END READY FUNCTION
