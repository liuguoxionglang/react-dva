export const vicker = function (e) {
  e.fn.vTicker = function (c) {
    c = e.extend({ speed: 700, pause: 4E3, showItems: 3, animation: "", mousePause: true, isPaused: false, direction: "up", height: 0 }, c);
    let moveUp = function (a, d, b) {
      if (!b.isPaused) {
        a = a.children("ul");
        var f = a.children("li:first").clone(true);
        if (b.height > 0) d = a.children("li:first").height();
        a.animate({ top: "-=" + d + "px" }, b.speed, function () { e(this).children("li:first").remove(); e(this).css("top", "0px") });
        if (b.animation == "fade") {
          a.children("li:first").fadeOut(b.speed);
          b.height == 0 && a.children("li:eq(" + b.showItems + ")").hide().fadeIn(b.speed).show()
        }
        f.appendTo(a)
      }
    };
    let moveDown = function (a, d, b) {
      if (!b.isPaused) {
        a = a.children("ul");
        var f = a.children("li:last").clone(true);
        if (b.height > 0) d = a.children("li:first").height();
        a.css("top", "-" + d + "px").prepend(f);
        a.animate({ top: 0 }, b.speed, function () { e(this).children("li:last").remove() });
        if (b.animation == "fade") {
          b.height == 0 && a.children("li:eq(" + b.showItems + ")").fadeOut(b.speed);
          a.children("li:first").hide().fadeIn(b.speed).show()
        }
      }
    };
    return this.each(function () {
      var a = e(this), d = 0;
      a.css({ overflow: "hidden", position: "relative" }).children("ul").css({ position: "absolute", margin: 0, padding: 0 }).children("li").css({ margin: 0, padding: 0 });
      if (c.height == 0) {
        a.children("ul").children("li").each(function () {
          if (e(this).height() > d) d = e(this).height()
        });
        a.children("ul").children("li").each(function () {
          e(this).height(d)
        });
        a.height(d * c.showItems)
      }
      else
        a.height(c.height);
      let x = setInterval(function () { c.direction == "up" ? moveUp(a, d, c) : moveDown(a, d, c) }, c.pause);
      console.log(x,".....定时器id......")
      c.mousePause && a.bind("mouseenter", function () { c.isPaused = true }).bind("mouseleave", function () { c.isPaused = false })
    })
  }
}

