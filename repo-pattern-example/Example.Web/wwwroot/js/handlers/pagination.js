
var pagination = (function () {
    'use strict';

    var scrollEventListener = null;
    var elementsToSee = [];

    function infiniteScroll(tableElement, pagedResponseDto, nextPageCallback, loading) {
        let totalPages = pagedResponseDto.TotalPages;
        let currentPage = pagedResponseDto.CurrentPage;

        let tableFooter = tableElement.querySelector("tfoot");
        if (!tableFooter) {
            tableFooter = document.createElement("tfoot");
            tableElement.append(tableFooter);
        }
    
        let elementInArray = elementsToSee.find(function (x) { x.element == tableFooter });
        if (currentPage >= totalPages) {
            if (elementsToSee != null && elementInArray != null)
                elementsToSee.splice(elementsToSee.indexOf(elementInArray), 1);
            return;
        }

        if (isScrolledIntoView(tableFooter) && !loading) {
            if (elementsToSee != null && elementInArray != null)
                elementsToSee.splice(elementsToSee.indexOf(elementInArray), 1);
            nextPageCallback();
            return;
        }

        if (elementInArray == null)
            elementsToSee.push({ element: tableFooter, callBack: nextPageCallback });

        if (scrollEventListener == null) {
            scrollEventListener = document.addEventListener('scroll', function (e) {
                for (var i = 0; i < elementsToSee.length; i++) {
                    if (isScrolledIntoView(elementsToSee[i].element)) {
                        let callback = elementsToSee[i].callBack;
                        elementsToSee.splice(elementsToSee.indexOf(elementsToSee[i]), 1);
                        callback();
                    }
                }
            }, true);
        }
    }


    function infiniteScrollBottomPage(nextPageCallBack) {
        document.addEventListener("scroll", function (event) {
            scrollBottom(nextPageCallBack);
        });
    }

    return {
        InfiniteScroll: infiniteScroll,
        InfiniteScrollBottomPage: infiniteScrollBottomPage
    }

    //function isScrolledIntoView(element) {
    //    var docViewTop = $(window).scrollTop();
    //    var docViewBottom = docViewTop + $(window).height();

    //    var elemTop = $(element).offset().top;
    //    var elemBottom = elemTop + $(element).height();

    //    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    //}

    //function scrollBottom(nextPageCallBack) {

    //    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
    //        nextPageCallBack();
    //    }
    //};
    function isScrolledIntoView(element) {
        var docViewTop = document.querySelector("body").scrollTop;
        var docViewBottom = docViewTop + document.querySelector("body").offsetHeight;

        var elemTop = element.offsetTop;
        var elemBottom = elemTop + element.offsetHeight;

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function scrollBottom(nextPageCallBack) {

        if (document.querySelector(window).scrollTop >= document.querySelector(document).height() - document.querySelector(window).height() - 100) {
            nextPageCallBack();
        }
    };
})();