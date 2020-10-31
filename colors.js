var Links = {
    LinksSetColor:function(color){
    // var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while (i < alist.length) {
    //     console.log(alist[i]);
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
        $('a').css('color',color);
    }
  }

  var Body = {
    setColor:function (color){
      //document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
    setBackgroundColor:function (color){
      //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
    }
  }

  function nightDayHandler() {
    var target = document.querySelector('body');
    if (self.value === 'night') {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Links.LinksSetColor('powderblue');
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.LinksSetColor('blue');
    }
  }