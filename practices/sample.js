$(initialize);

function initialize () {
  display_select_photo();
  $(".link_select_photo").click(display_select_photo);
  $(".link_select_groom_face").click(display_select_groom_face);
  $(".link_select_bride_face").click(display_select_bride_face);
}

function display_select_photo () {
  $(".link_select_photo").parent().addClass("active");
  $(".link_select_groom_face").parent().removeClass("active");
  $(".link_select_bride_face").parent().removeClass("active");
  $(".select_photo").show();
  $(".select_groom_face").hide();
  $(".select_bride_face").hide();
}

function display_select_groom_face () {
  $(".link_select_photo").parent().removeClass("active");
  $(".link_select_groom_face").parent().addClass("active");
  $(".link_select_bride_face").parent().removeClass("active");
  $(".select_photo").hide();
  $(".select_groom_face").show();
  $(".select_bride_face").hide();
}

function display_select_bride_face () {
  $(".link_select_photo").parent().removeClass("active");
  $(".link_select_groom_face").parent().removeClass("active");
  $(".link_select_bride_face").parent().addClass("active");
  $(".select_photo").hide();
  $(".select_groom_face").hide();
  $(".select_bride_face").show();
}

function handleFileSelect(event) {
  var files = event.target.files;

  var output = [];

  for (var i = 0, f; f = files[i]; i++){
	  output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ')</li>');
  }

}
