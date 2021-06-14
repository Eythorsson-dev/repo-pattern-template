var loadHandler = (function () {
    'use strict';

    function tableLoader(tableElement) {
        //<tr class="table-loader">
        //    <td class="text-center" colspan="100%">
        //        <h5 class="p-1 m-0 font-weight-bold">
        //            <div class="spinner-border text-primary" role="status">
        //                <span class="visually-hidden">Loading...</span>
        //            </div>
        //                Loading...
        //            </h5>
        //    </td>
        //</tr>

        var ce = function (tag, attrs, children) {
            var elm = document.createElement(tag);

            // SET ATTRIBUTES AND ADD CHILDREN
            Object.keys(attrs || {}).forEach(key => elm.setAttribute(key, attrs[key]));
            [].concat(children).filter(x => x).forEach(child => elm.append(child));

            return elm;
        }

        var markup = (
            ce("tr", { class: "table-loader" },
                ce("td", { class: "text-center", colspan: "100%" },
                    ce("div", { class: "p-1 m-0 font-weight-bold" }, [
                        ce("div", { class: "spinner-border text-primary", role: "status" }),
                        ce("span", { class: "mx-1" })
                    ])
                )
            )
        );

        tableElement.querySelector("tbody").append(markup);
    }

    function removeTableLoader(tableElement) {
        tableElement.querySelector("tbody .table-loader").remove();
    }

    function addGlobalLoader() {
        document.getElementById("globalLoader").style.display = 'block';
    }

    function removeGlobalLoader() {
        document.getElementById("globalLoader").style.display = 'none';
    }

    return {
        AddTableLoader: tableLoader,
        RemoveTableLoader: removeTableLoader,
        AddGlobalLoader: addGlobalLoader,
        RemoveGlobalLoader: removeGlobalLoader,
    }
})();