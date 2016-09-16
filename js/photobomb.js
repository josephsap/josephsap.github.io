(function (){
	
	var $bg = $("#bg");
	var $img = $('#image'),
		dragPos,
		left,
		top;

	$bg.mousedown(function(ev) {
		$img.trigger(ev);
	});

	function bgCenter(){
		// find center of bg (or center of mask)
		var offset = $bg.offset();
		var width = $bg.width();
		var height = $bg.height();
		this.centerX = offset.left + width / 2;
		this.centerY = offset.top + height / 2;
		var $bgx = $('#bgx');
		var $bgy = $('#bgy');
		$bgx.text(this.centerX);
		$bgy.text(this.centerY);
		return this;
	}

	// need to output coords. make the drag fn reusable.

$img.draggable({
		
		containment: $bg, scroll: false,

		drag: function() {
			var offset = $img.offset();
			var xPos = offset.left;
			var yPos = offset.top;
			var $x = $('#x');
			var $y = $('#y');
			$x.text(xPos);
			$y.text(yPos);
			// top left, mask center difference
			var xDiff = bgCenter().centerX - xPos;
			var yDiff = bgCenter().centerY - yPos;
			var $xd = $('#xd');
			var $yd = $('#yd');
			$xd.text(xDiff);
			$yd.text(yDiff);
			return this;
		},

	  stop: function() {
      finalCoords();
      var $stx = $('#stx')
      var $sty = $('#sty')
      $stx.text(left);
      $sty.text(top);
      			//limit
			if (left > bgCenter().centerX - 114){
				$img.animate({"left": bgCenter().centerX - 114}, "slow", finalCoords);
				console.log("X out of bounds to the right"); 
			}

			if (top > bgCenter().centerY - 114) {
				$img.animate({"top": bgCenter().centerY - 124}, "slow", finalCoords);
				console.log("Y out of bounds: image below, move it up");
			}

			if (left + $img.width() < bgCenter().centerX + 114){
				$img.animate({"left": bgCenter().centerX + 114 - $img.width()}, "slow", finalCoords);
				console.log("X out of bounds to the left"); 
			}

			if (top + $img.height() < bgCenter().centerY + 114){
				$img.animate({"top": bgCenter().centerY + 94 - $img.height()}, "slow", finalCoords);
				console.log("Y out of bounds: image above, move it down");
			}
			
    } // end stop fn
});

	function finalCoords() {
		dropPos = $img.position();
		left = dropPos.left;
		top = dropPos.top;
		console.log("Final:",left, top);
	}

		finalCoords();
		bgCenter();

})();