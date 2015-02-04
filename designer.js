(function(CKEditor) {

//    /* Default width and height of your widget */
    CKEditor.setWidth('740');
    CKEditor.setHeight('440');

//    /* Define custom event for your widget */
//    CKEditor.addEvent('myEvent');

//    /* Customize existing properties */
    CKEditor.customizeProperty('customConfigPath', {
        title: 'Config file path',
        description: 'Path to custom config file',
        display: true,
        sourceTitle: '',
		sourceDisplay: false
    });

    CKEditor.customizeProperty('language', {
        title: 'Editor language',
        description: 'Editor user interface language',
        display: true,
        sourceTitle: '',
		sourceDisplay: false
    });
	
    // Special events	
	CKEditor.addEvent({
		'name':'instanceReady',
		'description':'On Instance Ready',
		'category': 'Special Events'
	});

//    /* Add a Label property */
//    CKEditor.addLabel({
//        'defaultValue': '',
//        'position': 'top'
//    });

//    /* Set the Design and Styles panels */
//    CKEditor.setPanelStyle({
//        'fClass': true,
//        'text': true,
//        'background': true,
//        'border': true,
//        'sizePosition': true,
//        'label': true,
//        'disabled': ['border-radius']
//    });

//    /* Override widget's initialization */
//    CKEditor.prototype.init = function() {
//        this.node.innerHTML = "Widget Text"; /* Include text inside the widget */
//    }

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html