var yo = require('yo-yo');
var layout = require('../layout');

var template = yo`<div class="container timeline">
    <div class="row">
        <div class="col s12 m10 offset-m1 l6 offset-l3">
            content
        </div>
    </div>
</div>`;

module.exports = layout(template);