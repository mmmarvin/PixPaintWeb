function hide_all()
{
	$("#title_logo_text").hide();		
	$(".main_content").hide();
}

function handle_content_animation()
{
	// Main content
	$('.main_content').fadeIn(1000);
}

function handle_logo_animation()
{	
	// Logo
	$("#title_logo").hover(
	function() {
		$("#title_logo_text").fadeIn("fast");
	},
	function() {
		$("#title_logo_text").fadeOut("fast");
	});
}

function handle_section_clicks()
{
	$("#content_features_separator").on("click", function() {
		$("#content_features").toggle();
	});
	$("#content_downloads_separator").on("click", function() {
		$("#content_downloads").toggle();
	});
}

hide_all();
handle_content_animation();
handle_logo_animation();
handle_section_clicks(); 
