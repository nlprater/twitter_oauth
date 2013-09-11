



$(document).ready(function() {
	$('#working').hide();
	$('#success').hide();
	$('#error').hide();
  $('#tweet_button').click(function(event){

    event.preventDefault();
    $('#tweet_text').attr( "disabled", true );
    $('#time_interval').attr( "disabled", true );
    $('p#working').show();
    var data = {tweet_text : $('#tweet_text').val(),time_interval : $('#time_interval').val()}
    $.post('/tweet',data,function(response){
      job_id = response;
      setTimeout(function() {$.get('/status/'+job_id,function(response){
      job_done = response},3000)});
      clearTimeout(function() {job_done == "true"});
      $('#working').hide();
      $('#success').show();
      $('#tweet_text').removeAttr('disabled');
      $('#tweet_text').val('');
      $('#time_interval').removeAttr( "disabled");
      $('#time_interval').val('');
    });
  });
});

