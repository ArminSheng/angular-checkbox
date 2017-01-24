# angular-checkbox


**Angular Checkbox** is a plugin for AngularJs 


**Demo**: [_angular checkbox_](https://arminsheng.github.io/angular-checkbox/example/)

## Features
* Batch checking
* Get all checked items through getSelectedItems method 
* Do not require ng-model 

## Usage

First of all, Add "angularCheckbox" to your modules.
```
var app = angular.module('app', ['angularCheckbox']);
```

* check-all directive

```
<check-all 
    checkboxer="checkboxer"
    ng-disabled="true/false/expression"       (optional)
></check-all>
```

* check-item directive

```
<check-item 
    checkboxer="checkboxer"
    item="item"
    ng-disabled="true/false/expression"       (optional)
></check-item>
```

When you check the "check-all" input, all of the "check-item" input will being checked 
