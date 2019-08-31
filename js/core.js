(function($) {
    var pagify = {
        items: {},
        container: null,
        totalPages: 1,
        perPage: 3,
        currentPage: 0,
        createNavigation: function() {
            this.totalPages = Math.ceil(this.items.length / this.perPage);

            $('.pagination', this.container.parent()).remove();
            var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');

            for (var i = 0; i < this.totalPages; i++) {
                var pageElClass = "page";
                if (!i)
                    pageElClass = "page current";
                var pageEl = '<a class="' + pageElClass + '" data-page="' + (
                i + 1) + '">' + (
                i + 1) + "</a>";
                pagination.append(pageEl);
            }
            pagination.append('<a class="nav next" data-next="true">></a>');

            this.container.after(pagination);

            var that = this;
            $("body").off("click", ".nav");
            this.navigator = $("body").on("click", ".nav", function() {
                var el = $(this);
                that.navigate(el.data("next"));
            });

            $("body").off("click", ".page");
            this.pageNavigator = $("body").on("click", ".page", function() {
                var el = $(this);
                that.goToPage(el.data("page"));
            });
        },
        navigate: function(next) {
            // default perPage to 5
            if (isNaN(next) || next === undefined) {
                next = true;
            }
            $(".pagination .nav").removeClass("disabled");
            if (next) {
                this.currentPage++;
                if (this.currentPage > (this.totalPages - 1))
                    this.currentPage = (this.totalPages - 1);
                if (this.currentPage == (this.totalPages - 1))
                    $(".pagination .nav.next").addClass("disabled");
                }
            else {
                this.currentPage--;
                if (this.currentPage < 0)
                    this.currentPage = 0;
                if (this.currentPage == 0)
                    $(".pagination .nav.prev").addClass("disabled");
                }

            this.showItems();
        },
        updateNavigation: function() {

            var pages = $(".pagination .page");
            pages.removeClass("current");
            $('.pagination .page[data-page="' + (
            this.currentPage + 1) + '"]').addClass("current");
        },
        goToPage: function(page) {

            this.currentPage = page - 1;

            $(".pagination .nav").removeClass("disabled");
            if (this.currentPage == (this.totalPages - 1))
                $(".pagination .nav.next").addClass("disabled");

            if (this.currentPage == 0)
                $(".pagination .nav.prev").addClass("disabled");
            this.showItems();
        },
        showItems: function() {
            this.items.hide();
            var base = this.perPage * this.currentPage;
            this.items.slice(base, base + this.perPage).show();

            this.updateNavigation();
        },
        init: function(container, items, perPage) {
            this.container = container;
            this.currentPage = 0;
            this.totalPages = 1;
            this.perPage = perPage;
            this.items = items;
            this.createNavigation();
            this.showItems();
        }
    };

    // stuff it all into a jQuery method!
    $.fn.pagify = function(perPage, itemSelector) {
        var el = $(this);
        var items = $(itemSelector, el);

        // default perPage to 5
        if (isNaN(perPage) || perPage === undefined) {
            perPage = 3;
        }

        // don't fire if fewer items than perPage
        if (items.length <= perPage) {
            return true;
        }

        pagify.init(el, items, perPage);
    };
})(jQuery);

function print(text) {
    var elem = document.createElement("p");
    elem.innerText = text;
    elem.setAttribute("class", "debugLog");
    document.getElementById("log").appendChild(elem);
}

var VERSION = (function() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    return myScript.src.split("?v=").slice(-1)[0];
})();

var jsons = ["assets.json"]
var scripts = ["js/server.js", "js/url.js", "js/game.js"]
var resources = {}

function loadNext() {
    if (jsons.length) {
        var next = jsons.shift();
        print("loading "+next.split("/").pop()+" started");
        $.ajax({
            type: "GET",
            url: next + '?v=' + VERSION, 
            success: function(result) {
                resources[next] = result;
                print("loading "+next.split("/").pop()+" finishhed");
                loadNext();
            },
            dataType: "json",
            cache: true
        });
        return;
    }
    if (scripts.length == 0) return;
    var next = scripts.shift();
    print("loading "+next.split("/").pop()+" started");
    $.ajax({
        type: "GET",
        url: next + '?v=' + VERSION, 
        success: function() {
            loadNext();
        },
        dataType: "script",
        cache: true
    });
}

var currentLeaderBoard = "coins";

function setLeaderBoard(type) {
    var curr = document.getElementById("leaderboard-content-"+currentLeaderBoard);
    curr.style.display = "none";
    var next = document.getElementById("leaderboard-content-"+type);
    next.style.display = "";
    currentLeaderBoard = type;
}

function showLeaderBoard() {
    var elem = document.getElementById("leaderboard");
    var leaderBoard;
    elem.style.display = "";
        $.ajax({
            type: "GET",
            url: "leaderboard", 
            success: function(result) {
                leaderBoard = result;
                var updateLeaderBoard = function (type, values) {
                    var elem2 = document.getElementById("leaderboard-content-"+type);
                    elem2.innerHTML = "";
                    var tab = document.createElement("table");
                    tab.style.color = "white";
                    var th = document.createElement("tr");
                    th.innerHTML = "<th>#</th><th>name</th><th>"+type+"</th>";
                    tab.appendChild(th);
                    for (var p of values) {
                        var tr = document.createElement("tr");
                        var td = document.createElement("td");
                        td.innerText = ""+p.pos;
                        tr.appendChild(td);
                        td = document.createElement("td");
                        td.innerText = ""+p.nickname;
                        td.style["padding-left"] = "10px";
                        td.style["padding-right"] = "10px";
                        tr.appendChild(td);
                        td = document.createElement("td");
                        td.innerText = ""+p[type];
                        tr.appendChild(td);
                        tab.appendChild(tr);
                    }
                    elem2.appendChild(tab);
                };
                updateLeaderBoard("coins", result.coinLeaderBoard);
                updateLeaderBoard("wins", result.winsLeaderBoard);
            },
            dataType: "json",
            cache: false
        });
        return;
}

function hideLeaderBoard() {
    var elem = document.getElementById("leaderboard");
    elem.style.display = "none";
}

print("loading core.js finished");

loadNext();
