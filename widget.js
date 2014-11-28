WAF.define('CKEditor', ['waf-core/widget'], function(widget) {
	
	var _this;
	
    var CKEditor = widget.create('CKEditor', {
        init: function() {
        	
        	_this = this;

        	// create editor with CKEditor plugin
        	_this.editor = CKEDITOR.appendTo(_this.node, {
                customConfig: _this.customConfigPath()
            });

            // editor events
            _this.editor.on( 'blur', function( e ) {                
                // set datasource value
                _this.content(_this.editor.getData());
                // log
                console.log('Set datasource value of CKEditor content');
            });
        },
        content: widget.property({
    		onChange: function(value) {
    			_this.editor.setData(value);
            }
    	}),
    	customConfigPath: widget.property({
    		type: 'string',
    		defaultValue: ''
    	}),
    	getValue: function() {
    		// get editor data
    		return _this.editor.getData();
    	},
    	setValue: function(value) {
    		// set editor data
    		_this.editor.setData(value);
    	}
    });

    return CKEditor;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */