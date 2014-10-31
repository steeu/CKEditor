## CKEditor for [Wakanda](http://wakanda.org)

CKEditor is an easy to use WYSIWYG editor for Wakanda.

* CKEditor website: http://ckeditor.com
* CKEditor documentation: http://docs.ckeditor.com

### Properties
The CKEditor widget has the following properties:

* __content__: datasource attribute for content

### Functions
The CKEditor widget has the following functions:

* __setValue()__: set current editor content
* __getValue()__: get current editor content

### Example
```javascript
// save editor content to datasource
WAF.sources.DATASOURCE_NAME.ATTRIBUTE_NAME = WAF.widgets.WIDGET_NAME.getValue();
WAF.sources.DATASOURCE_NAME.save({
  onSuccess:function(event) {
    // content saved
  }
});
```

### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
