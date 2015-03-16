$(document).ready(function(){
   
   $('#cwc-stats-mn-blc .listNav').on('click', 'li', function(e){
       e.preventDefault();
       var path = $(this).find('a').data('path');
       $.ajax({
          url: '/dummy',
          type: 'post',
          data: {'slctd': path},
          success: function(d){
              $('#cwc-stats-mn-blc').find('.listNavContent').css({'float': 'none', 'width': "100%"});
              $('#cwc-stats-mn-blc').find('.listNavAll').css({'float': 'left', 'width': "30%"});
              var htm = '<div class="lstNavhdr"><h3>'+path+'</h3></div><div class="clearfix"></div><section class="statsec">'
              for (var i=0; i<9; i++){
                  
                  htm += '<div class="statsblock"><div class="position">1</div><div class="playerInfo">';
                  htm += '<div class="playerPhotoContainer"><img src="http://icc-corp-2013-live.s3.amazonaws.com/players/cwc-2015/210/164.png" data-player-id="490" class="playerPhoto" alt="Mitchell Starc"></div>';
                  htm += '<div class="playerDetails"><div class="name"><div class="firstName">VIRAT</div><div class="secondName">KOHLI</div></div>';
                  htm += '<div class="nationality"><div class="tLogo30x20 AUS"></div>India</div></div><div class="statDetails"><table class="meta">';
                  htm += '<tbody><tr><th>Innings:</th><td>5</td></tr><tr><th>Average:</th><td>8.50</td></tr></tbody></table>';
                  htm += '<div class="count">16</div></div></div><div class="moreBtn" style="display: none;">More<i class="icon-caret-down"></i></div>';
                  htm += '<div class="moreContent contentContainer490" data-empty="true" data-player-id="490" style="display: none;"></div></div>'
                }
                  htm += '</section>';
                  $('#statslist').html(htm)
                }
              });
          });
});
