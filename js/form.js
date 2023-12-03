$(function(){
//banner slider 1
$('.form-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  speed:2000,
  fade:false,
  dots:false,
  autoplaySpeed: 2500,
});
    
    
    
    
//calendar   
dycalendar.draw({
            target: '#dycalendar',
            type: 'month',
            dayformat: 'full',
            monthformat: 'full',
            highlighttargetdate: true,
            prevnextbutton: 'show',
        });
    
    
    
});

