// ES5 Function
// function Tabs(option) {
//   this.tabs = $(option.element);
//   this.initTab = Number.parseInt(option.initTab) || 0;

//   this.init();
//   this.bindEvent();
// }

// Tabs.prototype.init = function() {
//   var tabs = this;
//   this.tabs.each(function(index, tab) {
//     $(tab)
//       .children(".tabs-nav")
//       .children("li")
//       .eq(tabs.initTab)
//       .addClass("active");
//     $(tab)
//       .children(".tabs-panes")
//       .children("li")
//       .eq(tabs.initTab)
//       .addClass("active");
//   });
// };

// Tabs.prototype.bindEvent = function() {
//   this.tabs.on("click", ".tabs-nav > li", function(e) {
//     var $li = $(e.currentTarget);
//     $li
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//     var $pane = $li
//       .closest(".tabs")
//       .find(".tabs-panes > li")
//       .eq($li.index());
//     $pane
//       .addClass("active")
//       .siblings()
//       .removeClass("active");
//   });
// };

// ES6 Class
class Tabs {
  constructor(options) {
    this.tabs = $(options.element);
    this.initTab = Number.parseInt(options.initTab) || 0;

    this.init();
    this.bindEvent();
  }

  init() {
    this.tabs.each((index, tab) => {
      $(tab)
        .children(".tabs-nav")
        .children("li")
        .eq(this.initTab)
        .addClass("active");
      $(tab)
        .children(".tabs-panes")
        .children("li")
        .eq(this.initTab)
        .addClass("active");
    });
  }

  bindEvent() {
    this.tabs.on("click", ".tabs-nav > li", e => {
      const $li = $(e.currentTarget);
      $li
        .addClass("active")
        .siblings()
        .removeClass("active");
      const $pane = $li
        .closest(".tabs")
        .find(".tabs-panes > li")
        .eq($li.index());
      $pane
        .addClass("active")
        .siblings()
        .removeClass("active");
    });
  }
}

// init
new Tabs({
  element: ".tabs",
  initTab: 0
});
