$('.load-page').on('click', function(event){
  event.preventDefault();
  $.ajaxSetup({ cache: false });
  $('#content').load($(this).data('location'));
});
