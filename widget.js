WAF.define('CKEditor', ['waf-core/widget'], function(widget) {
	
	var _this;
	
    var CKEditor = widget.create('CKEditor', {
        init: function() {
        	
        	_this = this;

        	// create editor with CKEditor plugin
        	_this.editor = CKEDITOR.appendTo(_this.node);
        	
//            /* Define a custom event */
//            this.fire('myEvent', {
//                message: 'Hello'
//            });
        },
        content: widget.property({
    		onChange: function(value) {
    			_this.editor.setData(value);
//    			this.node.value = moment(this.dateTime()).format('DD.MM.YYYY HH:mm');
            }
    	}),
    	getValue: function() {
    		// get editor data
    		return _this.editor.getData();
    	},
    	setValue: function(value) {
    		// set editor data
    		_this.editor.setData(value);
    	}
//        ,
//        /* Create a property */
//        test: widget.property({
//            onChange: function(newValue) {
//                this.node.innerHTML = this.test(); /* this contains the widget and newValue contains its current value */
//            }
//        })
    });

//    /* Map the custom event above to the DOM click event */
//    CKEditor.mapDomEvents({
//        'click': 'action'
//    });

    return CKEditor;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */