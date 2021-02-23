var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        var _this = this;
        this.container = container;
        this.render = function (item, heading, position) {
            var li = document.createElement('li');
            var h4 = document.createElement('h4');
            h4.innerText = heading;
            li.append(h4);
            var p = document.createElement('p');
            p.innerText = item.format();
            li.append(p);
            if (position === 'start') {
                _this.container.prepend(li);
            }
            else {
                _this.container.append(li);
            }
        };
    }
    return ListTemplate;
}());
export { ListTemplate };
