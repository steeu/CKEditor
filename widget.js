WAF.define('CKEditor', ['waf-core/widget'], function(widget) {
	
    var CKEditor = widget.create('CKEditor', {
        init: function() {
            try {
            	var _this = this;

            	// create editor with CKEditor plugin
            	_this.editor = CKEDITOR.appendTo(_this.node, {
                    customConfig: _this.customConfigPath()
                });

                // add content to datasource
                _this.editor.on('change', function( e ) {
                	// clear timer
                	if ( _this.throttle ) {
                		clearTimeout(_this.throttle);
                	}
                	// throttle function calls to every 250 milliseconds
                	_this.throttle = setTimeout(function(){
                        // set datasource value
                        _this.content(_this.editor.getData());
                	}, 250);
                });
                
                // set editor content on datasource current element change
                ckEditorDatasource = _this.content.boundDatasource();
                
                // set editor content on current element change
                WAF.sources[ckEditorDatasource.datasourceName].addListener("onCurrentElementChange", function (event){
                    var value = event.dataSource[ckEditorDatasource.attribute];
		    		// check event kind
                    if (event.eventKind == 'onCurrentElementChange') {
                        _this.setValue(value);
                    }
                });
                
                // set initial editor content
                _this.editor.on('instanceReady', function(){
                    _this.editor.resize(_this.width(), _this.height());
                    _this.setValue(_this.content());
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
    	getValue: function() {
    	    var _this = this;
    		// get editor data
    		return _this.content();
    	},
    	setValue: function(value) {
    	    var _this = this;
    		// set editor data
    		_this.content(value);
    		_this.editor.setData(value);
    	}
    });

    return CKEditor;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */
