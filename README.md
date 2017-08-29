# BindLite
Two way data binding, dependant on lodash.

## About

BindLite is a 2-way data binding library.  
It lets you easily bind a DOM element to a Model (Object) and keep them at sync. BindLite supports multitue array as Model for its DOM binding.

### Dependencies
Lodash [Download](https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js)

## Compatible with all latest browsers
Works with: IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+

#### HTML Script TAG
```html
<script src="BindLite.js" type="text/javascript"></script>
<!-- BindLite will be global variable window.BindLite -->

#### RequireJS
```javascript
require("BindLite", function(BindLite){
    let bind = new DataBind(options);
});
```

# Examples

```html
<div id="customerContainer">
    <fieldset>
        <input type="text" data-bind="customer.first_name" value="" />
        <input type="text" data-bind="customer.last_name" value="" />
        <input type="text" data-bind="customer.email_name" value="" />
        <input type="text" data-bind="customer.phone_name" value="" />
    </fieldset>
</div>
```

```javascript
let options = {
    selector: "#customerContainer",
    model: {
        customer: {
            first_name:"First Name 1",
            last_name:"Last Name 1",
            last_name:"email1@gmail.com",
            phone_name:"900000000"            
        }
    }
};
var BL = new BindLite(options);
```

## Allow deep array bindings
```html
<div id="customerContainer">
    <fieldset>
        <input type="text" data-bind="customer[0].first_name" value="" />
        <input type="text" data-bind="customer[0].last_name" value="" />
        <input type="text" data-bind="customer[0].email_name" value="" />
        <input type="text" data-bind="customer[0].phone_name" value="" />
    </fieldset>
    <fieldset>
        <input type="text" data-bind="customer[1].first_name" value="" />
        <input type="text" data-bind="customer[1].last_name" value="" />
        <input type="text" data-bind="customer[1].email_name" value="" />
        <input type="text" data-bind="customer[1].phone_name" value="" />
    </fieldset>
</div>
```

```javascript
let options = {
    selector: "#customerContainer",
    model: {
        customer: [{
            first_name:"First Name 1",
            last_name:"Last Name 1",
            last_name:"email1@gmail.com",
            phone_name:"900000000"            
        },
        {
            first_name:"First Name 2",
            last_name:"Last Name 2",
            last_name:"email2@gmail.com",
            phone_name:"900000000"            
        }]
    }
};
var BL = new BindLite(options);
```

## Allow binding of Events

```html
<div id="customerContainer">
    <fieldset>
        <input type="text" data-bind="customer.first_name" value="" />
        <input type="text" data-bind="customer.last_name" value="" />
        <input type="text" data-bind="customer.email_name" value="" />
        <input type="text" data-bind="customer.phone_name" value="" />
        <input type="button" data-event="click:myFunc" value="Click Me" />
    </fieldset>
</div>
```

```javascript
let options = {
    selector: "#customerContainer",
    model: {
        customer: {
            first_name:"First Name 1",
            last_name:"Last Name 1",
            last_name:"email1@gmail.com",
            phone_name:"900000000"            
        }
    },
    event:{
        myFunc:function(model){
            console.log('Updated-Model:',model);
        }
    }
};
var BL = new BindLite(options);
```

# Coming up!
Plans for future release includes:
* Automate build and minification process
* Polifil lodash depedency
* Add Example
* More browsers support (IE8, IE7? IE6?!)
* Other things you request :)
