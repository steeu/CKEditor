// set editor basepath
CKEDITOR_BASEPATH = '/widgets-custom/CKEditor/libs/ckeditor/';

WAF.define('CKEditor', ['waf-core/widget'], function(widget) {
	
    var CKEditor = widget.create('CKEditor', {
        init: function() {
            try {
            	var _this = this;

            	// create editor with CKEditor plugin
            	_this.editor = CKEDITOR.appendTo(_this.node, {
                    customConfig: _this.customConfigPath(),
                    language: _this.language()
                });

                // add content to datasource
                _this.editor.on('change', function(e) {
                	// clear timer
                	if (_this.throttleGet) {
                		clearTimeout(_this.throttleGet);
                	}
                	// throttle function calls to every 250 milliseconds
                	_this.throttleGet = setTimeout(function() {
                        subscriber.pause();
                        // set datasource value
                        _this.content(_this.editor.getData());
                        subscriber.resume();
                	}, 250);
                });
                
                // set editor content on datasource current element change
                var subscriber = _this.content.onChange(function() {
                	_this.setValue(_this.content());
                });
                
                // set initial editor content
                _this.editor.on('instanceReady', function() {
                    _this.editor.resize(_this.width(), _this.height());
                    _this.editor.setData(_this.content());
                    _this.fire('instanceReady');
                });
            } catch (e) {
                console.log(e.message);
            }
        },
        content: widget.property({
            type: 'string',
    		defaultValue: ''
    	}),
    	customConfigPath: widget.property({
    		type: 'string',
    		defaultValue: ''
    	}),
    	language: widget.property({
    		type: 'string',
    	    bindable: false,
    	    defaultValue: 'en'
    	}),
    	getValue: function() {
    	    // get editor value
    		return this.editor.getData();
    	},
    	setValue: function(value) {
            var _this = this;
   
           	// throttle function to set editor content    
        	if (_this.throttleSet) {
        		clearTimeout(_this.throttleSet);
        	}
        	_this.throttleSet = setTimeout(function() {
                // set editor data
                if (value == 'null' || value == null) {
              		_this.editor.setData('');
                } else {
              		_this.editor.setData(value);
                }
        	}, 50);
    	},
    	setReadOnly: function(value) {
    	    // set read only
            this.editor.setReadOnly(value);
    	}
    });

    return CKEditor;
});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */
