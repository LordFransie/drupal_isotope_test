(function ($) {
$(document).ready(function(){
//function for adding a randomly selected css class to 
//news item in the news view which determine its width
$('.view-news .views-row').each(function(){
	x=Math.floor(Math.random()*5);
	console.log(x);
	if(x == 0){
	$(this).addClass('col1');
	} 
	else if(x == 1){
	$(this).addClass('col2');
	}
	else if(x == 2){
	$(this).addClass('col3');
	}
	else if(x == 3){
	$(this).addClass('col4');
	}
	else{
	$(this).addClass('col5');
	}
});
//function for adding a randomly selected css class to 
//blog item in the blog  view which determine its width
$('.view-blogs .views-row').each(function(){
        x=Math.floor(Math.random()*5);
        console.log(x);
        if(x == 0){
        $(this).addClass('col1');
        }
        else if(x == 1){
        $(this).addClass('col2');
        }
        else if(x == 2){
        $(this).addClass('col3');
        }
        else if(x == 3){
        $(this).addClass('col4');
        }
        else{
        $(this).addClass('col5');
        }
});
//initialized masonry.js for the news view
 $(function(){
    
    var $container = $('.view-news');
    
    $container.imagesLoaded(function(){
      $container.masonry({
        itemSelector: '.views-row',
       columnWidth: 5,

      isFitWidth: true,
   
    });
    });
    
    $container.infinitescroll({
      navSelector  : '.pager-next',    // selector for the paged navigation 
      nextSelector : '.pager-next a',  // selector for the NEXT link (to page 2)
      itemSelector : '.views-row',     // selector for all items you'll retrieve
      loading: {
          finishedMsg: 'No more pages to load.',
	  loadingImg : "none"
        }
      },
      // trigger Masonry as a callback
      function( newElements ) {
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
       
	$newElems.each(function(){
        x=Math.floor(Math.random()*5);
        console.log(x);
        if(x == 0){
        $(this).addClass('col1');
        }
        else if(x == 1){
        $(this).addClass('col2');
        }
        else if(x == 2){
        $(this).addClass('col3');
        }
        else if(x == 3){
        $(this).addClass('col4');
        }
        else{
        $(this).addClass('col5');
        }
});
	 // ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function(){
          // show elems now they're ready
          $newElems.animate({ opacity: 1 });
          $container.masonry( 'appended', $newElems  , true ); 
        });
      }
    );
    
  });
// initializes masonary.js for the blog view
$(function(){
var $container = $('.view-blogs');
   
    $container.imagesLoaded(function(){
      $container.masonry({
        itemSelector: '.views-row',
       columnWidth: 5,
     
      isFitWidth: true,
     
    });
    });
   
    $container.infinitescroll({
      navSelector  : '.pager-next',    // selector for the paged navigation 
      nextSelector : '.pager-next a',  // selector for the NEXT link (to page 2)
      itemSelector : '.views-row',     // selector for all items you'll retrieve
      loading: {
          finishedMsg: 'No more pages to load.',
          loadingImg : "none"
        }
      },
      // trigger Masonry as a callback
      function( newElements ) {
        // hide new items while they are loading
        var $newElems = $( newElements ).css({ opacity: 0 });
        
        $newElems.each(function(){
        x=Math.floor(Math.random()*5);
        console.log(x);
        if(x == 0){
        $(this).addClass('col1');
        } 
        else if(x == 1){
        $(this).addClass('col2');
        }
        else if(x == 2){
        $(this).addClass('col3');
        }
        else if(x == 3){
        $(this).addClass('col4');
        }
        else{
        $(this).addClass('col5');
        }
});
 // ensure that images load before adding to masonry layout
        $newElems.imagesLoaded(function(){
          // show elems now they're ready
          $newElems.animate({ opacity: 1 });
          $container.masonry( 'appended', $newElems  , true );
        });
     }); 
  });
// function for removing the main menu links and replacing them with images
  $('#block-menu-block-1 ul li').each(function(){ 
  var addedClass = $(this).find('a').html().toLowerCase();
  $(this).find('a').html("").append('<img>');
  $(this).find('img').attr('src', '/sites/all/themes/hoodhippeez/images/'+addedClass+'.png');
//function for removing the user menu link and replacing them with images
 }); 
 $('#block-menu-block-3 ul li').each(function(){ 
  var addedClass = $(this).find('a').html().toLowerCase();
  $(this).find('a').html("").append('<img>').append('<span>'+addedClass+'</span>');
  $(this).find('img').attr('src', '/sites/all/themes/hoodhippeez/images/'+addedClass+'.png');
});

//check to see if the user menu exists and give the proper spacing on the bottom of the page if 
//it does
if($('#block-menu-block-3').length > 0)
	{
		$('#block-block-4').css('margin-bottom', '5.5em');
	}

//function of adding isotope classes to the all content view
$('.view-all-content .views-row').each(function(){
            
        $(this).addClass($(this).find('.term-class').html().toLowerCase().replace(/ /gi, '-').replace(/,/gi, ' '));
        $(this).addClass($(this).find('.content-type').html().toLowerCase().replace(/ /gi, '-').replace(/,/gi, ' '));
    });
    
    $('#views-exposed-widgets a').each(function(){
    });
//function for correctly formating the isotope data filters    
    $('.bef-select-as-links .form-item .form-item').each(function(){
        $(this).find('a').attr('data-filter', '.'+$(this).find('a').html().toLowerCase().replace(/ /gi, '-').replace(/,/gi, ' ')); 
    });
      
    $('#edit-type-all').html('<a class="active" data-filter="" href="/all-content">Show All</a>');
    
    $('.bef-select-as-links').find('.form-item').removeClass('form-item').addClass('filter option-set');

    $('.filter.option-set').children('.form-type-bef-link').removeClass('filter option-set');
   
    $('.form-item.form-type-select.form-item-type').find('.bef-select-as-links').find('.filter.option-set').attr('data-group', 'type');
    $('#edit-term-node-tid-depth-all').html('<a class="active" data-filter="" href="/all-content">Show All</a>');



    $('.form-item.form-type-select.form-item-tid .filter').attr('data-group', 'tag');
   
    $('.form-item.form-type-select.form-item-tid').find('.filter.option-set ').prepend('<div id="edit-tid-all" class="form-type-bef-link form-item-edit-tid-all"><a href="#" class="active" data-filter="*">Show All</a></div>' ); 

    $('.views-row.blog-entry').addClass('blog');
     
    $('.filter a').each(function(){
        $(this).removeAttr('href');
    });


    var $container = $('.view-all-content .view-content' );
            filters = {};

    $container.isotope({
      itemSelector : '.views-row',
      masonry: {
       
      }
    });

    // filter buttons
    $('.filter a').click(function(){
      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('active') ) {
  
      }
     var $optionSet = $this.parents('.option-set') 

      // change selected class
     $optionSet.find('.active').removeClass('active');
      $this.addClass('active');
      
      // store filter value in object
      // i.e. filters.color = 'red'
     var $optionSet = $this.parents('.option-set');
      var group = $optionSet.attr('data-group');
      filters[ group ] = $this.attr('data-filter').toLowerCase().replace(/ /gi, '-').replace(/,/gi, ' ');
      // convert object into array
      var isoFilters = [];
      for ( var prop in filters ) {
        isoFilters.push( filters[ prop ] )
      }
      var selector = isoFilters.join('');
      $container.isotope({ filter: selector });
      console.log(filters);

      return false;
    });   
    
    $("#navigation ul.menu li a img").load(function(){
    	$(this).each(function(){
    	var a = $(this).height();
    	var b = $(this).width();
    	$(this).parent().height(a).width(b);
		var x = a * .8;
		var y = b * .8;
		$(this).width(y).height(x);
    });
    	$(this).each(function() {
	    	$.data(this, 'size', { width: $(this).width(), height: $(this).height() });
	    		}).hover(function() {
		    $(this).stop().animate({ height: $.data(this,'size').height*1.2, 
                            		 width: $.data(this,'size').width*1.2 }, 50);
                             }, function() {
	                             $(this).stop().animate({ height: $.data(this,'size').height, 
		                             					  width: $.data(this,'size').width }, 200);
});
    });
});
})(jQuery);