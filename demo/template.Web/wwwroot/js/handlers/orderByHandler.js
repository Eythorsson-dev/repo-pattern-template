var orderByHandler = (function () {
    'use strict';

    function handle(filter, key) {
        filter.CurrentPage = 1;
        if (filter.OrderBy == key) {
            if (filter.OrderByDesc) {
                filter.OrderByDesc = false;
            } else {
                filter.OrderByDesc = true;
            }           
            return filter;
        }
        filter.OrderBy = key;
        filter.OrderByDesc = true;
        
        return filter;
    }

    return {
        Handle: handle
    }
})();